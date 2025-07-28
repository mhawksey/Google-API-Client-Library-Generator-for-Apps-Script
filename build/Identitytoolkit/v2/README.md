# Identity Toolkit API - Apps Script Client Library

Auto-generated client library for using the **Identity Toolkit API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:56:19 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:34:19 GMT
- **Created:** Sun, 20 Jul 2025 16:35:20 GMT



---

## API Reference

### `projects`

#### `projects.getConfig()`

Retrieve an Identity Toolkit project configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: "projects/my-awesome-project/config" |

#### `projects.updateConfig()`

Update an Identity Toolkit project configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The name of the Config resource. Example: "projects/my-awesome-project/config" |
| `params.updateMask` | `string` | No | The update mask applies to the resource. Fields set in the config but not included in this update mask will be ignored. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.identityPlatform`

#### `projects.identityPlatform.initializeAuth()`

Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The resource name of the target project the developer wants to enable Identity Platform for. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.defaultSupportedIdpConfigs`

#### `projects.defaultSupportedIdpConfigs.create()`

Create a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name where the config to be created, for example: "projects/my-awesome-project" |
| `params.idpId` | `string` | No | The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.defaultSupportedIdpConfigs.delete()`

Delete a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" |

#### `projects.defaultSupportedIdpConfigs.get()`

Retrieve a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" |

#### `projects.defaultSupportedIdpConfigs.list()`

List all default supported Idp configurations for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name, for example, "projects/my-awesome-project". |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.defaultSupportedIdpConfigs.patch()`

Update a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.oauthIdpConfigs`

#### `projects.oauthIdpConfigs.create()`

Create an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name where the config to be created, for example: "projects/my-awesome-project" |
| `params.oauthIdpConfigId` | `string` | No | The id to use for this config. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.oauthIdpConfigs.delete()`

Delete an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. |

#### `projects.oauthIdpConfigs.get()`

Retrieve an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. |

#### `projects.oauthIdpConfigs.list()`

List all Oidc Idp configurations for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name, for example, "projects/my-awesome-project". |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.oauthIdpConfigs.patch()`

Update an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.inboundSamlConfigs`

#### `projects.inboundSamlConfigs.create()`

Create an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name where the config to be created, for example: "projects/my-awesome-project" |
| `params.inboundSamlConfigId` | `string` | No | The id to use for this config. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.inboundSamlConfigs.delete()`

Delete an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. |

#### `projects.inboundSamlConfigs.get()`

Retrieve an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. |

#### `projects.inboundSamlConfigs.list()`

List all inbound SAML configurations for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name, for example, "projects/my-awesome-project". |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.inboundSamlConfigs.patch()`

Update an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.tenants`

#### `projects.tenants.setIamPolicy()`

Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.getIamPolicy()`

Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.testIamPermissions()`

Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.create()`

Create a tenant. Requires write permission on the Agent project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name where the tenant will be created. For example, "projects/project1". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.delete()`

Delete a tenant. Requires write permission on the Agent project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the tenant to delete. |

#### `projects.tenants.get()`

Get a tenant. Requires read permission on the Tenant resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the tenant to retrieve. |

#### `projects.tenants.list()`

List tenants under the given agent project. Requires read permission on the Agent project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name to list tenants for. |
| `params.pageToken` | `string` | No | The pagination token from the response of a previous request. |
| `params.pageSize` | `integer` | No | The maximum number of results to return, capped at 1000. If not specified, the default value is 20. |

#### `projects.tenants.patch()`

Update a tenant. Requires write permission on the Tenant resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of a tenant. For example: "projects/{project-id}/tenants/{tenant-id}" |
| `params.updateMask` | `string` | No | If provided, only update fields set in the update mask. Otherwise, all settable fields will be updated. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.tenants.defaultSupportedIdpConfigs`

#### `projects.tenants.defaultSupportedIdpConfigs.create()`

Create a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name where the config to be created, for example: "projects/my-awesome-project" |
| `params.idpId` | `string` | No | The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.defaultSupportedIdpConfigs.delete()`

Delete a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" |

#### `projects.tenants.defaultSupportedIdpConfigs.get()`

Retrieve a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" |

#### `projects.tenants.defaultSupportedIdpConfigs.list()`

List all default supported Idp configurations for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name, for example, "projects/my-awesome-project". |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.tenants.defaultSupportedIdpConfigs.patch()`

Update a default supported Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.tenants.oauthIdpConfigs`

#### `projects.tenants.oauthIdpConfigs.create()`

Create an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name where the config to be created, for example: "projects/my-awesome-project" |
| `params.oauthIdpConfigId` | `string` | No | The id to use for this config. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.oauthIdpConfigs.delete()`

Delete an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. |

#### `projects.tenants.oauthIdpConfigs.get()`

Retrieve an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. |

#### `projects.tenants.oauthIdpConfigs.list()`

List all Oidc Idp configurations for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name, for example, "projects/my-awesome-project". |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.tenants.oauthIdpConfigs.patch()`

Update an Oidc Idp configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.tenants.inboundSamlConfigs`

#### `projects.tenants.inboundSamlConfigs.create()`

Create an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name where the config to be created, for example: "projects/my-awesome-project" |
| `params.inboundSamlConfigId` | `string` | No | The id to use for this config. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.inboundSamlConfigs.delete()`

Delete an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. |

#### `projects.tenants.inboundSamlConfigs.get()`

Retrieve an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. |

#### `projects.tenants.inboundSamlConfigs.list()`

List all inbound SAML configurations for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name, for example, "projects/my-awesome-project". |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.tenants.inboundSamlConfigs.patch()`

Update an inbound SAML configuration for an Identity Toolkit project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `defaultSupportedIdps`

#### `defaultSupportedIdps.list()`

List all default supported Idps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

### `v2`

#### `v2.getRecaptchaConfig()`

Gets parameters needed for reCAPTCHA analysis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tenantId` | `string` | No | The id of a tenant. |
| `params.clientType` | `string` | No | reCAPTCHA Enterprise uses separate site keys for different client types. Specify the client type to get the corresponding key. |
| `params.version` | `string` | No | The reCAPTCHA version. |

#### `v2.getPasswordPolicy()`

Gets password policy config set on the project or tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tenantId` | `string` | No | The id of a tenant. |

### `accounts`

#### `accounts.revokeToken()`

Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `accounts.mfaEnrollment`

#### `accounts.mfaEnrollment.finalize()`

Finishes enrolling a second factor for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.mfaEnrollment.start()`

Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.mfaEnrollment.withdraw()`

Revokes one second factor from the enrolled second factors for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `accounts.mfaSignIn`

#### `accounts.mfaSignIn.finalize()`

Verifies the MFA challenge and performs sign-in

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.mfaSignIn.start()`

Sends the MFA challenge

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |