# Managed Service for Microsoft Active Directory API - Apps Script Client Library

Auto-generated client library for using the **Managed Service for Microsoft Active Directory API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:25:47 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:25:47 GMT
- **Created:** Sun, 20 Jul 2025 16:42:05 GMT



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

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.global`

### `projects.locations.global.operations`

#### `projects.locations.global.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.global.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.global.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.global.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.global.domains`

#### `projects.locations.global.domains.create()`

Creates a Microsoft AD domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource project name and location using the form: `projects/{project_id}/locations/global` |
| `params.domainName` | `string` | No | Required. A domain name, e.g. mydomain.myorg.com, with the following restrictions: * Must contain only lowercase letters, numbers, periods and hyphens. * Must start with a letter. * Must contain between 2-64 characters. * Must end with a number or a letter. * Must not start with period. * First segment length (mydomain form example above) shouldn't exceed 15 chars. * The last segment cannot be fully numeric. * Must be unique within the customer project. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.resetAdminPassword()`

Resets a domain's administrator password.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.list()`

Lists domains in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used. Regardless of the page_size value, the response may include a partial list. Callers should rely on a response's next_page_token to determine if there are additional results to list. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous ListDomainsRequest request, if any. |
| `params.filter` | `string` | No | Optional. A filter specifying constraints of a list operation. For example, `Domain.fqdn="mydomain.myorginization"`. |
| `params.orderBy` | `string` | No | Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. |

#### `projects.locations.global.domains.get()`

Gets information about a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |

#### `projects.locations.global.domains.patch()`

Updates the metadata and configuration of a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The unique name of the domain using the form: `projects/{project_id}/locations/global/domains/{domain_name}`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include fields from Domain: * `labels` * `locations` * `authorized_networks` * `audit_logs_enabled` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.delete()`

Deletes a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |

#### `projects.locations.global.domains.attachTrust()`

Adds an AD trust to a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.reconfigureTrust()`

Updates the DNS conditional forwarder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.detachTrust()`

Removes an AD trust.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.validateTrust()`

Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.restore()`

RestoreBackup restores domain mentioned in the RestoreBackupRequest

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. resource name for the domain to which the backup belongs |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.getLdapssettings()`

Gets the domain ldaps settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |

#### `projects.locations.global.domains.updateLdapssettings()`

Patches a single ldaps settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.extendSchema()`

Extend Schema for Domain

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domain` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.enableMigration()`

Enable Domain Migration

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domain` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.disableMigration()`

Disable Domain Migration

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domain` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.checkMigrationPermission()`

CheckMigrationPermission API gets the current state of DomainMigration

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domain` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.domainJoinMachine()`

DomainJoinMachine API joins a Compute Engine VM to the domain

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domain` | `string` | Yes | Required. The domain resource name using the form: projects/{project_id}/locations/global/domains/{domain_name} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.global.domains.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.global.domains.sqlIntegrations`

#### `projects.locations.global.domains.sqlIntegrations.list()`

Lists SqlIntegrations in a given domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the SqlIntegrations using the form: `projects/{project_id}/locations/global/domains/*` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response'ANIZATIONs next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. Filter specifying constraints of a list operation. For example, `SqlIntegration.name="sql"`. |
| `params.orderBy` | `string` | No | Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order. |

#### `projects.locations.global.domains.sqlIntegrations.get()`

Gets details of a single sqlIntegration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. SqlIntegration resource name using the form: `projects/{project_id}/locations/global/domains/*/sqlIntegrations/{name}` |

### `projects.locations.global.domains.backups`

#### `projects.locations.global.domains.backups.create()`

Creates a Backup for a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.backupId` | `string` | No | Required. Backup Id, unique name to identify the backups with the following restrictions: * Must be lowercase letters, numbers, and hyphens * Must start with a letter. * Must contain between 1-63 characters. * Must end with a number or a letter. * Must be unique within the domain. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.backups.list()`

Lists Backup in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. Filter specifying constraints of a list operation. |
| `params.orderBy` | `string` | No | Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order. |

#### `projects.locations.global.domains.backups.get()`

Gets details of a single Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backup resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}/backups/{backup_id}` |

#### `projects.locations.global.domains.backups.patch()`

Updates the labels for specified Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The unique name of the Backup in the form of projects/{project_id}/locations/global/domains/{domain_name}/backups/{name} |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Backup: * `labels` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.backups.delete()`

Deletes identified Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backup resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}/backups/{backup_id}` |

#### `projects.locations.global.domains.backups.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.domains.backups.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.global.domains.backups.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.global.peerings`

#### `projects.locations.global.peerings.create()`

Creates a Peering for Managed AD instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource project name and location using the form: `projects/{project_id}/locations/global` |
| `params.peeringId` | `string` | No | Required. Peering Id, unique name to identify peering. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.peerings.list()`

Lists Peerings in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. Filter specifying constraints of a list operation. For example, `peering.authoized_network ="/projects/myprojectid"`. |
| `params.orderBy` | `string` | No | Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order. |

#### `projects.locations.global.peerings.get()`

Gets details of a single Peering.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}` |

#### `projects.locations.global.peerings.patch()`

Updates the labels for specified Peering.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Peering: * `labels` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.peerings.delete()`

Deletes identified Peering.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}` |

#### `projects.locations.global.peerings.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.peerings.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.global.peerings.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |