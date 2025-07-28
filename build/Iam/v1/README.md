# Identity and Access Management (IAM) API - Apps Script Client Library

Auto-generated client library for using the **Identity and Access Management (IAM) API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:56:07 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:34:07 GMT
- **Created:** Sun, 20 Jul 2025 16:35:04 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.oauthClients`

#### `projects.locations.oauthClients.list()`

Lists all non-deleted OauthClients in a project. If `show_deleted` is set to `true`, then deleted OauthClients are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent to list OauthClients for. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of OauthClients to return. If unspecified, at most 50 OauthClients will be returned. The maximum value is 100; values above 100 are truncated to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListOauthClients` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Optional. Whether to return soft-deleted OauthClients. |

#### `projects.locations.oauthClients.get()`

Gets an individual OauthClient.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OauthClient to retrieve. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`. |

#### `projects.locations.oauthClients.create()`

Creates a new OauthClient. You cannot reuse the name of a deleted OauthClient until 30 days after deletion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create the OauthClient in. The only supported location is `global`. |
| `params.oauthClientId` | `string` | No | Required. The ID to use for the OauthClient, which becomes the final component of the resource name. This value should be a string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.oauthClients.patch()`

Updates an existing OauthClient.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of the OauthClient. Format:`projects/{project}/locations/{location}/oauthClients/{oauth_client}`. |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.oauthClients.delete()`

Deletes an OauthClient. You cannot use a deleted OauthClient. However, deletion does not revoke access tokens that have already been issued. They continue to grant access. Deletion does revoke refresh tokens that have already been issued. They cannot be used to renew an access token. If the OauthClient is undeleted, and the refresh tokens are not expired, they are valid for token exchange again. You can undelete an OauthClient for 30 days. After 30 days, deletion is permanent. You cannot update deleted OauthClients. However, you can view and list them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OauthClient to delete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`. |

#### `projects.locations.oauthClients.undelete()`

Undeletes an OauthClient, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OauthClient to undelete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.oauthClients.credentials`

#### `projects.locations.oauthClients.credentials.list()`

Lists all OauthClientCredentials in an OauthClient.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent to list OauthClientCredentials for. |

#### `projects.locations.oauthClients.credentials.get()`

Gets an individual OauthClientCredential.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OauthClientCredential to retrieve. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`. |

#### `projects.locations.oauthClients.credentials.create()`

Creates a new OauthClientCredential.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create the OauthClientCredential in. |
| `params.oauthClientCredentialId` | `string` | No | Required. The ID to use for the OauthClientCredential, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.oauthClients.credentials.patch()`

Updates an existing OauthClientCredential.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of the OauthClientCredential. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}` |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.oauthClients.credentials.delete()`

Deletes an OauthClientCredential. Before deleting an OauthClientCredential, it should first be disabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OauthClientCredential to delete. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`. |

### `projects.locations.workloadIdentityPools`

#### `projects.locations.workloadIdentityPools.list()`

Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to list pools for. |
| `params.pageSize` | `integer` | No | The maximum number of pools to return. If unspecified, at most 50 pools are returned. The maximum value is 1000; values above are 1000 truncated to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkloadIdentityPools` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft-deleted pools. |

#### `projects.locations.workloadIdentityPools.get()`

Gets an individual WorkloadIdentityPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool to retrieve. |

#### `projects.locations.workloadIdentityPools.create()`

Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create the pool in. The only supported location is `global`. |
| `params.workloadIdentityPoolId` | `string` | No | Required. The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.patch()`

Updates an existing WorkloadIdentityPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the pool. |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.delete()`

Deletes a WorkloadIdentityPool. You cannot use a deleted pool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool to delete. |

#### `projects.locations.workloadIdentityPools.undelete()`

Undeletes a WorkloadIdentityPool, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool to undelete. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.setIamPolicy()`

Sets the IAM policies on a WorkloadIdentityPool

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.getIamPolicy()`

Gets the IAM policy of a WorkloadIdentityPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.testIamPermissions()`

Returns the caller's permissions on a WorkloadIdentityPool

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workloadIdentityPools.operations`

#### `projects.locations.workloadIdentityPools.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.workloadIdentityPools.namespaces`

#### `projects.locations.workloadIdentityPools.namespaces.list()`

Lists all non-deleted WorkloadIdentityPoolNamespaces in a workload identity pool. If `show_deleted` is set to `true`, then deleted namespaces are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to list namespaces for. |
| `params.pageSize` | `integer` | No | The maximum number of namespaces to return. If unspecified, at most 50 namespaces are returned. The maximum value is 1000; values above are 1000 truncated to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkloadIdentityPoolNamespaces` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft-deleted namespaces. |

#### `projects.locations.workloadIdentityPools.namespaces.get()`

Gets an individual WorkloadIdentityPoolNamespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the namespace to retrieve. |

#### `projects.locations.workloadIdentityPools.namespaces.create()`

Creates a new WorkloadIdentityPoolNamespace in a WorkloadIdentityPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create the namespace in. The only supported location is `global`. |
| `params.workloadIdentityPoolNamespaceId` | `string` | No | Required. The ID to use for the namespace. This value must: * contain at most 63 characters * contain only lowercase alphanumeric characters or `-` * start with an alphanumeric character * end with an alphanumeric character The prefix "gcp-" will be reserved for future uses. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.patch()`

Updates an existing WorkloadIdentityPoolNamespace in a WorkloadIdentityPool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the namespace. |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.delete()`

Deletes a WorkloadIdentityPoolNamespace. You can undelete a namespace for 30 days. After 30 days, deletion is permanent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the namespace to delete. |

#### `projects.locations.workloadIdentityPools.namespaces.undelete()`

Undeletes a WorkloadIdentityPoolNamespace, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the namespace to undelete. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workloadIdentityPools.namespaces.operations`

#### `projects.locations.workloadIdentityPools.namespaces.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.workloadIdentityPools.namespaces.managedIdentities`

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.list()`

Lists all non-deleted WorkloadIdentityPoolManagedIdentitys in a namespace. If `show_deleted` is set to `true`, then deleted managed identities are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to list managed identities for. |
| `params.pageSize` | `integer` | No | The maximum number of managed identities to return. If unspecified, at most 50 managed identities are returned. The maximum value is 1000; values above are 1000 truncated to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkloadIdentityPoolManagedIdentities` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft-deleted managed identities. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.get()`

Gets an individual WorkloadIdentityPoolManagedIdentity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the managed identity to retrieve. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.create()`

Creates a new WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create the manage identity in. The only supported location is `global`. |
| `params.workloadIdentityPoolManagedIdentityId` | `string` | No | Required. The ID to use for the managed identity. This value must: * contain at most 63 characters * contain only lowercase alphanumeric characters or `-` * start with an alphanumeric character * end with an alphanumeric character The prefix "gcp-" will be reserved for future uses. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.patch()`

Updates an existing WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the managed identity. |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.delete()`

Deletes a WorkloadIdentityPoolManagedIdentity. You can undelete a managed identity for 30 days. After 30 days, deletion is permanent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the managed identity to delete. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.undelete()`

Undeletes a WorkloadIdentityPoolManagedIdentity, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the managed identity to undelete. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.addAttestationRule()`

Add an AttestationRule on a WorkloadIdentityPoolManagedIdentity. The total attestation rules after addition must not exceed 50.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. The resource name of the managed identity or namespace resource to add an attestation rule to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.removeAttestationRule()`

Remove an AttestationRule on a WorkloadIdentityPoolManagedIdentity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. The resource name of the managed identity or namespace resource to remove an attestation rule from. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.setAttestationRules()`

Set all AttestationRule on a WorkloadIdentityPoolManagedIdentity. A maximum of 50 AttestationRules can be set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. The resource name of the managed identity or namespace resource to add an attestation rule to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.listAttestationRules()`

List all AttestationRule on a WorkloadIdentityPoolManagedIdentity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. The resource name of the managed identity or namespace resource to list attestation rules of. |
| `params.filter` | `string` | No | Optional. A query filter. Supports the following function: * `container_ids()`: Returns only the AttestationRules under the specific container ids. The function expects a comma-delimited list with only project numbers and must use the format `projects/`. For example: `container_ids(projects/, projects/,...)`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of AttestationRules to return. If unspecified, at most 50 AttestationRules are returned. The maximum value is 100; values above 100 are truncated to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListWorkloadIdentityPoolProviderKeys` call. Provide this to retrieve the subsequent page. |

### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations`

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources`

### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations`

#### `projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.workloadIdentityPools.providers`

#### `projects.locations.workloadIdentityPools.providers.list()`

Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pool to list providers for. |
| `params.pageSize` | `integer` | No | The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkloadIdentityPoolProviders` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft-deleted providers. |

#### `projects.locations.workloadIdentityPools.providers.get()`

Gets an individual WorkloadIdentityPoolProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the provider to retrieve. |

#### `projects.locations.workloadIdentityPools.providers.create()`

Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pool to create this provider in. |
| `params.workloadIdentityPoolProviderId` | `string` | No | Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.providers.patch()`

Updates an existing WorkloadIdentityPoolProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the provider. |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.providers.delete()`

Deletes a WorkloadIdentityPoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the provider to delete. |

#### `projects.locations.workloadIdentityPools.providers.undelete()`

Undeletes a WorkloadIdentityPoolProvider, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the provider to undelete. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workloadIdentityPools.providers.operations`

#### `projects.locations.workloadIdentityPools.providers.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.workloadIdentityPools.providers.keys`

#### `projects.locations.workloadIdentityPools.providers.keys.list()`

Lists all non-deleted WorkloadIdentityPoolProviderKeys in a project. If show_deleted is set to `true`, then deleted pools are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent provider resource to list encryption keys for. |
| `params.pageSize` | `integer` | No | The maximum number of keys to return. If unspecified, all keys are returned. The maximum value is 10; values above 10 are truncated to 10. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkloadIdentityPoolProviderKeys` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft deleted resources as well. |

#### `projects.locations.workloadIdentityPools.providers.keys.get()`

Gets an individual WorkloadIdentityPoolProviderKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key to retrieve. |

#### `projects.locations.workloadIdentityPools.providers.keys.create()`

Create a new WorkloadIdentityPoolProviderKey in a WorkloadIdentityPoolProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent provider resource to create the key in. |
| `params.workloadIdentityPoolProviderKeyId` | `string` | No | Required. The ID to use for the key, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workloadIdentityPools.providers.keys.delete()`

Deletes an WorkloadIdentityPoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the encryption key to delete. |

#### `projects.locations.workloadIdentityPools.providers.keys.undelete()`

Undeletes an WorkloadIdentityPoolProviderKey, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the encryption key to undelete. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workloadIdentityPools.providers.keys.operations`

#### `projects.locations.workloadIdentityPools.providers.keys.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.serviceAccounts`

#### `projects.serviceAccounts.list()`

Lists every ServiceAccount that belongs to a specific project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`. |
| `params.pageSize` | `integer` | No | Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request. The default is 20, and the maximum is 100. |
| `params.pageToken` | `string` | No | Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token. |

#### `projects.serviceAccounts.get()`

Gets a ServiceAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |

#### `projects.serviceAccounts.create()`

Creates a ServiceAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.update()`

**Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.patch()`

Patches a ServiceAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.delete()`

Deletes a ServiceAccount. **Warning:** After you delete a service account, you might not be able to undelete it. If you know that you need to re-enable the service account in the future, use DisableServiceAccount instead. If you delete a service account, IAM permanently removes the service account 30 days later. Google Cloud cannot recover the service account after it is permanently removed, even if you file a support request. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use DisableServiceAccount to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |

#### `projects.serviceAccounts.undelete()`

Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.enable()`

Enables a ServiceAccount that was disabled by DisableServiceAccount. If the service account is already enabled, then this method has no effect. If the service account was disabled by other means—for example, if Google disabled the service account because it was compromised—you cannot use this method to enable the service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.disable()`

Disables a ServiceAccount immediately. If an application uses the service account to authenticate, that application can no longer call Google APIs or access Google Cloud resources. Existing access tokens for the service account are rejected, and requests for new access tokens will fail. To re-enable the service account, use EnableServiceAccount. After you re-enable the service account, its existing access tokens will be accepted, and you can request new access tokens. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use this method to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account with DeleteServiceAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.signBlob()`

 Signs a blob using the system-managed private key for a ServiceAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.signJwt()`

 Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.getIamPolicy()`

Gets the IAM policy that is attached to a ServiceAccount. This IAM policy specifies which principals have access to the service account. This method does not tell you whether the service account has been granted any roles on other resources. To check whether a service account has role grants on a resource, use the `getIamPolicy` method for that resource. For example, to view the role grants for a project, call the Resource Manager API's [projects.getIamPolicy](https://cloud.google.com/resource-manager/reference/rest/v1/projects/getIamPolicy) method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.serviceAccounts.setIamPolicy()`

Sets the IAM policy that is attached to a ServiceAccount. Use this method to grant or revoke access to the service account. For example, you could grant a principal the ability to impersonate the service account. This method does not enable the service account to access other resources. To grant roles to a service account on a resource, follow these steps: 1. Call the resource's `getIamPolicy` method to get its current IAM policy. 2. Edit the policy so that it binds the service account to an IAM role for the resource. 3. Call the resource's `setIamPolicy` method to update its IAM policy. For detailed instructions, see [Manage access to project, folders, and organizations](https://cloud.google.com/iam/help/service-accounts/granting-access-to-service-accounts) or [Manage access to other resources](https://cloud.google.com/iam/help/access/manage-other-resources).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.testIamPermissions()`

Tests whether the caller has the specified permissions on a ServiceAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.serviceAccounts.keys`

#### `projects.serviceAccounts.keys.list()`

Lists every ServiceAccountKey for a service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.keyTypes` | `string` | No | Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned. |

#### `projects.serviceAccounts.keys.get()`

Gets a ServiceAccountKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.publicKeyType` | `string` | No | Optional. The output format of the public key. The default is `TYPE_NONE`, which means that the public key is not returned. |

#### `projects.serviceAccounts.keys.create()`

Creates a ServiceAccountKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.keys.upload()`

Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.keys.delete()`

Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |

#### `projects.serviceAccounts.keys.disable()`

Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.keys.enable()`

Enable a ServiceAccountKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.roles`

#### `projects.roles.list()`

Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.pageSize` | `integer` | No | Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. |
| `params.pageToken` | `string` | No | Optional pagination token returned in an earlier ListRolesResponse. |
| `params.view` | `string` | No | Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field. |
| `params.showDeleted` | `boolean` | No | Include Roles that have been deleted. |

#### `projects.roles.get()`

Gets the definition of a Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |

#### `projects.roles.create()`

Creates a new custom Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The `parent` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [projects.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.roles.patch()`

Updates the definition of a custom Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.updateMask` | `string` | No | A mask describing which fields in the Role have changed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.roles.delete()`

Deletes a custom Role. When you delete a custom role, the following changes occur immediately:

* You cannot bind a principal to the custom role in an IAM Policy.

* Existing bindings to the custom role are not changed, but they have no effect.

* By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur:

* The custom role is permanently deleted and cannot be recovered.

* If an IAM policy contains a binding to the custom role, the binding is permanently removed.

* The custom role no longer counts toward your custom role limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.etag` | `string` | No | Used to perform a consistent read-modify-write. |

#### `projects.roles.undelete()`

Undeletes a custom Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.resource` | `object` | Yes | The request body. |

### `locations`

### `locations.workforcePools`

#### `locations.workforcePools.list()`

Lists all non-deleted WorkforcePools under the specified parent. If `show_deleted` is set to `true`, then deleted pools are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The location of the pool. Format: `locations/{location}`. |
| `params.parent` | `string` | No | Required. The parent resource to list pools for. Format: `organizations/{org-id}`. |
| `params.pageSize` | `integer` | No | The maximum number of pools to return. If unspecified, at most 50 pools will be returned. The maximum value is 1000; values above 1000 are truncated to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkforcePools` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft-deleted pools. |

#### `locations.workforcePools.get()`

Gets an individual WorkforcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool_id}` |

#### `locations.workforcePools.create()`

Creates a new WorkforcePool. You cannot reuse the name of a deleted pool until 30 days after deletion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Optional. The location of the pool to create. Format: `locations/{location}`. |
| `params.workforcePoolId` | `string` | No | Optional. The ID to use for the pool, which becomes the final component of the resource name. The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.patch()`

Updates an existing WorkforcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the pool. Format: `locations/{location}/workforcePools/{workforce_pool_id}` |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.delete()`

Deletes a WorkforcePool. You cannot use a deleted WorkforcePool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool to delete. Format: `locations/{location}/workforcePools/{workforce_pool_id}` |

#### `locations.workforcePools.undelete()`

Undeletes a WorkforcePool, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool to undelete. Format: `locations/{location}/workforcePools/{workforce_pool_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.getIamPolicy()`

Gets IAM policies on a WorkforcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.setIamPolicy()`

Sets IAM policies on a WorkforcePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.testIamPermissions()`

Returns the caller's permissions on the WorkforcePool. If the pool doesn't exist, this call returns an empty set of permissions. It doesn't return a `NOT_FOUND` error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `locations.workforcePools.operations`

#### `locations.workforcePools.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `locations.workforcePools.providers`

#### `locations.workforcePools.providers.list()`

Lists all non-deleted WorkforcePoolProviders in a WorkforcePool. If `show_deleted` is set to `true`, then deleted providers are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pool to list providers for. Format: `locations/{location}/workforcePools/{workforce_pool_id}` |
| `params.pageSize` | `integer` | No | The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkforcePoolProviders` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft-deleted providers. |

#### `locations.workforcePools.providers.get()`

Gets an individual WorkforcePoolProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the provider to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}` |

#### `locations.workforcePools.providers.create()`

Creates a new WorkforcePoolProvider in a WorkforcePool. You cannot reuse the name of a deleted provider until 30 days after deletion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pool to create this provider in. Format: `locations/{location}/workforcePools/{workforce_pool_id}` |
| `params.workforcePoolProviderId` | `string` | No | Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.providers.patch()`

Updates an existing WorkforcePoolProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the provider. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}` |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.providers.delete()`

Deletes a WorkforcePoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the provider to delete. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}` |

#### `locations.workforcePools.providers.undelete()`

Undeletes a WorkforcePoolProvider, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the provider to undelete. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `locations.workforcePools.providers.operations`

#### `locations.workforcePools.providers.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `locations.workforcePools.providers.keys`

#### `locations.workforcePools.providers.keys.list()`

Lists all non-deleted WorkforcePoolProviderKeys in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted keys are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The provider resource to list encryption keys for. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}` |
| `params.pageSize` | `integer` | No | The maximum number of keys to return. If unspecified, all keys are returned. The maximum value is 10; values above 10 are truncated to 10. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkforcePoolProviderKeys` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Whether to return soft-deleted keys. |

#### `locations.workforcePools.providers.keys.get()`

Gets a WorkforcePoolProviderKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key to retrieve. |

#### `locations.workforcePools.providers.keys.create()`

Creates a new WorkforcePoolProviderKey in a WorkforcePoolProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The provider to create this key in. |
| `params.workforcePoolProviderKeyId` | `string` | No | Required. The ID to use for the key, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.providers.keys.delete()`

Deletes a WorkforcePoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key to delete. |

#### `locations.workforcePools.providers.keys.undelete()`

Undeletes a WorkforcePoolProviderKey, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key to undelete. |
| `params.resource` | `object` | Yes | The request body. |

### `locations.workforcePools.providers.keys.operations`

#### `locations.workforcePools.providers.keys.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `locations.workforcePools.providers.scimTenants`

#### `locations.workforcePools.providers.scimTenants.list()`

Lists all non-deleted WorkforcePoolProviderScimTenants in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted scim tenants are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent to list scim tenants. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}' |
| `params.pageSize` | `integer` | No | Optional. The maximum number of scim tenants to return. If unspecified, at most 1 scim tenant will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListScimTenants` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Optional. Whether to return soft-deleted scim tenants. |

#### `locations.workforcePools.providers.scimTenants.get()`

Gets an individual WorkforcePoolProviderScimTenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the scim tenant to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}` |

#### `locations.workforcePools.providers.scimTenants.create()`

Creates a new WorkforcePoolProviderScimTenant in a WorkforcePoolProvider. You cannot reuse the name of a deleted scim tenant until 30 days after deletion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent to create scim tenant. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}' |
| `params.workforcePoolProviderScimTenantId` | `string` | No | Required. The ID to use for the scim tenant, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.providers.scimTenants.patch()`

Updates an existing WorkforcePoolProviderScimTenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the SCIM Tenant. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.providers.scimTenants.delete()`

Deletes a WorkforcePoolProviderScimTenant. You can undelete a scim tenant for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tenants. However, you can view and list them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the scim tenant to delete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}` |

#### `locations.workforcePools.providers.scimTenants.undelete()`

Undeletes a WorkforcePoolProviderScimTenant, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the scim tenant to undelete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}` |
| `params.resource` | `object` | Yes | The request body. |

### `locations.workforcePools.providers.scimTenants.tokens`

#### `locations.workforcePools.providers.scimTenants.tokens.list()`

Lists all non-deleted WorkforcePoolProviderScimTokenss in a WorkforcePoolProviderScimTenant. If `show_deleted` is set to `true`, then deleted SCIM tokens are also listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent to list scim tokens. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}' |
| `params.pageSize` | `integer` | No | Optional. The maximum number of scim tokens to return. If unspecified, at most 2 scim tokens will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListWorkforcePoolProviderScimTokens` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Optional. Whether to return soft-deleted scim tokens. |

#### `locations.workforcePools.providers.scimTenants.tokens.get()`

Gets an individual WorkforcePoolProviderScimToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the scim token to retrieve. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}` |

#### `locations.workforcePools.providers.scimTenants.tokens.create()`

Creates a new WorkforcePoolProviderScimToken in a WorkforcePoolProviderScimTenant. You cannot reuse the name of a deleted SCIM token until 30 days after deletion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent tenant to create scim token. Format: 'locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}' |
| `params.workforcePoolProviderScimTokenId` | `string` | No | Required. The ID to use for the scim token, which becomes the final component of the resource name. This value should be 4-32 characters and follow this pattern: "([a-z]([a-z0-9\\-]{2,30}[a-z0-9]))" |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.providers.scimTenants.tokens.patch()`

Updates an existing WorkforcePoolProviderScimToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the SCIM Token. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}/tokens/{token}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.workforcePools.providers.scimTenants.tokens.delete()`

Deletes a WorkforcePoolProviderScimToken. You can undelete a scim token for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tokens. However, you can view and list them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the scim token to delete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}` |

#### `locations.workforcePools.providers.scimTenants.tokens.undelete()`

Undeletes a WorkforcePoolProviderScimToken, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the scim token to undelete. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/{provider}/scimTenants/{scim_tenant}/tokens/{token}` |
| `params.resource` | `object` | Yes | The request body. |

### `locations.workforcePools.subjects`

#### `locations.workforcePools.subjects.delete()`

