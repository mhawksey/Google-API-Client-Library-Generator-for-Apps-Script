
/**
 * Google Apps Script client library for the Cloud Key Management Service (KMS) API
 * Documentation URL: https://cloud.google.com/kms/
 * @class
 */
class Cloudkms {
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
    this._rootUrl = 'https://cloudkms.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.folders = {};

    /**
     * Updates the AutokeyConfig for a folder. The caller must have both `cloudkms.autokeyConfigs.update` permission on the parent folder and `cloudkms.cryptoKeys.setIamPolicy` permission on the provided key project. A KeyHandle creation in the folder's descendant projects will use this configuration to determine where to create the resulting CryptoKey.
     * @param {string} params.name - (Required) Identifier. Name of the AutokeyConfig resource, e.g. `folders/{FOLDER_NUMBER}/autokeyConfig`.
     * @param {string} params.updateMask - Required. Masks which fields of the AutokeyConfig to update, e.g. `keyProject`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateAutokeyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Returns the AutokeyConfig for a folder.
     * @param {string} params.name - (Required) Required. Name of the AutokeyConfig resource, e.g. `folders/{FOLDER_NUMBER}/autokeyConfig`.
     * @return {object} The API response object.
     */
    this.folders.getAutokeyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.
     * @param {string} params.name - (Required) Required. The name of the KeyAccessJustificationsPolicyConfig to get.
     * @return {object} The API response object.
     */
    this.folders.getKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.
     * @param {string} params.name - (Required) Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*\/kajPolicyConfig".
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects = {};

    /**
     * Returns the effective Cloud KMS Autokey configuration for a given project.
     * @param {string} params.parent - (Required) Required. Name of the resource project to the show effective Cloud KMS Autokey configuration for. This may be helpful for interrogating the effect of nested folder configurations on a given resource project.
     * @return {object} The API response object.
     */
    this.projects.showEffectiveAutokeyConfig = (params) => this._makeRequest('v1/{+parent}:showEffectiveAutokeyConfig', 'GET', params);

    /**
     * Gets the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.
     * @param {string} params.name - (Required) Required. The name of the KeyAccessJustificationsPolicyConfig to get.
     * @return {object} The API response object.
     */
    this.projects.getKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.
     * @param {string} params.name - (Required) Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*\/kajPolicyConfig".
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy.
     * @param {string} params.project - (Required) Required. The number or id of the project to get the effective KeyAccessJustificationsPolicyConfig. In the format of "projects/{|}"
     * @return {object} The API response object.
     */
    this.projects.showEffectiveKeyAccessJustificationsPolicyConfig = (params) => this._makeRequest('v1/{+project}:showEffectiveKeyAccessJustificationsPolicyConfig', 'GET', params);

    /**
     * Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy.
     * @param {string} params.project - (Required) Required. The number or id of the project to get the effective KeyAccessJustificationsEnrollmentConfig for.
     * @return {object} The API response object.
     */
    this.projects.showEffectiveKeyAccessJustificationsEnrollmentConfig = (params) => this._makeRequest('v1/{+project}:showEffectiveKeyAccessJustificationsEnrollmentConfig', 'GET', params);

    this.projects.locations = {};

    /**
     * Returns the EkmConfig singleton resource for a given project and location.
     * @param {string} params.name - (Required) Required. The name of the EkmConfig to get.
     * @return {object} The API response object.
     */
    this.projects.locations.getEkmConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the EkmConfig singleton resource for a given project and location.
     * @param {string} params.name - (Required) Output only. The resource name for the EkmConfig in the format `projects/*\/locations/*\/ekmConfig`.
     * @param {string} params.updateMask - Required. List of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateEkmConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Generate random bytes using the Cloud KMS randomness source in the provided location.
     * @param {string} params.location - (Required) The project-specific location in which to generate random bytes. For example, "projects/my-project/locations/us-central1".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.generateRandomBytes = (params) => this._makeRequest('v1/{+location}:generateRandomBytes', 'POST', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.keyHandles = {};

    /**
     * Creates a new KeyHandle, triggering the provisioning of a new CryptoKey for CMEK use with the given resource type in the configured key project and the same location. GetOperation should be used to resolve the resulting long-running operation and get the resulting KeyHandle and CryptoKey.
     * @param {string} params.keyHandleId - Optional. Id of the KeyHandle. Must be unique to the resource project and location. If not provided by the caller, a new UUID is used.
     * @param {string} params.parent - (Required) Required. Name of the resource project and location to create the KeyHandle in, e.g. `projects/{PROJECT_ID}/locations/{LOCATION}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyHandles.create = (params) => this._makeRequest('v1/{+parent}/keyHandles', 'POST', params);

    /**
     * Returns the KeyHandle.
     * @param {string} params.name - (Required) Required. Name of the KeyHandle resource, e.g. `projects/{PROJECT_ID}/locations/{LOCATION}/keyHandles/{KEY_HANDLE_ID}`.
     * @return {object} The API response object.
     */
    this.projects.locations.keyHandles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists KeyHandles.
     * @param {string} params.filter - Optional. Filter to apply when listing KeyHandles, e.g. `resource_type_selector="{SERVICE}.googleapis.com/{TYPE}"`.
     * @param {integer} params.pageSize - Optional. Optional limit on the number of KeyHandles to include in the response. The service may return fewer than this value. Further KeyHandles can subsequently be obtained by including the ListKeyHandlesResponse.next_page_token in a subsequent request. If unspecified, at most 100 KeyHandles will be returned.
     * @param {string} params.pageToken - Optional. Optional pagination token, returned earlier via ListKeyHandlesResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. Name of the resource project and location from which to list KeyHandles, e.g. `projects/{PROJECT_ID}/locations/{LOCATION}`.
     * @return {object} The API response object.
     */
    this.projects.locations.keyHandles.list = (params) => this._makeRequest('v1/{+parent}/keyHandles', 'GET', params);

    this.projects.locations.ekmConnections = {};

    /**
     * Lists EkmConnections.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer} params.pageSize - Optional. Optional limit on the number of EkmConnections to include in the response. Further EkmConnections can subsequently be obtained by including the ListEkmConnectionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Optional pagination token, returned earlier via ListEkmConnectionsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.list = (params) => this._makeRequest('v1/{+parent}/ekmConnections', 'GET', params);

    /**
     * Returns metadata for a given EkmConnection.
     * @param {string} params.name - (Required) Required. The name of the EkmConnection to get.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new EkmConnection in a given Project and Location.
     * @param {string} params.ekmConnectionId - Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`.
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the EkmConnection, in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.create = (params) => this._makeRequest('v1/{+parent}/ekmConnections', 'POST', params);

    /**
     * Updates an EkmConnection's metadata.
     * @param {string} params.name - (Required) Output only. The resource name for the EkmConnection in the format `projects/*\/locations/*\/ekmConnections/*`.
     * @param {string} params.updateMask - Required. List of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
     * @param {string} params.name - (Required) Required. The name of the EkmConnection to verify.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.verifyConnectivity = (params) => this._makeRequest('v1/{+name}:verifyConnectivity', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConnections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.keyRings = {};

    /**
     * Lists KeyRings.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer} params.pageSize - Optional. Optional limit on the number of KeyRings to include in the response. Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the KeyRings, in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.list = (params) => this._makeRequest('v1/{+parent}/keyRings', 'GET', params);

    /**
     * Returns metadata for a given KeyRing.
     * @param {string} params.name - (Required) Required. The name of the KeyRing to get.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Create a new KeyRing in a given Project and Location.
     * @param {string} params.keyRingId - Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent - (Required) Required. The resource name of the location associated with the KeyRings, in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.create = (params) => this._makeRequest('v1/{+parent}/keyRings', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.keyRings.cryptoKeys = {};

    /**
     * Lists CryptoKeys.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer} params.pageSize - Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the KeyRing to list, in the format `projects/*\/locations/*\/keyRings/*`.
     * @param {string} params.versionView - The fields of the primary version to include in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.list = (params) => this._makeRequest('v1/{+parent}/cryptoKeys', 'GET', params);

    /**
     * Returns metadata for a given CryptoKey, as well as its primary CryptoKeyVersion.
     * @param {string} params.name - (Required) Required. The name of the CryptoKey to get.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
     * @param {string} params.cryptoKeyId - Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent - (Required) Required. The name of the KeyRing associated with the CryptoKeys.
     * @param {boolean} params.skipInitialVersionCreation - If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.create = (params) => this._makeRequest('v1/{+parent}/cryptoKeys', 'POST', params);

    /**
     * Update a CryptoKey.
     * @param {string} params.name - (Required) Output only. The resource name for this CryptoKey in the format `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*`.
     * @param {string} params.updateMask - Required. List of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKey to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion = (params) => this._makeRequest('v1/{+name}:updatePrimaryVersion', 'POST', params);

    /**
     * Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption. If a CryptoKey is specified, the server will use its primary version.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.encrypt = (params) => this._makeRequest('v1/{+name}:encrypt', 'POST', params);

    /**
     * Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.decrypt = (params) => this._makeRequest('v1/{+name}:decrypt', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions = {};

    /**
     * Lists CryptoKeyVersions.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer} params.pageSize - Optional. Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the CryptoKey to list, in the format `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*`.
     * @param {string} params.view - The fields to include in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list = (params) => this._makeRequest('v1/{+parent}/cryptoKeyVersions', 'GET', params);

    /**
     * Returns metadata for a given CryptoKeyVersion.
     * @param {string} params.name - (Required) Required. The name of the CryptoKeyVersion to get.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
     * @param {string} params.name - (Required) Required. The name of the CryptoKeyVersion public key to get.
     * @param {string} params.publicKeyFormat - Optional. The PublicKey format specified by the user. This field is required for PQC algorithms. If specified, the public key will be exported through the public_key field in the requested format. Otherwise, the pem field will be populated for non-PQC algorithms, and an error will be returned for PQC algorithms.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey = (params) => this._makeRequest('v1/{+name}/publicKey', 'GET', params);

    /**
     * Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
     * @param {string} params.parent - (Required) Required. The name of the CryptoKey associated with the CryptoKeyVersions.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create = (params) => this._makeRequest('v1/{+parent}/cryptoKeyVersions', 'POST', params);

    /**
     * Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
     * @param {string} params.parent - (Required) Required. The name of the CryptoKey to be imported into. The create permission is only required on this key when creating a new CryptoKeyVersion.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import = (params) => this._makeRequest('v1/{+parent}/cryptoKeyVersions:import', 'POST', params);

    /**
     * Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
     * @param {string} params.name - (Required) Output only. The resource name for this CryptoKeyVersion in the format `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/cryptoKeyVersions/*`.
     * @param {string} params.updateMask - Required. List of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to destroy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy = (params) => this._makeRequest('v1/{+name}:destroy', 'POST', params);

    /**
     * Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to restore.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore = (params) => this._makeRequest('v1/{+name}:restore', 'POST', params);

    /**
     * Encrypts data using portable cryptographic primitives. Most users should choose Encrypt and Decrypt rather than their raw counterparts. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to use for encryption.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawEncrypt = (params) => this._makeRequest('v1/{+name}:rawEncrypt', 'POST', params);

    /**
     * Decrypts data that was originally encrypted using a raw cryptographic mechanism. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to use for decryption.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawDecrypt = (params) => this._makeRequest('v1/{+name}:rawDecrypt', 'POST', params);

    /**
     * Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to use for signing.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign = (params) => this._makeRequest('v1/{+name}:asymmetricSign', 'POST', params);

    /**
     * Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to use for decryption.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt = (params) => this._makeRequest('v1/{+name}:asymmetricDecrypt', 'POST', params);

    /**
     * Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to use for signing.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macSign = (params) => this._makeRequest('v1/{+name}:macSign', 'POST', params);

    /**
     * Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
     * @param {string} params.name - (Required) Required. The resource name of the CryptoKeyVersion to use for verification.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macVerify = (params) => this._makeRequest('v1/{+name}:macVerify', 'POST', params);

    this.projects.locations.keyRings.importJobs = {};

    /**
     * Lists ImportJobs.
     * @param {string} params.filter - Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string} params.orderBy - Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer} params.pageSize - Optional. Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the KeyRing to list, in the format `projects/*\/locations/*\/keyRings/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.importJobs.list = (params) => this._makeRequest('v1/{+parent}/importJobs', 'GET', params);

    /**
     * Returns metadata for a given ImportJob.
     * @param {string} params.name - (Required) Required. The name of the ImportJob to get.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.importJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
     * @param {string} params.importJobId - Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent - (Required) Required. The name of the KeyRing associated with the ImportJobs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.importJobs.create = (params) => this._makeRequest('v1/{+parent}/importJobs', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.importJobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.importJobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keyRings.importJobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.ekmConfig = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConfig.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConfig.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ekmConfig.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations = {};

    /**
     * Gets the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.
     * @param {string} params.name - (Required) Required. The name of the KeyAccessJustificationsPolicyConfig to get.
     * @return {object} The API response object.
     */
    this.organizations.getKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.
     * @param {string} params.name - (Required) Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*\/kajPolicyConfig".
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
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