Deletes a WorkforcePoolSubject. Subject must not already be in a deleted state. A WorkforcePoolSubject is automatically created the first time an external credential is exchanged for a Google Cloud credential using a mapped `google.subject` attribute. There is no endpoint to manually create a WorkforcePoolSubject. For 30 days after a WorkforcePoolSubject is deleted, using the same `google.subject` attribute in token exchanges with Google Cloud STS fails. Call UndeleteWorkforcePoolSubject to undelete a WorkforcePoolSubject that has been deleted, within within 30 days of deleting it. After 30 days, the WorkforcePoolSubject is permanently deleted. At this point, a token exchange with Google Cloud STS that uses the same mapped `google.subject` attribute automatically creates a new WorkforcePoolSubject that is unrelated to the previously deleted WorkforcePoolSubject but has the same `google.subject` value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the WorkforcePoolSubject. Special characters, like `/` and `:`, must be escaped, because all URLs need to conform to the "When to Escape and Unescape" section of [RFC3986](https://www.ietf.org/rfc/rfc2396.txt). Format: `locations/{location}/workforcePools/{workforce_pool_id}/subjects/{subject_id}` |

#### `locations.workforcePools.subjects.undelete()`

Undeletes a WorkforcePoolSubject, as long as it was deleted fewer than 30 days ago.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the WorkforcePoolSubject. Special characters, like `/` and `:`, must be escaped, because all URLs need to conform to the "When to Escape and Unescape" section of [RFC3986](https://www.ietf.org/rfc/rfc2396.txt). Format: `locations/{location}/workforcePools/{workforce_pool_id}/subjects/{subject_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `locations.workforcePools.subjects.operations`

#### `locations.workforcePools.subjects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `roles`

#### `roles.queryGrantableRoles()`

Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `roles.list()`

Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.pageSize` | `integer` | No | Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. |
| `params.pageToken` | `string` | No | Optional pagination token returned in an earlier ListRolesResponse. |
| `params.view` | `string` | No | Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field. |
| `params.showDeleted` | `boolean` | No | Include Roles that have been deleted. |

#### `roles.get()`

Gets the definition of a Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |

### `organizations`

### `organizations.roles`

#### `organizations.roles.list()`

Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The `parent` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [projects.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.list](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.pageSize` | `integer` | No | Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. |
| `params.pageToken` | `string` | No | Optional pagination token returned in an earlier ListRolesResponse. |
| `params.view` | `string` | No | Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field. |
| `params.showDeleted` | `boolean` | No | Include Roles that have been deleted. |

#### `organizations.roles.get()`

Gets the definition of a Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [roles](https://cloud.google.com/iam/docs/reference/rest/v1/roles), [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles), or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [projects.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.get](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |

#### `organizations.roles.create()`

Creates a new custom Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The `parent` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [projects.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [organizations.roles.create](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.roles.patch()`

Updates the definition of a custom Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.patch](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.updateMask` | `string` | No | A mask describing which fields in the Role have changed. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.roles.delete()`

Deletes a custom Role. When you delete a custom role, the following changes occur immediately:

* You cannot bind a principal to the custom role in an IAM Policy.

* Existing bindings to the custom role are not changed, but they have no effect.

* By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur:

* The custom role is permanently deleted and cannot be recovered.

* If an IAM policy contains a binding to the custom role, the binding is permanently removed.

* The custom role no longer counts toward your custom role limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.delete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.etag` | `string` | No | Used to perform a consistent read-modify-write. |

#### `organizations.roles.undelete()`

Undeletes a custom Role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The `name` parameter's value depends on the target resource for the request, namely [projects](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles) or [organizations](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [projects.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [organizations.roles.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. |
| `params.resource` | `object` | Yes | The request body. |

### `permissions`

#### `permissions.queryTestablePermissions()`

Lists every permission that you can test on a resource. A permission is testable if you can check whether a principal has that permission on the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `iamPolicies`

#### `iamPolicies.queryAuditableServices()`

Returns a list of services that allow you to opt into audit logs that are not generated by default. To learn more about audit logs, see the [Logging documentation](https://cloud.google.com/logging/docs/audit).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `iamPolicies.lintPolicy()`

Lints, or validates, an IAM policy. Currently checks the google.iam.v1.Binding.condition field, which contains a condition expression for a role binding. Successful calls to this method always return an HTTP `200 OK` status code, even if the linter detects an issue in the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |