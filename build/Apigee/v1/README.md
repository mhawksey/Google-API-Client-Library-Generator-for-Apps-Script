# Apigee API - Apps Script Client Library

Auto-generated client library for using the **Apigee API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:46:47 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:14 GMT
- **Created:** Sun, 20 Jul 2025 16:12:32 GMT



---

## API Reference

### `hybrid`

### `hybrid.issuers`

#### `hybrid.issuers.list()`

Lists hybrid services and its trusted issuers service account ids. This api is authenticated and unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer service account ids.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Must be of the form `hybrid/issuers`. |

### `organizations`

#### `organizations.list()`

Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Use the following structure in your request: `organizations` |

#### `organizations.get()`

Gets the profile for an Apigee organization. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Apigee organization name in the following format: `organizations/{org}` |

#### `organizations.create()`

Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. Name of the Google Cloud project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: `projects/` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.update()`

Updates the properties for an Apigee organization. No other fields in the organization profile will be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Apigee organization name in the following format: `organizations/{org}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.delete()`

Delete an Apigee organization. For organizations with BillingType EVALUATION, an immediate deletion is performed. For paid organizations (Subscription or Pay-as-you-go), a soft-deletion is performed. The organization can be restored within the soft-deletion period, which is specified using the `retention` field in the request or by filing a support ticket with Apigee. During the data retention period specified in the request, the Apigee organization cannot be recreated in the same Google Cloud project. **IMPORTANT: The default data retention setting for this operation is 7 days. To permanently delete the organization in 24 hours, set the retention parameter to `MINIMUM`.**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the organization. Use the following structure in your request: `organizations/{org}` |
| `params.retention` | `string` | No | Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType is not EVALUATION). It controls how long Organization data will be retained after the initial delete operation completes. During this period, the Organization may be restored to its last known state. After this period, the Organization will no longer be able to be restored. **Note: During the data retention period specified using this field, the Apigee organization cannot be recreated in the same Google Cloud project.** |

#### `organizations.getSyncAuthorization()`

Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.setSyncAuthorization()`

Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.getControlPlaneAccess()`

Lists the service accounts allowed to access Apigee control plane directly for limited functionality. **Note**: Available to Apigee hybrid only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Control Plane Access. Use the following structure in your request: `organizations/{org}/controlPlaneAccess` |

#### `organizations.updateControlPlaneAccess()`

Updates the permissions required to allow Apigee runtime-plane components access to the control plane. Currently, the permissions required are to: 1. Allow runtime components to publish analytics data to the control plane. **Note**: Available to Apigee hybrid only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the ControlPlaneAccess. Format: "organizations/{org}/controlPlaneAccess" |
| `params.updateMask` | `string` | No | List of fields to be updated. Fields that can be updated: synchronizer_identities, publisher_identities. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.setAddons()`

Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.org` | `string` | Yes | Required. Name of the organization. Use the following structure in your request: `organizations/{org}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.getProjectMapping()`

Gets the project ID and region for an Apigee organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Apigee organization name in the following format: `organizations/{org}` |

#### `organizations.getDeployedIngressConfig()`

Gets the deployed ingress configuration for an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the deployed configuration for the organization in the following format: 'organizations/{org}/deployedIngressConfig'. |
| `params.view` | `string` | No | When set to FULL, additional details about the specific deployments receiving traffic will be included in the IngressConfig response's RoutingRules. |

#### `organizations.getRuntimeConfig()`

Get runtime config for an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the runtime config for the organization in the following format: 'organizations/{org}/runtimeConfig'. |

#### `organizations.getSecuritySettings()`

GetSecuritySettings gets the security settings for API Security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecuritySettings to retrieve. This will always be: 'organizations/{org}/securitySettings'. |

#### `organizations.updateSecuritySettings()`

UpdateSecuritySettings updates the current security settings for API Security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Full resource name is always `organizations/{org}/securitySettings`. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Allowed fields are: - ml_retraining_feedback_enabled |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.apis`

#### `organizations.apis.list()`

Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization in the following format: `organizations/{org}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.includeRevisions` | `boolean` | No | Flag that specifies whether to include a list of revisions in the response. |
| `params.includeMetaData` | `boolean` | No | Flag that specifies whether to include API proxy metadata in the response. |
| `params.space` | `string` | No | Optional. The space ID to filter the list of proxies (optional). If unspecified, all proxies in the organization will be listed. |

#### `organizations.apis.patch()`

Updates an existing API proxy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API proxy to update in the following format: `organizations/{org}/apis/{api}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apis.move()`

Moves an API proxy to a different space.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API proxy to move in the following format: `organizations/{org}/apis/{api}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apis.get()`

Gets an API proxy including a list of existing revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API proxy in the following format: `organizations/{org}/apis/{api}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apis.delete()`

Deletes an API proxy and all associated endpoints, policies, resources, and revisions. The API proxy must be undeployed before you can delete it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API proxy in the following format: `organizations/{org}/apis/{api}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apis.create()`

Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following:

* Set the `name` query parameter to the name of the API proxy.

* Set the `action` query parameter to `import`.

* Set the `Content-Type` header to `multipart/form-data`.

* Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization in the following format: `organizations/{org}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.name` | `string` | No | Name of the API proxy. Restrict the characters used to: A-Za-z0-9._- |
| `params.action` | `string` | No | Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values: * `import` to import the API proxy configuration bundle. * `validate` to validate the API proxy configuration bundle without importing it. |
| `params.validate` | `boolean` | No | Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API. |
| `params.space` | `string` | No | Optional. The ID of the space associated with this proxy. Any IAM policies applied to the space will affect access to this proxy. Note that this field is only respected when creating a new proxy. It has no effect when creating a new revision for an existing proxy. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.apis.revisions`

#### `organizations.apis.revisions.updateApiProxyRevision()`

Updates an existing API proxy revision by uploading the API proxy configuration bundle as a zip file from your local machine. You can update only API proxy revisions that have never been deployed. After deployment, an API proxy revision becomes immutable, even if it is undeployed. Set the `Content-Type` header to either `multipart/form-data` or `application/octet-stream`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API proxy revision to update in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.validate` | `boolean` | No | Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apis.revisions.get()`

Gets an API proxy revision. To download the API proxy configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the API proxy configuration locally and upload the updated API proxy configuration revision, as described in [updateApiProxyRevision](updateApiProxyRevision).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API proxy revision in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.format` | `string` | No | Format used when downloading the API proxy configuration revision. Set to `bundle` to download the API proxy configuration revision as a zip file. |

#### `organizations.apis.revisions.delete()`

Deletes an API proxy revision and all policies, resources, endpoints, and revisions associated with it. The API proxy revision must be undeployed before you can delete it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API proxy revision in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.apis.revisions.deployments`

#### `organizations.apis.revisions.deployments.list()`

Lists all deployments of an API proxy revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/apis/{api}/revisions/{rev}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.apis.deployments`

#### `organizations.apis.deployments.list()`

Lists all deployments of an API proxy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the API proxy for which to return deployment information in the following format: `organizations/{org}/apis/{api}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.apis.keyvaluemaps`

#### `organizations.apis.keyvaluemaps.create()`

Creates a key value map in an API proxy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in which to create the key value map. Use the following structure in your request: `organizations/{org}/apis/{api}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apis.keyvaluemaps.delete()`

Deletes a key value map from an API proxy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the key value map. Use the following structure in your request: `organizations/{org}/apis/{api}/keyvaluemaps/{keyvaluemap}` If the API Proxy resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.apis.keyvaluemaps.entries`

#### `organizations.apis.keyvaluemaps.entries.get()`

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to fetch the key value map entry/value. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apis.keyvaluemaps.entries.delete()`

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:**

* After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior.

* Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to delete the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apis.keyvaluemaps.entries.create()`

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apis.keyvaluemaps.entries.update()`

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apis.keyvaluemaps.entries.list()`

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.pageSize` | `integer` | No | Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned. |
| `params.pageToken` | `string` | No | Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page. |

### `organizations.apis.debugsessions`

#### `organizations.apis.debugsessions.list()`

Lists debug sessions that are currently active in the given API Proxy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the API Proxy for which to list debug sessions. Must be of the form: `organizations/{organization}/apis/{api}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of debug sessions to return. The page size defaults to 25. |
| `params.pageToken` | `string` | No | Optional. Page token, returned from a previous ListApiDebugSessions call, that you can use to retrieve the next page. |

### `organizations.operations`

#### `organizations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `organizations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `organizations.datacollectors`

#### `organizations.datacollectors.create()`

Creates a new data collector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization in which to create the data collector in the following format: `organizations/{org}`. |
| `params.dataCollectorId` | `string` | No | ID of the data collector. Overrides any ID in the data collector resource. Must be a string beginning with `dc_` that contains only letters, numbers, and underscores. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.datacollectors.list()`

Lists all data collectors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization for which to list data collectors in the following format: `organizations/{org}`. |
| `params.pageSize` | `integer` | No | Maximum number of data collectors to return. The page size defaults to 25. |
| `params.pageToken` | `string` | No | Page token, returned from a previous ListDataCollectors call, that you can use to retrieve the next page. |

#### `organizations.datacollectors.get()`

Gets a data collector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the data collector in the following format: `organizations/{org}/datacollectors/{data_collector_id}`. |

#### `organizations.datacollectors.patch()`

Updates a data collector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the data collector in the following format: `organizations/{org}/datacollectors/{data_collector_id}`. |
| `params.updateMask` | `string` | No | List of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.datacollectors.delete()`

Deletes a data collector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the data collector in the following format: `organizations/{org}/datacollectors/{data_collector_id}`. |

### `organizations.environments`

#### `organizations.environments.getDebugmask()`

Gets the debug mask singleton resource for an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the debug mask. Use the following structure in your request: `organizations/{org}/environments/{env}/debugmask`. |

#### `organizations.environments.updateDebugmask()`

Updates the debug mask singleton resource for an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the debug mask. |
| `params.updateMask` | `string` | No | Field debug mask to support partial updates. |
| `params.replaceRepeatedFields` | `boolean` | No | Boolean flag that specifies whether to replace existing values in the debug mask when doing an update. Set to true to replace existing values. The default behavior is to append the values (false). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.getTraceConfig()`

Get distributed trace configuration in an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the trace configuration. Use the following structure in your request: "organizations/*/environments/*/traceConfig". |

#### `organizations.environments.updateTraceConfig()`

Updates the trace configurations in an environment. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the trace configuration. Use the following structure in your request: "organizations/*/environments/*/traceConfig". |
| `params.updateMask` | `string` | No | List of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.create()`

Creates an environment in an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization in which the environment will be created. Use the following structure in your request: `organizations/{org}` |
| `params.name` | `string` | No | Optional. Name of the environment. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.delete()`

Deletes an environment from an organization. **Warning: You must delete all key value maps and key value entries before you delete an environment.** Otherwise, if you re-create the environment the key value map entry operations will encounter encryption/decryption discrepancies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}` |

#### `organizations.environments.get()`

Gets environment details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}` |

#### `organizations.environments.updateEnvironment()`

Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](get). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.update()`

Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](get). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.getDeployedConfig()`

Gets the deployed configuration for an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment deployed configuration resource. Use the following structure in your request: `organizations/{org}/environments/{env}/deployedConfig` |

#### `organizations.environments.getApiSecurityRuntimeConfig()`

Gets the API Security runtime configuration for an environment. This named ApiSecurityRuntimeConfig to prevent conflicts with ApiSecurityConfig from addon config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment API Security Runtime configuration resource. Use the following structure in your request: `organizations/{org}/environments/{env}/apiSecurityRuntimeConfig` |

#### `organizations.environments.setIamPolicy()`

Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.getIamPolicy()`

Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `organizations.environments.testIamPermissions()`

Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.subscribe()`

Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}` |

#### `organizations.environments.unsubscribe()`

Deletes a subscription for the environment's Pub/Sub topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.modifyEnvironment()`

Updates properties for an Apigee environment with patch semantics using a field mask. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{environment}`. |
| `params.updateMask` | `string` | No | List of fields to be updated. Fields that can be updated: node_config. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.getAddonsConfig()`

Gets the add-ons config of an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the add-ons config. Must be in the format of `/organizations/{org}/environments/{env}/addonsConfig` |

#### `organizations.environments.getSecurityActionsConfig()`

GetSecurityActionConfig returns the current SecurityActions configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityActionsConfig to retrieve. This will always be: `organizations/{org}/environments/{env}/security_actions_config` |

#### `organizations.environments.updateSecurityActionsConfig()`

UpdateSecurityActionConfig updates the current SecurityActions configuration. This method is used to enable/disable the feature at the environment level.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: `organizations/{org}/environments/{env}/security_actions_config` |
| `params.updateMask` | `string` | No | The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.resourcefiles`

#### `organizations.environments.resourcefiles.create()`

Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in which to create the resource file in the following format: `organizations/{org}/environments/{env}`. |
| `params.type` | `string` | No | Required. Resource file type. {{ resource_file_type }} |
| `params.name` | `string` | No | Required. Name of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255} |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.resourcefiles.update()`

Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`. |
| `params.type` | `string` | Yes | Required. Resource file type. {{ resource_file_type }} |
| `params.name` | `string` | Yes | Required. ID of the resource file to update. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255} |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.resourcefiles.get()`

Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`. |
| `params.type` | `string` | Yes | Required. Resource file type. {{ resource_file_type }} |
| `params.name` | `string` | Yes | Required. ID of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255} |

#### `organizations.environments.resourcefiles.delete()`

Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`. |
| `params.type` | `string` | Yes | Required. Resource file type. {{ resource_file_type }} |
| `params.name` | `string` | Yes | Required. ID of the resource file to delete. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255} |

#### `organizations.environments.resourcefiles.list()`

Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`. |
| `params.type` | `string` | No | Optional. Type of resource files to list. {{ resource_file_type }} |

#### `organizations.environments.resourcefiles.listEnvironmentResources()`

Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`. |
| `params.type` | `string` | Yes | Optional. Type of resource files to list. {{ resource_file_type }} |

### `organizations.environments.archiveDeployments`

#### `organizations.environments.archiveDeployments.get()`

Gets the specified ArchiveDeployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`. |

#### `organizations.environments.archiveDeployments.list()`

Lists the ArchiveDeployments in the specified Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the Environment for which to list Archive Deployments in the format: `organizations/{org}/environments/{env}`. |
| `params.filter` | `string` | No | Optional. An optional query used to return a subset of Archive Deployments using the semantics defined in https://google.aip.dev/160. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of Archive Deployments to return. If unspecified, at most 25 deployments will be returned. |
| `params.pageToken` | `string` | No | Optional. Page token, returned from a previous ListArchiveDeployments call, that you can use to retrieve the next page. |

#### `organizations.environments.archiveDeployments.generateUploadUrl()`

Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions:

* Source file type should be a zip file.

* Source file size should not exceed 1GB limit.

* No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified:

* `content-type: application/zip`

* `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified:

* `Authorization: Bearer YOUR_TOKEN`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The organization and environment to upload to. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.archiveDeployments.generateDownloadUrl()`

Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Archive Deployment you want to download. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.archiveDeployments.create()`

Creates a new ArchiveDeployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Environment this Archive Deployment will be created in. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.archiveDeployments.patch()`

Updates an existing ArchiveDeployment. Labels can modified but most of the other fields are not modifiable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.archiveDeployments.delete()`

Deletes an archive deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`. |

### `organizations.environments.apis`

### `organizations.environments.apis.revisions`

#### `organizations.environments.apis.revisions.deploy()`

Deploys a revision of an API proxy. If another revision of the same API proxy revision is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot invoke an API proxy until it has been deployed to an environment. After you deploy an API proxy revision, you cannot edit it. To edit the API proxy, you must create and deploy a new revision. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments`, two permissions are required:

* `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}`

* `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}` All successful API proxy deployments to Apigee are [zero-downtime deployments](https://cloud.google.com/apigee/docs/api-platform/deploy/ui-deploy-overview#zero-downtime-deployment). Apigee hybrid validates the dependencies between shared flows and API proxies at deployment time. For example, if the Flow Callout policy in an API proxy references a shared flow that either doesn't exist or isn't deployed, the API proxy deployment fails.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource being deployed has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.override` | `boolean` | No | Flag that specifies whether the new deployment replaces other deployed revisions of the API proxy in the environment. Set `override` to `true` to replace other deployed revisions. By default, `override` is `false` and the deployment is rejected if other revisions of the API proxy are deployed in the environment. |
| `params.sequencedRollout` | `boolean` | No | Flag that specifies whether to enable sequenced rollout. If set to `true`, the routing rules for this deployment and the environment changes to add the deployment will be rolled out in a safe order. This reduces the risk of downtime that could be caused by changing the environment group's routing before the new destination for the affected traffic is ready to receive it. This should only be necessary if the new deployment will be capturing traffic from another environment under a shared environment group or if traffic will be rerouted to a different environment due to a base path removal. The generateDeployChangeReport API may be used to examine routing changes before issuing the deployment request, and its response will indicate if a sequenced rollout is recommended for the deployment. |
| `params.serviceAccount` | `string` | No | Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be `{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`. |

#### `organizations.environments.apis.revisions.undeploy()`

Undeploys an API proxy revision from an environment. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments`, two permissions are required:

* `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}`

* `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.sequencedRollout` | `boolean` | No | Flag that specifies whether to enable sequenced rollout. If set to `true`, the environment group routing rules corresponding to this deployment will be removed before removing the deployment from the runtime. This is likely to be a rare use case; it is only needed when the intended effect of undeploying this proxy is to cause the traffic it currently handles to be rerouted to some other existing proxy in the environment group. The GenerateUndeployChangeReport API may be used to examine routing changes before issuing the undeployment request, and its response will indicate if a sequenced rollout is recommended for the undeployment. |

#### `organizations.environments.apis.revisions.getDeployments()`

Gets the deployment of an API proxy revision and actual state reported by runtime pods.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name representing an API proxy revision in an environment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.environments.apis.revisions.deployments`

#### `organizations.environments.apis.revisions.deployments.generateDeployChangeReport()`

Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required:

* `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}`

* `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.override` | `boolean` | No | Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks. |

#### `organizations.environments.apis.revisions.deployments.generateUndeployChangeReport()`

Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required:

* `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}`

* `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}` |

### `organizations.environments.apis.revisions.debugsessions`

#### `organizations.environments.apis.revisions.debugsessions.create()`

Creates a debug session for a deployed API Proxy revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the API Proxy revision deployment for which to create the DebugSession. Must be of the form `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.timeout` | `string` | No | Optional. The time in seconds after which this DebugSession should end. A timeout specified in DebugSession will overwrite this value. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.apis.revisions.debugsessions.get()`

Retrieves a debug session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the debug session to retrieve. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{session}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.environments.apis.revisions.debugsessions.list()`

Lists debug sessions that are currently active in the given API Proxy revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the API Proxy revision deployment for which to list debug sessions. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.pageSize` | `integer` | No | Maximum number of debug sessions to return. The page size defaults to 25. |
| `params.pageToken` | `string` | No | Page token, returned from a previous ListDebugSessions call, that you can use to retrieve the next page. |

#### `organizations.environments.apis.revisions.debugsessions.deleteData()`

Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the debug session to delete. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debugsession}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.environments.apis.revisions.debugsessions.data`

#### `organizations.environments.apis.revisions.debugsessions.data.get()`

Gets the debug data from a transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the debug session transaction. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{session}/data/{transaction}`. If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.environments.apis.deployments`

#### `organizations.environments.apis.deployments.list()`

Lists all deployments of an API proxy in an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name representing an API proxy in an environment in the following format: `organizations/{org}/environments/{env}/apis/{api}` If the API proxy resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.environments.sharedflows`

### `organizations.environments.sharedflows.revisions`

#### `organizations.environments.sharedflows.revisions.deploy()`

Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required:

* `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}`

* `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the shared flow revision to deploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}` If the shared flow resource being deployed has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.override` | `boolean` | No | Flag that specifies whether the new deployment replaces other deployed revisions of the shared flow in the environment. Set `override` to `true` to replace other deployed revisions. By default, `override` is `false` and the deployment is rejected if other revisions of the shared flow are deployed in the environment. |
| `params.serviceAccount` | `string` | No | Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be `{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`. |

#### `organizations.environments.sharedflows.revisions.undeploy()`

Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required:

* `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}`

* `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the shared flow revision to undeploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.environments.sharedflows.revisions.getDeployments()`

Gets the deployment of a shared flow revision and actual state reported by runtime pods.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.environments.sharedflows.deployments`

#### `organizations.environments.sharedflows.deployments.list()`

Lists all deployments of a shared flow in an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.environments.deployments`

#### `organizations.environments.deployments.list()`

Lists all deployments of API proxies or shared flows in an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment for which to return deployment information in the following format: `organizations/{org}/environments/{env}` |
| `params.sharedFlows` | `boolean` | No | Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`. |

#### `organizations.environments.deployments.get()`

Gets a particular deployment of Api proxy or a shared flow in an environment

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the api proxy or the shared flow deployment. Use the following structure in your request: `organizations/{org}/environments/{env}/deployments/{deployment}` |

#### `organizations.environments.deployments.setIamPolicy()`

Sets the IAM policy on a deployment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.deployments.setIamPolicy` permission to call this API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.deployments.getIamPolicy()`

Gets the IAM policy on a deployment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.deployments.getIamPolicy` permission to call this API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `organizations.environments.deployments.testIamPermissions()`

Tests the permissions of a user on a deployment, and returns a subset of permissions that the user has on the deployment. If the deployment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.flowhooks`

#### `organizations.environments.flowhooks.get()`

Returns the name of the shared flow attached to the specified flow hook. If there's no shared flow attached to the flow hook, the API does not return an error; it simply does not return a name in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the flow hook in the following format: `organizations/{org}/environments/{env}/flowhooks/{flowhook}` |

#### `organizations.environments.flowhooks.attachSharedFlowToFlowHook()`

Attaches a shared flow to a flow hook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the flow hook to which the shared flow should be attached in the following format: `organizations/{org}/environments/{env}/flowhooks/{flowhook}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.flowhooks.detachSharedFlowFromFlowHook()`

Detaches a shared flow from a flow hook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the flow hook to detach in the following format: `organizations/{org}/environments/{env}/flowhooks/{flowhook}` |

### `organizations.environments.keystores`

#### `organizations.environments.keystores.create()`

Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in which to create the keystore. Use the following format in your request: `organizations/{org}/environments/{env}` |
| `params.name` | `string` | No | Optional. Name of the keystore. Overrides the value in Keystore. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.keystores.delete()`

Deletes a keystore or truststore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}` |

#### `organizations.environments.keystores.get()`

Gets a keystore or truststore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`. |

### `organizations.environments.keystores.aliases`

#### `organizations.environments.keystores.aliases.create()`

Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`. |
| `params.alias` | `string` | No | Alias for the key/certificate pair. Values must match the regular expression `[\w\s-.]{1,255}`. This must be provided for all formats except `selfsignedcert`; self-signed certs may specify the alias in either this parameter or the JSON body. |
| `params.format` | `string` | No | Required. Format of the data. Valid values include: `selfsignedcert`, `keycertfile`, or `pkcs12` |
| `params.ignoreExpiryValidation` | `boolean` | No | Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed. |
| `params._password` | `string` | No | DEPRECATED: For improved security, specify the password in the request body instead of using the query parameter. To specify the password in the request body, set `Content-type: multipart/form-data` part with name `password`. Password for the private key file, if required. |
| `params.ignoreNewlineValidation` | `boolean` | No | Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.keystores.aliases.get()`

Gets an alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`. |

#### `organizations.environments.keystores.aliases.delete()`

Deletes an alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`. |

#### `organizations.environments.keystores.aliases.update()`

Updates the certificate in an alias. The updated certificate must be in PEM- or DER-encoded X.509 format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}` |
| `params.ignoreExpiryValidation` | `boolean` | No | Required. Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed. |
| `params.ignoreNewlineValidation` | `boolean` | No | Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.keystores.aliases.csr()`

Generates a PKCS #10 Certificate Signing Request for the private key in an alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`. |

#### `organizations.environments.keystores.aliases.getCertificate()`

Gets the certificate from an alias in PEM-encoded form.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`. |

### `organizations.environments.targetservers`

#### `organizations.environments.targetservers.create()`

Creates a TargetServer in the specified environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent environment name under which the TargetServer will be created. Must be of the form `organizations/{org}/environments/{env}`. |
| `params.name` | `string` | No | Optional. The ID to give the TargetServer. This will overwrite the value in TargetServer. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.targetservers.delete()`

Deletes a TargetServer from an environment. Returns the deleted TargetServer resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TargetServer to delete. Must be of the form `organizations/{org}/environments/{env}/targetservers/{target_server_id}`. |

#### `organizations.environments.targetservers.get()`

Gets a TargetServer resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TargetServer to get. Must be of the form `organizations/{org}/environments/{env}/targetservers/{target_server_id}`. |

#### `organizations.environments.targetservers.update()`

Updates an existing TargetServer. Note that this operation has PUT semantics; it will replace the entirety of the existing TargetServer with the resource in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TargetServer to replace. Must be of the form `organizations/{org}/environments/{env}/targetservers/{target_server_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.addonsConfig`

#### `organizations.environments.addonsConfig.setAddonEnablement()`

Updates an add-on enablement status of an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the add-ons config. Must be in the format of `/organizations/{org}/environments/{env}/addonsConfig` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.references`

#### `organizations.environments.references.create()`

Creates a Reference in the specified environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent environment name under which the Reference will be created. Must be of the form `organizations/{org}/environments/{env}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.references.delete()`

Deletes a Reference from an environment. Returns the deleted Reference resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Reference to delete. Must be of the form `organizations/{org}/environments/{env}/references/{ref}`. |

#### `organizations.environments.references.get()`

Gets a Reference resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Reference to get. Must be of the form `organizations/{org}/environments/{env}/references/{ref}`. |

#### `organizations.environments.references.update()`

Updates an existing Reference. Note that this operation has PUT semantics; it will replace the entirety of the existing Reference with the resource in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Reference to update. Must be of the form `organizations/{org}/environments/{env}/references/{ref}`. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.traceConfig`

### `organizations.environments.traceConfig.overrides`

#### `organizations.environments.traceConfig.overrides.create()`

Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the trace configuration override. Use the following structure in your request. "organizations/*/environments/*/traceConfig". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.traceConfig.overrides.list()`

Lists all of the distributed trace configuration overrides in an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the trace configuration override. Use the following structure in your request: "organizations/*/environments/*/traceConfig". |
| `params.pageSize` | `integer` | No | Maximum number of trace configuration overrides to return. If not specified, the maximum number returned is 25. The maximum number cannot exceed 100. |
| `params.pageToken` | `string` | No | A page token, returned from a previous `ListTraceConfigOverrides` call. Token value that can be used to retrieve the subsequent page. When paginating, all other parameters provided to `ListTraceConfigOverrides` must match those specified in the call to obtain the page token. |

#### `organizations.environments.traceConfig.overrides.get()`

Gets a trace configuration override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the trace configuration override. Use the following structure in your request: "organizations/*/environments/*/traceConfig/overrides/*". |

#### `organizations.environments.traceConfig.overrides.patch()`

Updates a distributed trace configuration override. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the trace configuration override. Use the following structure in your request: "organizations/*/environments/*/traceConfig/overrides/*". |
| `params.updateMask` | `string` | No | List of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.traceConfig.overrides.delete()`

Deletes a distributed trace configuration override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the trace configuration override. Use the following structure in your request: "organizations/*/environments/*/traceConfig/overrides/*". |

### `organizations.environments.stats`

#### `organizations.environments.stats.get()`

Retrieve metrics grouped by dimensions. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{org}/environments/{env}/stats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy` or `target_host`. The value of dimensions should be a comma-separated list, as shown below: `organizations/{org}/environments/{env}/stats/apiproxy,request_verb` |
| `params.select` | `string` | No | Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)` |
| `params.timeUnit` | `string` | No | Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or` month`. |
| `params.timeRange` | `string` | No | Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59` |
| `params.filter` | `string` | No | Filter that enables you to drill down on specific dimension values. |
| `params.sort` | `string` | No | Flag that specifies whether the sort order should be ascending or descending. Valid values include: `DESC` and `ASC`. |
| `params.sortby` | `string` | No | Comma-separated list of metrics to sort the final result. |
| `params.aggTable` | `string` | No | Table name used to query custom aggregate tables. If this parameter is skipped, then Apigee will try to retrieve the data from fact tables which will be expensive. |
| `params.limit` | `string` | No | Maximum number of result items to return. |
| `params.offset` | `string` | No | Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`. |
| `params.topk` | `string` | No | Top number of results to return. For example, to return the top 5 results, set `topk=5`. |
| `params.tsAscending` | `boolean` | No | Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`. |
| `params.realtime` | `boolean` | No | No longer used by Apigee. Supported for backwards compatibility. |
| `params.sonar` | `boolean` | No | Routes the query to API Monitoring for the last hour. |
| `params.tzo` | `string` | No | Timezone offset value. |
| `params.accuracy` | `string` | No | No longer used by Apigee. Supported for backwards compatibility. |

### `organizations.environments.optimizedStats`

#### `organizations.environments.optimizedStats.get()`

Similar to GetStats except that the response is less verbose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{org}/environments/{env}/optimizedStats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy`, `target_host`. The value of `dimensions` should be a comma-separated list as shown below: `organizations/{org}/environments/{env}/optimizedStats/apiproxy,request_verb` |
| `params.select` | `string` | No | Required. Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)` |
| `params.timeUnit` | `string` | No | Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`. |
| `params.timeRange` | `string` | No | Required. Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59` |
| `params.filter` | `string` | No | Filter that enables you to drill-down on specific dimension values. |
| `params.sort` | `string` | No | Flag that specifies whether the sort order should be ascending or descending. Valid values include `DESC` and `ASC`. |
| `params.sortby` | `string` | No | Comma-separated list of metrics to sort the final result. |
| `params.aggTable` | `string` | No | Table name used to query custom aggregate tables. If this parameter is skipped, then Apigee will try to retrieve the data from fact tables which will be expensive. |
| `params.limit` | `string` | No | Maximum number of result items to return. |
| `params.offset` | `string` | No | Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`. |
| `params.topk` | `string` | No | Top number of results to return. For example, to return the top 5 results, set `topk=5`. |
| `params.tsAscending` | `boolean` | No | Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends setting this value to `true` if you are using `sortby` with `sort=DESC`. |
| `params.realtime` | `boolean` | No | No longer used by Apigee. Supported for backwards compatibility. |
| `params.sonar` | `boolean` | No | Routes the query to API Monitoring for the last hour. |
| `params.tzo` | `string` | No | Timezone offset value. |
| `params.accuracy` | `string` | No | No longer used by Apigee. Supported for backwards compatibility. |

### `organizations.environments.analytics`

### `organizations.environments.analytics.admin`

#### `organizations.environments.analytics.admin.getSchemav2()`

Gets a list of metrics and dimensions that can be used to create analytics queries and reports. Each schema element contains the name of the field, its associated type, and a flag indicating whether it is a standard or custom field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Path to the schema. Use the following structure in your request: `organizations/{org}/environments/{env}/analytics/admin/schemav2`. |
| `params.type` | `string` | No | Required. Name of the dataset for which you want to retrieve the schema. For example: `fact` or `agg_cus1` |
| `params.disableCache` | `boolean` | No | Flag that specifies whether the schema is be read from the database or cache. Set to `true` to read the schema from the database. Defaults to cache. |

### `organizations.environments.analytics.exports`

#### `organizations.environments.analytics.exports.create()`

Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.analytics.exports.get()`

Gets the details and status of an analytics export job. If the export job is still in progress, its `state` is set to "running". After the export job has completed successfully, its `state` is set to "completed". If the export job fails, its `state` is set to `failed`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the export to get. |

#### `organizations.environments.analytics.exports.list()`

Lists the details and status of all analytics export jobs belonging to the parent organization and environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`. |

### `organizations.environments.queries`

#### `organizations.environments.queries.create()`

Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.queries.get()`

Get query status If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the asynchronous query to get. Must be of the form `organizations/{org}/environments/{env}/queries/{queryId}`. |

#### `organizations.environments.queries.getResult()`

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the asynchronous query result to get. Must be of the form `organizations/{org}/environments/{env}/queries/{queryId}/result`. |

#### `organizations.environments.queries.getResulturl()`

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is sent to the client as a list of urls to JSON files.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the asynchronous query result to get. Must be of the form `organizations/{org}/environments/{env}/queries/{queryId}/resulturl`. |

#### `organizations.environments.queries.list()`

Return a list of Asynchronous Queries

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`. |
| `params.submittedBy` | `string` | No | Filter response list by user who submitted queries. |
| `params.status` | `string` | No | Filter response list by asynchronous query status. |
| `params.from` | `string` | No | Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'. |
| `params.to` | `string` | No | Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'. |
| `params.dataset` | `string` | No | Filter response list by dataset. Example: `api`, `mint` |
| `params.inclQueriesWithoutReport` | `string` | No | Flag to include asynchronous queries that don't have a report denifition. |

### `organizations.environments.caches`

#### `organizations.environments.caches.delete()`

Deletes a cache.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Cache resource name of the form: `organizations/{organization_id}/environments/{environment_id}/caches/{cache_id}` |

### `organizations.environments.securityReports`

#### `organizations.environments.securityReports.create()`

Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.securityReports.get()`

Get security report status If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the security report to get. Must be of the form `organizations/{org}/environments/{env}/securityReports/{reportId}`. |

#### `organizations.environments.securityReports.getResult()`

After the query is completed, use this API to retrieve the results as file. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the security report result to get. Must be of the form `organizations/{org}/environments/{env}/securityReports/{reportId}/result`. |

#### `organizations.environments.securityReports.getResultView()`

After the query is completed, use this API to view the query result when result size is small.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the security report result view to get. Must be of the form `organizations/{org}/environments/{env}/securityReports/{reportId}/resultView`. |

#### `organizations.environments.securityReports.list()`

Return a list of Security Reports

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`. |
| `params.submittedBy` | `string` | No | Filter response list by user who submitted queries. |
| `params.status` | `string` | No | Filter response list by security reports status. |
| `params.from` | `string` | No | Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'. |
| `params.to` | `string` | No | Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'. |
| `params.dataset` | `string` | No | Filter response list by dataset. Example: `api`, `mint` |
| `params.pageSize` | `integer` | No | The maximum number of security report to return in the list response. |
| `params.pageToken` | `string` | No | Token returned from the previous list response to fetch the next page. |

### `organizations.environments.securityStats`

#### `organizations.environments.securityStats.queryTabularStats()`

Retrieve security statistics as tabular rows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orgenv` | `string` | Yes | Required. Should be of the form organizations//environments/. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.securityStats.queryTimeSeriesStats()`

Retrieve security statistics as a collection of time series.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orgenv` | `string` | Yes | Required. Should be of the form organizations//environments/. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.securityIncidents`

#### `organizations.environments.securityIncidents.get()`

GetSecurityIncident gets the specified security incident. Returns NOT_FOUND if security incident is not present for the specified organization and environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Security incident in the following format: `organizations/{org}/environments/{environment}/securityIncidents/{incident}'. Example: organizations/testOrg/environments/testEnv/securityIncidents/1234-4567-890-111 |

#### `organizations.environments.securityIncidents.list()`

ListSecurityIncidents lists all the security incident associated with the environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. For a specific organization, list of all the security incidents. Format: `organizations/{org}/environments/{environment}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of incidents to return. The service may return fewer than this value. If unspecified, at most 50 incidents will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSecurityIncident` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | The filter expression to be used to get the list of security incidents, where filtering can be done on API Proxies. Example: filter = "api_proxy = /", "first_detected_time >", "last_detected_time <" |

#### `organizations.environments.securityIncidents.patch()`

UpdateSecurityIncidents updates an existing security incident.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111 |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange() |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.securityIncidents.batchUpdate()`

BatchUpdateSecurityIncident updates multiple existing security incidents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Optional. The parent resource shared by all security incidents being updated. If this is set, the parent field in the UpdateSecurityIncidentRequest messages must either be empty or match this field. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.securityActions`

#### `organizations.environments.securityActions.create()`

CreateSecurityAction creates a SecurityAction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The organization and environment that this SecurityAction applies to. Format: organizations/{org}/environments/{env} |
| `params.securityActionId` | `string` | No | Required. The ID to use for the SecurityAction, which will become the final component of the action's resource name. This value should be 0-61 characters, and valid format is (^[a-z]([a-z0-9-]{​0,61}[a-z0-9])?$). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.securityActions.get()`

Get a SecurityAction by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the SecurityAction to retrieve. Format: organizations/{org}/environments/{env}/securityActions/{security_action} |

#### `organizations.environments.securityActions.list()`

Returns a list of SecurityActions. This returns both enabled and disabled actions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of SecurityActions. Format: organizations/{org}/environments/{env} |
| `params.pageSize` | `integer` | No | The maximum number of SecurityActions to return. If unspecified, at most 50 SecurityActions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSecurityActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSecurityActions` must match the call that provided the page token. |
| `params.filter` | `string` | No | The filter expression to filter List results. https://google.aip.dev/160. Allows for filtering over: state and api_proxies. E.g.: state = ACTIVE AND apiProxies:foo. Filtering by action is not supported https://github.com/aip-dev/google.aip.dev/issues/624 |

#### `organizations.environments.securityActions.patch()`

Update a SecurityAction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. This field is ignored during creation as per AIP-133. Please set the `security_action_id` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action} |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Valid fields to update are `description`, `state`, `allow`, `deny`, and `flag`, `expire_time`, and `ttl`, `api_proxies`, and `condition_config`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.securityActions.delete()`

Delete a SecurityAction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the security monitoring condition to delete. Format: `organizations/{org}/environment/{env}/securityActions/{security_action}` |

#### `organizations.environments.securityActions.enable()`

Enable a SecurityAction. The `state` of the SecurityAction after enabling is `ENABLED`. `EnableSecurityAction` can be called on SecurityActions in the state `DISABLED`; SecurityActions in a different state (including `ENABLED) return an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityAction to enable. Format: organizations/{org}/environments/{env}/securityActions/{security_action} |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.securityActions.disable()`

Disable a SecurityAction. The `state` of the SecurityAction after disabling is `DISABLED`. `DisableSecurityAction` can be called on SecurityActions in the state `ENABLED`; SecurityActions in a different state (including `DISABLED`) return an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecurityAction to disable. Format: organizations/{org}/environments/{env}/securityActions/{security_action} |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.environments.keyvaluemaps`

#### `organizations.environments.keyvaluemaps.create()`

Creates a key value map in an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment in which to create the key value map. Use the following structure in your request: `organizations/{org}/environments/{env}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.keyvaluemaps.delete()`

Deletes a key value map from an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the key value map. Use the following structure in your request: `organizations/{org}/environments/{env}/keyvaluemaps/{keyvaluemap}` |

### `organizations.environments.keyvaluemaps.entries`

#### `organizations.environments.keyvaluemaps.entries.get()`

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to fetch the key value map entry/value. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.environments.keyvaluemaps.entries.delete()`

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:**

* After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior.

* Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to delete the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.environments.keyvaluemaps.entries.create()`

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.keyvaluemaps.entries.update()`

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.environments.keyvaluemaps.entries.list()`

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.pageSize` | `integer` | No | Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned. |
| `params.pageToken` | `string` | No | Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page. |

### `organizations.deployments`

#### `organizations.deployments.list()`

Lists all deployments of API proxies or shared flows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization for which to return deployment information in the following format: `organizations/{org}` |
| `params.sharedFlows` | `boolean` | No | Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`. |

### `organizations.envgroups`

#### `organizations.envgroups.create()`

Creates a new environment group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization in which to create the environment group in the following format: `organizations/{org}`. |
| `params.name` | `string` | No | Optional. ID of the environment group. Overrides any ID in the environment_group resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.envgroups.list()`

Lists all environment groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization for which to list environment groups in the following format: `organizations/{org}`. |
| `params.pageSize` | `integer` | No | Maximum number of environment groups to return. The page size defaults to 25. |
| `params.pageToken` | `string` | No | Page token, returned from a previous ListEnvironmentGroups call, that you can use to retrieve the next page. |

#### `organizations.envgroups.get()`

Gets an environment group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`. |

#### `organizations.envgroups.patch()`

Updates an environment group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment group to update in the format: `organizations/{org}/envgroups/{envgroup}. |
| `params.updateMask` | `string` | No | Optional. List of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.envgroups.delete()`

Deletes an environment group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`. |

#### `organizations.envgroups.getDeployedIngressConfig()`

Gets the deployed ingress configuration for an environment group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the deployed configuration for the environment group in the following format: 'organizations/{org}/envgroups/{envgroup}/deployedIngressConfig'. |
| `params.view` | `string` | No | When set to FULL, additional details about the specific deployments receiving traffic will be included in the IngressConfig response's RoutingRules. |

### `organizations.envgroups.attachments`

#### `organizations.envgroups.attachments.create()`

Creates a new attachment of an environment to an environment group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. EnvironmentGroup under which to create the attachment in the following format: `organizations/{org}/envgroups/{envgroup}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.envgroups.attachments.list()`

Lists all attachments of an environment group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`. |
| `params.pageSize` | `integer` | No | Maximum number of environment group attachments to return. The page size defaults to 25. |
| `params.pageToken` | `string` | No | Page token, returned by a previous ListEnvironmentGroupAttachments call, that you can use to retrieve the next page. |

#### `organizations.envgroups.attachments.get()`

Gets an environment group attachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment group attachment in the following format: `organizations/{org}/envgroups/{envgroup}/attachments/{attachment}` |

#### `organizations.envgroups.attachments.delete()`

Deletes an environment group attachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the environment group attachment to delete in the following format: `organizations/{org}/envgroups/{envgroup}/attachments/{attachment}`. |

### `organizations.instances`

#### `organizations.instances.create()`

Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization. Use the following structure in your request: `organizations/{org}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.instances.delete()`

Deletes an Apigee runtime instance. The instance stops serving requests and the runtime data is deleted. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`. |

#### `organizations.instances.get()`

Gets the details for an Apigee runtime instance. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`. |

#### `organizations.instances.list()`

Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization. Use the following structure in your request: `organizations/{org}`. |
| `params.pageSize` | `integer` | No | Maximum number of instances to return. Defaults to 25. |
| `params.pageToken` | `string` | No | Page token, returned from a previous ListInstances call, that you can use to retrieve the next page of content. |

#### `organizations.instances.patch()`

Updates an Apigee runtime instance. You can update the fields described in NodeConfig. No other fields will be updated. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`. |
| `params.updateMask` | `string` | No | List of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.instances.reportStatus()`

Reports the latest status for a runtime instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | The name of the instance reporting this status. For SaaS the request will be rejected if no instance exists under this name. Format is organizations/{org}/instances/{instance} |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.instances.canaryevaluations`

#### `organizations.instances.canaryevaluations.create()`

Creates a new canary evaluation for an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.instances.canaryevaluations.get()`

Gets a CanaryEvaluation for an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the CanaryEvaluation. Use the following structure in your request: `organizations/{org}/instances/*/canaryevaluations/{evaluation}` |

### `organizations.instances.attachments`

#### `organizations.instances.attachments.create()`

Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.instances.attachments.list()`

Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}` |
| `params.pageSize` | `integer` | No | Maximum number of instance attachments to return. Defaults to 25. |
| `params.pageToken` | `string` | No | Page token, returned by a previous ListInstanceAttachments call, that you can use to retrieve the next page of content. |

#### `organizations.instances.attachments.get()`

Gets an attachment. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the attachment. Use the following structure in your request: `organizations/{org}/instances/{instance}/attachments/{attachment}` |

#### `organizations.instances.attachments.delete()`

Deletes an attachment. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the attachment. Use the following structure in your request: `organizations/{org}/instances/{instance}/attachments/{attachment}`. |

### `organizations.instances.natAddresses`

#### `organizations.instances.natAddresses.list()`

Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}` |
| `params.pageSize` | `integer` | No | Maximum number of natAddresses to return. Defaults to 25. |
| `params.pageToken` | `string` | No | Page token, returned from a previous ListNatAddresses call, that you can use to retrieve the next page of content. |

#### `organizations.instances.natAddresses.get()`

Gets the details of a NAT address. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}` |

#### `organizations.instances.natAddresses.create()`

Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.instances.natAddresses.activate()`

Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}`` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.instances.natAddresses.delete()`

Deletes the NAT address. Connections that are actively using the address are drained before it is removed. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}`` |

### `organizations.sharedflows`

#### `organizations.sharedflows.list()`

Lists all shared flows in the organization. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent organization under which to get shared flows. Must be of the form: `organizations/{organization_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.includeRevisions` | `boolean` | No | Indicates whether to include a list of revisions in the response. |
| `params.includeMetaData` | `boolean` | No | Indicates whether to include shared flow metadata in the response. |
| `params.space` | `string` | No | Optional. The space ID used to filter the list of shared flows (optional). If unspecified, all shared flows in the organization will be listed. To learn how Spaces can be used to manage resources, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.sharedflows.get()`

Gets a shared flow by name, including a list of its revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the shared flow to get. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.sharedflows.delete()`

Deletes a shared flow and all it's revisions. The shared flow must be undeployed before you can delete it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. shared flow name of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.sharedflows.create()`

Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent organization under which to create the shared flow. Must be of the form: `organizations/{organization_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.action` | `string` | No | Required. Must be set to either `import` or `validate`. |
| `params.name` | `string` | No | Required. The name to give the shared flow |
| `params.space` | `string` | No | Optional. The ID of the space to associated with this shared flow. Any IAM policies applied to the space will affect access to this shared flow. Note that this field is only respected when creating a new shared flow. It has no effect when creating a new revision for an existing shared flow. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sharedflows.move()`

Moves an shared flow to a different space.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Shared Flow to move in the following format: `organizations/{org}/sharedflows/{shared_flow}` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.sharedflows.deployments`

#### `organizations.sharedflows.deployments.list()`

Lists all deployments of a shared flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the shared flow for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}` If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.sharedflows.revisions`

#### `organizations.sharedflows.revisions.updateSharedFlowRevision()`

Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the shared flow revision to update. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.validate` | `boolean` | No | Ignored. All uploads are validated regardless of the value of this field. It is kept for compatibility with existing APIs. Must be `true` or `false` if provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sharedflows.revisions.get()`

Gets a revision of a shared flow. To download the shared flow configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the shared flow configuration locally and upload the updated sharedFlow configuration revision, as described in [updateSharedFlowRevision](updateSharedFlowRevision).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the shared flow revision to get. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}` If the Shared Flow resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.format` | `string` | No | Specify `bundle` to export the contents of the shared flow bundle. Otherwise, the bundle metadata is returned. |

#### `organizations.sharedflows.revisions.delete()`

Deletes a shared flow and all associated policies, resources, and revisions. You must undeploy the shared flow before deleting it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the shared flow revision to delete. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}` If the Shared Flow resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.sharedflows.revisions.deployments`

#### `organizations.sharedflows.revisions.deployments.list()`

Lists all deployments of a shared flow revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`. If the shared flow resource has the `space` attribute set, IAM permissions are checked differently . To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.spaces`

#### `organizations.spaces.create()`

Create a space under an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the Google Cloud project in which to associate the Apigee space. Pass the information as a query parameter using the following structure in your request: `organizations/` |
| `params.spaceId` | `string` | No | Required. Resource ID of the space. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.spaces.get()`

Get a space under an Organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Apigee organization space name in the following format: `organizations/{org}/spaces/{space}` |

#### `organizations.spaces.patch()`

Updates a space.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the space in the following format: `organizations/{org}/spaces/{space_id}`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated. Fields that can be updated: display_name. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.spaces.delete()`

Deletes an organization space.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Apigee organization space name in the following format: `organizations/{org}/spaces/{space}` |

#### `organizations.spaces.list()`

Lists spaces under an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Use the following structure in your request: `organizations` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 50 spaces will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSpaces` call. Provide this to retrieve the subsequent page. When paginating, all parameters must match the original call. |

#### `organizations.spaces.setIamPolicy()`

IAM META APIs Callers must have apigee.spaces.setIamPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.spaces.getIamPolicy()`

Callers must have apigee.spaces.getIamPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `organizations.spaces.testIamPermissions()`

Callers don't need any permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.hostStats`

#### `organizations.hostStats.get()`

Retrieve metrics grouped by dimensions in host level. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{org}/hostStats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy`, `target_host`. The value of dimensions should be a comma-separated list as shown below `organizations/{org}/hostStats/apiproxy,request_verb` |
| `params.select` | `string` | No | Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)` |
| `params.timeUnit` | `string` | No | Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`. |
| `params.timeRange` | `string` | No | Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59` |
| `params.filter` | `string` | No | Flag that enables drill-down on specific dimension values. |
| `params.sort` | `string` | No | Flag that specifies if the sort order should be ascending or descending. Valid values are `DESC` and `ASC`. |
| `params.sortby` | `string` | No | Comma-separated list of metrics to sort the final result. |
| `params.limit` | `string` | No | Maximum number of result items to return. |
| `params.offset` | `string` | No | Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`. |
| `params.topk` | `string` | No | Top number of results to return. For example, to return the top 5 results, set `topk=5`. |
| `params.tsAscending` | `boolean` | No | Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`. |
| `params.realtime` | `boolean` | No | No longer used by Apigee. Supported for backwards compatibility. |
| `params.tzo` | `string` | No | Timezone offset value. |
| `params.accuracy` | `string` | No | No longer used by Apigee. Supported for backwards compatibility. |
| `params.envgroupHostname` | `string` | No | Required. Hostname for which the interactive query will be executed. |

### `organizations.optimizedHostStats`

#### `organizations.optimizedHostStats.get()`

Similar to GetHostStats except that the response is less verbose.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for which the interactive query will be executed. Use the following format in your request: `organizations/{organization_id}/optimizedHostStats/{dimensions}` Dimensions let you view metrics in meaningful groupings, such as `apiproxy`, `target_host`. The value of dimensions should be a comma-separated list as shown below: `organizations/{org}/optimizedHostStats/apiproxy,request_verb` |
| `params.select` | `string` | No | Required. Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)` |
| `params.timeUnit` | `string` | No | Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`. |
| `params.timeRange` | `string` | No | Required. Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`. |
| `params.filter` | `string` | No | Filter that enables you to drill-down on specific dimension values. |
| `params.sort` | `string` | No | Flag that specifies whether the sort order should be ascending or descending. Valid values include `DESC` and `ASC`. |
| `params.sortby` | `string` | No | Comma-separated list of metrics used to sort the final result. |
| `params.limit` | `string` | No | Maximum number of result items to return. |
| `params.offset` | `string` | No | Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`. |
| `params.topk` | `string` | No | Top number of results to return. For example, to return the top 5 results, set `topk=5`. |
| `params.tsAscending` | `boolean` | No | Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`. |
| `params.realtime` | `boolean` | No | No longer used by Apigee. Supported for backwards compatibility. |
| `params.tzo` | `string` | No | Timezone offset value. |
| `params.accuracy` | `string` | No | No longer used by Apigee. Supported for backwards compatibility. |
| `params.envgroupHostname` | `string` | No | Required. Hostname for which the interactive query will be executed. |

### `organizations.apiproducts`

#### `organizations.apiproducts.create()`

Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization in which the API product will be created. Use the following structure in your request: `organizations/{org}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apiproducts.delete()`

Deletes an API product from an organization. Deleting an API product causes app requests to the resource URIs defined in the API product to fail. Ensure that you create a new API product to serve existing apps, unless your intention is to disable access to the resources defined in the API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apiproducts.get()`

Gets configuration details for an API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apiproducts.move()`

Moves an API product to a different space.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API product to move in the following format: `organizations/{org}/apiproducts/{apiproduct} |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apiproducts.list()`

Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization. Use the following structure in your request: `organizations/{org}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.attributename` | `string` | No | Name of the attribute used to filter the search. |
| `params.attributevalue` | `string` | No | Value of the attribute used to filter the search. |
| `params.expand` | `boolean` | No | Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API. |
| `params.startKey` | `string` | No | Gets a list of API products starting with a specific API product in the list. For example, if you're returning 50 API products at a time (using the `count` query parameter), you can view products 50-99 by entering the name of the 50th API product in the first API (without using `startKey`). Product name is case sensitive. |
| `params.count` | `string` | No | Enter the number of API products you want returned in the API call. The limit is 1000. |
| `params.space` | `string` | No | Optional. The Space to list API products for. When none provided, all the spaces the user has list access, will be used implicitly, and the same following rules will apply. Can be used in conjunction with start_key, expand and count for paginated response. Composite queries with attributename and attributevalue are not supported yet. |

#### `organizations.apiproducts.update()`

Updates an existing API product. You must include all required values, whether or not you are updating them, as well as any optional values that you are updating. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via UI or API. View the list of API products to identify their internal names.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the resource has the `space` attribute set, IAM permissions are checked against the Space resource path.To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apiproducts.attributes()`

Updates or creates API product attributes. This API **replaces** the current list of attributes with the attributes specified in the request body. In this way, you can update existing attributes, add new attributes, or delete existing attributes by omitting them from the request body. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.apiproducts.attributes`

#### `organizations.apiproducts.attributes.get()`

Gets the value of an API product attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product attribute. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/attributes/{attribute}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apiproducts.attributes.updateApiProductAttribute()`

Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apiproducts.attributes.delete()`

Deletes an API product attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product attribute. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/attributes/{attribute}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apiproducts.attributes.list()`

Lists all API product attributes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.apiproducts.rateplans`

#### `organizations.apiproducts.rateplans.create()`

Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the API product that is associated with the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apiproducts.rateplans.get()`

Gets the details of a rate plan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/rateplans/{rateplan}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.apiproducts.rateplans.list()`

Lists all the rate plans for an API product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` Use `organizations/{org}/apiproducts/-` to return rate plans for all API products within the organization. If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.orderBy` | `string` | No | Name of the attribute used for sorting. Valid values include: * `name`: Name of the rate plan. * `state`: State of the rate plan (`DRAFT`, `PUBLISHED`). * `startTime`: Time when the rate plan becomes active. * `endTime`: Time when the rate plan expires. **Note**: Not supported by Apigee at this time. |
| `params.startKey` | `string` | No | Name of the rate plan from which to start displaying the list of rate plans. If omitted, the list starts from the first item. For example, to view the rate plans from 51-150, set the value of `startKey` to the name of the 51st rate plan and set the value of `count` to 100. |
| `params.count` | `integer` | No | Number of rate plans to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The maximum limit is 1000. Defaults to 100. |
| `params.expand` | `boolean` | No | Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API. Defaults to `false`. |
| `params.state` | `string` | No | State of the rate plans (`DRAFT`, `PUBLISHED`) that you want to display. |

#### `organizations.apiproducts.rateplans.update()`

Updates an existing rate plan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/rateplans/{rateplan}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.apiproducts.rateplans.delete()`

Deletes a rate plan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. ID of the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}/rateplans/{rateplan}` If the API Product resource has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

### `organizations.apps`

#### `organizations.apps.get()`

Gets the app profile for the specified app ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. App ID in the following format: `organizations/{org}/apps/{app}` |

#### `organizations.apps.list()`

Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource path of the parent in the following format: `organizations/{org}` |
| `params.status` | `string` | No | Optional. Filter by the status of the app. Valid values are `approved` or `revoked`. Defaults to `approved`. |
| `params.apptype` | `string` | No | Optional. 'apptype' is no longer available. Use a 'filter' instead. |
| `params.includeCred` | `boolean` | No | Optional. Flag that specifies whether to include credentials in the response. |
| `params.startKey` | `string` | No | Returns the list of apps starting from the specified app ID. |
| `params.rows` | `string` | No | Optional. Maximum number of app IDs to return. Defaults to 1000. |
| `params.expand` | `boolean` | No | Optional. Flag that specifies whether to return an expanded list of apps for the organization. Defaults to `false`. |
| `params.ids` | `string` | No | Optional. Comma-separated list of app IDs on which to filter. |
| `params.keyStatus` | `string` | No | Optional. Key status of the app. Valid values include `approved` or `revoked`. Defaults to `approved`. |
| `params.apiProduct` | `string` | No | API product. |
| `params.pageSize` | `integer` | No | Optional. Count of apps a single page can have in the response. If unspecified, at most 100 apps will be returned. The maximum value is 100; values above 100 will be coerced to 100. "page_size" is supported from ver 1.10.0 and above. |
| `params.pageToken` | `string` | No | Optional. The starting index record for listing the developers. "page_token" is supported from ver 1.10.0 and above. |
| `params.filter` | `string` | No | Optional. The filter expression to be used to get the list of apps, where filtering can be done on developerEmail, apiProduct, consumerKey, status, appId, appName, appType and appGroup. Examples: "developerEmail=foo@bar.com", "appType=AppGroup", or "appType=Developer" "filter" is supported from ver 1.10.0 and above. |

### `organizations.hostQueries`

#### `organizations.hostQueries.create()`

Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.hostQueries.get()`

Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the asynchronous query to get. Must be of the form `organizations/{org}/queries/{queryId}`. |

#### `organizations.hostQueries.getResult()`

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the asynchronous query result to get. Must be of the form `organizations/{org}/queries/{queryId}/result`. |

#### `organizations.hostQueries.getResultView()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the asynchronous query result view to get. Must be of the form `organizations/{org}/queries/{queryId}/resultView`. |

#### `organizations.hostQueries.list()`

Return a list of Asynchronous Queries at host level.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}`. |
| `params.submittedBy` | `string` | No | Filter response list by user who submitted queries. |
| `params.status` | `string` | No | Filter response list by asynchronous query status. |
| `params.from` | `string` | No | Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'. |
| `params.to` | `string` | No | Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'. |
| `params.dataset` | `string` | No | Filter response list by dataset. Example: `api`, `mint` |
| `params.inclQueriesWithoutReport` | `string` | No | Flag to include asynchronous queries that don't have a report denifition. |
| `params.envgroupHostname` | `string` | No | Required. Filter response list by hostname. |

### `organizations.reports`

#### `organizations.reports.create()`

Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent organization name under which the Custom Report will be created. Must be of the form: `organizations/{organization_id}/reports` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.reports.get()`

Retrieve a custom report definition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}` |

#### `organizations.reports.list()`

Return a list of Custom Reports

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent organization name under which the API product will be listed `organizations/{organization_id}/reports` |
| `params.expand` | `boolean` | No | Set to 'true' to get expanded details about each custom report. |

#### `organizations.reports.update()`

Update an existing custom report definition

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.reports.delete()`

Deletes an existing custom report definition

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}` |

### `organizations.analytics`

### `organizations.analytics.datastores`

#### `organizations.analytics.datastores.create()`

Create a Datastore for an org

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent organization name. Must be of the form `organizations/{org}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.analytics.datastores.test()`

Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent organization name Must be of the form `organizations/{org}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.analytics.datastores.delete()`

Delete a Datastore from an org.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Datastore to be deleted. Must be of the form `organizations/{org}/analytics/datastores/{datastoreId}` |

#### `organizations.analytics.datastores.get()`

Get a Datastore

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Datastore to be get. Must be of the form `organizations/{org}/analytics/datastores/{datastoreId}` |

#### `organizations.analytics.datastores.list()`

List Datastores

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent organization name. Must be of the form `organizations/{org}`. |
| `params.targetType` | `string` | No | Optional. TargetType is used to fetch all Datastores that match the type |

#### `organizations.analytics.datastores.update()`

Update a Datastore

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of datastore to be updated. Must be of the form `organizations/{org}/analytics/datastores/{datastoreId}` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.developers`

#### `organizations.developers.create()`

Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the Apigee organization in which the developer is created. Use the following structure in your request: `organizations/{org}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.update()`

Updates a developer. This API replaces the existing developer details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.get()`

Returns the developer details, including the developer's name, email address, apps, and other information. **Note**: The response includes only the first 100 developer apps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |
| `params.action` | `string` | No | Status of the developer. Valid values are `active` or `inactive`. |

#### `organizations.developers.delete()`

Deletes a developer. All apps and API keys associated with the developer are also removed. **Warning**: This API will permanently delete the developer and related artifacts. To avoid permanently deleting developers and their artifacts, set the developer status to `inactive` using the SetDeveloperStatus API. **Note**: The delete operation is asynchronous. The developer is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |

#### `organizations.developers.list()`

Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`. |
| `params.expand` | `boolean` | No | Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters. |
| `params.startKey` | `string` | No | **Note**: Must be used in conjunction with the `count` parameter. Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns: ``` westley@example.com fezzik@example.com buttercup@example.com ``` and your `startKey` is `fezzik@example.com`, the list returned will be ``` fezzik@example.com buttercup@example.com ``` |
| `params.count` | `string` | No | Optional. Number of developers to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000. |
| `params.ids` | `string` | No | Optional. List of IDs to include, separated by commas. |
| `params.includeCompany` | `boolean` | No | Flag that specifies whether to include company details in the response. |
| `params.app` | `string` | No | Optional. List only Developers that are associated with the app. Note that start_key, count are not applicable for this filter criteria. |

#### `organizations.developers.setDeveloperStatus()`

Sets the status of a developer. A developer is `active` by default. If you set a developer's status to `inactive`, the API keys assigned to the developer apps are no longer valid even though the API keys are set to `approved`. Inactive developers can still sign in to the developer portal and create apps; however, any new API keys generated during app creation won't work. To set the status of a developer, set the `action` query parameter to `active` or `inactive`, and the `Content-Type` header to `application/octet-stream`. If successful, the API call returns the following HTTP status code: `204 No Content`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_id}` |
| `params.action` | `string` | No | Status of the developer. Valid values are `active` and `inactive`. |

#### `organizations.developers.attributes()`

Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Email address of the developer for which attributes are being updated. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.getMonetizationConfig()`

Gets the monetization configuration for the developer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Monetization configuration for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/monetizationConfig` |

#### `organizations.developers.updateMonetizationConfig()`

Updates the monetization configuration for the developer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Monetization configuration for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/monetizationConfig` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.getBalance()`

Gets the account balance for the developer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance` |

### `organizations.developers.apps`

#### `organizations.developers.apps.generateKeyPairOrUpdateDeveloperAppStatus()`

Manages access to a developer app by enabling you to:

* Approve or revoke a developer app

* Generate a new consumer key and secret for a developer app To approve or revoke a developer app, set the `action` query parameter to `approve` or `revoke`, respectively, and the `Content-Type` header to `application/octet-stream`. If a developer app is revoked, none of its API keys are valid for API calls even though the keys are still approved. If successful, the API call returns the following HTTP status code: `204 No Content` To generate a new consumer key and secret for a developer app, pass the new key/secret details. Rather than replace an existing key, this API generates a new key. In this case, multiple key pairs may be associated with a single developer app. Each key pair has an independent status (`approve` or `revoke`) and expiration time. Any approved, non-expired key can be used in an API call. For example, if you're using API key rotation, you can generate new keys with expiration times that overlap keys that are going to expire. You might also generate a new consumer key/secret if the security of the original key/secret is compromised. The `keyExpiresIn` property defines the expiration time for the API key in milliseconds. If you don't set this property or set it to `-1`, the API key never expires. **Notes**:

* When generating a new key/secret, this API replaces the existing attributes, notes, and callback URLs with those specified in the request. Include or exclude any existing information that you want to retain or delete, respectively.

* To migrate existing consumer keys and secrets to hybrid from another system, see the CreateDeveloperAppKey API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}` |
| `params.action` | `string` | No | Action. Valid values are `approve` or `revoke`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.apps.create()`

Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.apps.delete()`

Deletes a developer app. **Note**: The delete operation is asynchronous. The developer app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}` |

#### `organizations.developers.apps.get()`

Returns the details for a developer app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}` |
| `params.query` | `string` | No | **Note**: Must be used in conjunction with the `entity` parameter. Set to `count` to return the number of API resources that have been approved for access by a developer app in the specified Apigee organization. |
| `params.entity` | `string` | No | **Note**: Must be used in conjunction with the `query` parameter. Set to `apiresources` to return the number of API resources that have been approved for access by a developer app in the specified Apigee organization. |

#### `organizations.developers.apps.list()`

Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |
| `params.expand` | `boolean` | No | Optional. Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters. |
| `params.count` | `string` | No | Number of developer apps to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000. |
| `params.startKey` | `string` | No | **Note**: Must be used in conjunction with the `count` parameter. Name of the developer app from which to start displaying the list of developer apps. For example, if you're returning 50 developer apps at a time (using the `count` query parameter), you can view developer apps 50-99 by entering the name of the 50th developer app. The developer app name is case sensitive. |
| `params.shallowExpand` | `boolean` | No | Optional. Specifies whether to expand the results in shallow mode. Set to `true` to expand the results in shallow mode. |

#### `organizations.developers.apps.update()`

Updates the details for a developer app. In addition, you can add an API product to a developer app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateDeveloperAppKey API. Using this API, you cannot update the following:

* App name as it is the primary key used to identify the app and cannot be changed.

* Scopes associated with the app. Instead, use the ReplaceDeveloperAppKey API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.apps.attributes()`

Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.developers.apps.keys`

#### `organizations.developers.apps.keys.create()`

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent of the developer app key. Use the following structure in your request: 'organizations/{org}/developers/{developerEmail}/apps/{appName}' |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.apps.keys.updateDeveloperAppKey()`

Adds an API product to a developer app key, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes associated with the API product to the developer app key. The status of the key can be updated via "action" Query Parameter. None of the other fields can be updated via this API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. None of the other fields can be updated. You can use the same key to access all API products associated with the app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}` |
| `params.action` | `string` | No | Approve or revoke the consumer key by setting this value to `approve` or `revoke`, respectively. The `Content-Type` header must be set to `application/octet-stream`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.apps.keys.replaceDeveloperAppKey()`

Updates the scope of an app. This API replaces the existing scopes with those specified in the request. Include or exclude any existing scopes that you want to retain or delete, respectively. The specified scopes must already be defined for the API products associated with the app. This API sets the `scopes` element under the `apiProducts` element in the attributes of the app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.apps.keys.delete()`

Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs. **Note**: After you delete a consumer key, you may want to: 1. Create a new consumer key and secret for the developer app using the CreateDeveloperAppKey API, and subsequently add an API product to the key using the UpdateDeveloperAppKey API. 2. Delete the developer app, if it is no longer required.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}` |

#### `organizations.developers.apps.keys.get()`

Gets details for a consumer key for a developer app, including the key and secret value, associated API products, and other information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}` |

### `organizations.developers.apps.keys.create`

#### `organizations.developers.apps.keys.create.create()`

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent of the developer app key. Use the following structure in your request: 'organizations/{org}/developers/{developerEmail}/apps/{appName}' |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.developers.apps.keys.apiproducts`

#### `organizations.developers.apps.keys.apiproducts.delete()`

Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the API product in the developer app key in the following format: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}/apiproducts/{apiproduct}` |

#### `organizations.developers.apps.keys.apiproducts.updateDeveloperAppKeyApiProduct()`

Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the API product in the developer app key in the following format: `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}/apiproducts/{apiproduct}` |
| `params.action` | `string` | No | Approve or revoke the consumer key by setting this value to `approve` or `revoke`, respectively. |

### `organizations.developers.apps.attributes`

#### `organizations.developers.apps.attributes.get()`

Returns a developer app attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/attributes/{attribute}` |

#### `organizations.developers.apps.attributes.updateDeveloperAppAttribute()`

Updates a developer app attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/attributes/{attribute}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.apps.attributes.delete()`

Deletes a developer app attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer app attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}/attributes/{attribute}` |

#### `organizations.developers.apps.attributes.list()`

Returns a list of all developer app attributes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}` |

### `organizations.developers.attributes`

#### `organizations.developers.attributes.get()`

Returns the value of the specified developer attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/attributes/{attribute}` |

#### `organizations.developers.attributes.delete()`

Deletes a developer attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/attributes/{attribute}` |

#### `organizations.developers.attributes.updateDeveloperAttribute()`

Updates a developer attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the developer attribute. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/attributes/{attribute}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.attributes.list()`

Returns a list of all developer attributes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Email address of the developer for which attributes are being listed. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |

### `organizations.developers.balance`

#### `organizations.developers.balance.credit()`

Credits the account balance for the developer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.balance.adjust()`

Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.developers.subscriptions`

#### `organizations.developers.subscriptions.create()`

Creates a subscription to an API product. 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Email address of the developer that is purchasing a subscription to the API product. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.developers.subscriptions.get()`

Gets details for an API product subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product subscription. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/subscriptions/{subscription}` |

#### `organizations.developers.subscriptions.list()`

Lists all API product subscriptions for a developer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}` |
| `params.startKey` | `string` | No | Name of the API product subscription from which to start displaying the list of subscriptions. If omitted, the list starts from the first item. For example, to view the API product subscriptions from 51-150, set the value of `startKey` to the name of the 51st subscription and set the value of `count` to 100. |
| `params.count` | `integer` | No | Number of API product subscriptions to return in the API call. Use with `startKey` to provide more targeted filtering. Defaults to 100. The maximum limit is 1000. |

#### `organizations.developers.subscriptions.expire()`

Expires an API product subscription immediately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product subscription. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/subscriptions/{subscription}` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.appgroups`

#### `organizations.appgroups.create()`

Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as `active`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the Apigee organization in which the AppGroup is created. Use the following structure in your request: `organizations/{org}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.appgroups.get()`

Returns the AppGroup details for the provided AppGroup name in the request URI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}` |

#### `organizations.appgroups.delete()`

Deletes an AppGroup. All app and API keys associations with the AppGroup are also removed. **Warning**: This API will permanently delete the AppGroup and related artifacts. **Note**: The delete operation is asynchronous. The AppGroup is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}` |

#### `organizations.appgroups.list()`

Lists all AppGroups in an organization. A maximum of 1000 AppGroups are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`. |
| `params.filter` | `string` | No | The filter expression to be used to get the list of AppGroups, where filtering can be done on status, channelId or channelUri of the app group. Examples: filter=status=active", filter=channelId=, filter=channelUri= |
| `params.pageSize` | `integer` | No | Count of AppGroups a single page can have in the response. If unspecified, at most 1000 AppGroups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | The starting index record for listing the AppGroups. |

#### `organizations.appgroups.update()`

Updates an AppGroup. This API replaces the existing AppGroup details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. Note that the state of the AppGroup should be updated using `action`, and not via AppGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}` |
| `params.action` | `string` | No | Activate or de-activate the AppGroup by setting the action as `active` or `inactive`. The `Content-Type` header must be set to `application/octet-stream`, with empty body. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.appgroups.apps`

#### `organizations.appgroups.apps.create()`

Creates an app and associates it with an AppGroup. This API associates the AppGroup app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.appgroups.apps.delete()`

Deletes an AppGroup app. **Note**: The delete operation is asynchronous. The AppGroup app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup app. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}` |

#### `organizations.appgroups.apps.get()`

Returns the details for an AppGroup app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup app. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}` |

#### `organizations.appgroups.apps.list()`

Lists all apps created by an AppGroup in an Apigee organization. Optionally, you can request an expanded view of the AppGroup apps. Lists all AppGroupApps in an AppGroup. A maximum of 1000 AppGroup apps are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the AppGroup. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number entries to return. If unspecified, at most 1000 entries will be returned. |
| `params.pageToken` | `string` | No | Optional. Page token. If provides, must be a valid AppGroup app returned from a previous call that can be used to retrieve the next page. |

#### `organizations.appgroups.apps.update()`

Updates the details for an AppGroup app. In addition, you can add an API product to an AppGroup app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateAppGroupAppKey API. Using this API, you cannot update the app name, as it is the primary key used to identify the app and cannot be changed. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup app. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}` |
| `params.action` | `string` | No | Approve or revoke the consumer key by setting this value to `approve` or `revoke`. The `Content-Type` header must be set to `application/octet-stream`, with empty body. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.appgroups.apps.keys`

#### `organizations.appgroups.apps.keys.create()`

Creates a custom consumer key and secret for a AppGroup app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateAppGroupAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteAppGroupAppKey API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.appgroups.apps.keys.delete()`

Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}` |

#### `organizations.appgroups.apps.keys.get()`

Gets details for a consumer key for a AppGroup app, including the key and secret value, associated API products, and other information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}` |

#### `organizations.appgroups.apps.keys.updateAppGroupAppKey()`

Adds an API product to an AppGroupAppKey, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes to the AppGroupAppKey. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. You can use the same key to access all API products associated with the app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.appgroups.apps.keys.apiproducts`

#### `organizations.appgroups.apps.keys.apiproducts.updateAppGroupAppKeyApiProduct()`

Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the API product in the developer app key in the following format: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}/apiproducts/{apiproduct}` |
| `params.action` | `string` | No | Approve or revoke the consumer key by setting this value to `approve` or `revoke` respectively. The `Content-Type` header, if set, must be set to `application/octet-stream`, with empty body. |

#### `organizations.appgroups.apps.keys.apiproducts.delete()`

Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Parent of the AppGroup app key. Use the following structure in your request: `organizations/{org}/appgroups/{app_group_name}/apps/{app}/keys/{key}/apiproducts/{apiproduct}` |

### `organizations.hostSecurityReports`

#### `organizations.hostSecurityReports.create()`

Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.hostSecurityReports.get()`

Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the security report to get. Must be of the form `organizations/{org}/securityReports/{reportId}`. |

#### `organizations.hostSecurityReports.getResult()`

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the security report result to get. Must be of the form `organizations/{org}/securityReports/{reportId}/result`. |

#### `organizations.hostSecurityReports.getResultView()`

After the query is completed, use this API to view the query result when result size is small.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the security report result view to get. Must be of the form `organizations/{org}/securityReports/{reportId}/resultView`. |

#### `organizations.hostSecurityReports.list()`

Return a list of Security Reports at host level.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Must be of the form `organizations/{org}`. |
| `params.submittedBy` | `string` | No | Filter response list by user who submitted queries. |
| `params.status` | `string` | No | Filter response list by security report status. |
| `params.from` | `string` | No | Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'. |
| `params.to` | `string` | No | Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'. |
| `params.dataset` | `string` | No | Filter response list by dataset. Example: `api`, `mint` |
| `params.pageSize` | `integer` | No | The maximum number of security report to return in the list response. |
| `params.pageToken` | `string` | No | Token returned from the previous list response to fetch the next page. |
| `params.envgroupHostname` | `string` | No | Required. Filter response list by hostname. |

### `organizations.securityProfiles`

#### `organizations.securityProfiles.create()`

CreateSecurityProfile create a new custom security profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of organization. Format: organizations/{org} |
| `params.securityProfileId` | `string` | No | Required. The ID to use for the SecurityProfile, which will become the final component of the action's resource name. This value should be 1-63 characters and validated by "(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$)". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.securityProfiles.patch()`

UpdateSecurityProfile update the metadata of security profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.securityProfiles.delete()`

DeleteSecurityProfile delete a profile with all its revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of profile. Format: organizations/{org}/securityProfiles/{profile} |

#### `organizations.securityProfiles.get()`

GetSecurityProfile gets the specified security profile. Returns NOT_FOUND if security profile is not present for the specified organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Security profile in the following format: `organizations/{org}/securityProfiles/{profile}'. Profile may optionally contain revision ID. If revision ID is not provided, the response will contain latest revision by default. Example: organizations/testOrg/securityProfiles/testProfile@5 |

#### `organizations.securityProfiles.list()`

ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. For a specific organization, list of all the security profiles. Format: `organizations/{org}` |
| `params.pageSize` | `integer` | No | The maximum number of profiles to return. The service may return fewer than this value. If unspecified, at most 50 profiles will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSecurityProfiles` call. Provide this to retrieve the subsequent page. |

#### `organizations.securityProfiles.listRevisions()`

ListSecurityProfileRevisions lists all the revisions of the security profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. For a specific profile, list all the revisions. Format: `organizations/{org}/securityProfiles/{profile}` |
| `params.pageSize` | `integer` | No | The maximum number of profile revisions to return. The service may return fewer than this value. If unspecified, at most 50 revisions will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSecurityProfileRevisions` call. Provide this to retrieve the subsequent page. |

### `organizations.securityProfiles.environments`

#### `organizations.securityProfiles.environments.create()`

CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of organization and security profile ID. Format: organizations/{org}/securityProfiles/{profile} |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.securityProfiles.environments.delete()`

DeleteSecurityProfileEnvironmentAssociation removes profile environment association i.e. detaches environment from security profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the environment attachment to delete. Format: organizations/{org}/securityProfiles/{profile}/environments/{env} |

#### `organizations.securityProfiles.environments.computeEnvironmentScores()`

ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileEnvironment` | `string` | Yes | Required. Name of organization and environment and profile id for which score needs to be computed. Format: organizations/{org}/securityProfiles/{profile}/environments/{env} |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.securityAssessmentResults`

#### `organizations.securityAssessmentResults.batchCompute()`

Compute RAV2 security scores for a set of resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the organization for which the score needs to be computed in the following format: `organizations/{org}/securityAssessmentResults` |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.securityProfilesV2`

#### `organizations.securityProfilesV2.create()`

Create a security profile v2.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `organizations/{org}` |
| `params.securityProfileV2Id` | `string` | No | Required. The security profile id. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.securityProfilesV2.get()`

Get a security profile v2.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the security profile v2 to get. Format: `organizations/{org}/securityProfilesV2/{profile}` |

#### `organizations.securityProfilesV2.list()`

List security profiles v2.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. For a specific organization, list of all the security profiles. Format: `organizations/{org}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of profiles to return |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSecurityProfilesV2` call. Provide this to retrieve the subsequent page. |

#### `organizations.securityProfilesV2.patch()`

Update a security profile V2.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile} |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Valid fields to update are `description` and `profileAssessmentConfigs`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.securityProfilesV2.delete()`

Delete a security profile v2.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the security profile v2 to delete. Format: `organizations/{org}/securityProfilesV2/{profile}` |

### `organizations.securityMonitoringConditions`

#### `organizations.securityMonitoringConditions.create()`

Create a security monitoring condition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `organizations/{org}` |
| `params.securityMonitoringConditionId` | `string` | No | Optional. Optional: The security monitoring condition id. If not specified, a monitoring condition uuid will be generated by the backend. This value should be 4-63 characters, and valid characters are /a-z-/. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.securityMonitoringConditions.get()`

Get a security monitoring condition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the security monitoring condition to get. Format: `organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}` |

#### `organizations.securityMonitoringConditions.list()`

List security monitoring conditions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. For a specific organization, list all the security monitoring conditions. Format: `organizations/{org}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of monitoring conditions to return. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSecurityMonitoringConditions` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. Filter for the monitoring conditions. For example: `profile=profile1 AND scope=env1` |

#### `organizations.securityMonitoringConditions.patch()`

Update a security monitoring condition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the security monitoring condition resource. Format: organizations/{org}/securityMonitoringConditions/{security_monitoring_condition} |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Valid fields to update are `profile`, `scope`, `include_all_resources`, `include`, and `exclude`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.securityMonitoringConditions.delete()`

Delete a security monitoring condition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the security monitoring condition to delete. Format: `organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}` |

### `organizations.keyvaluemaps`

#### `organizations.keyvaluemaps.create()`

Creates a key value map in an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization in which to create the key value map file. Use the following structure in your request: `organizations/{org}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.keyvaluemaps.delete()`

Deletes a key value map from an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the key value map. Use the following structure in your request: `organizations/{org}/keyvaluemaps/{keyvaluemap}` |

### `organizations.keyvaluemaps.entries`

#### `organizations.keyvaluemaps.entries.get()`

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to fetch the key value map entry/value. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.keyvaluemaps.entries.delete()`

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:**

* After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior.

* Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to delete the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}/entries/{entry}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}/entries/{entry}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |

#### `organizations.keyvaluemaps.entries.create()`

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.keyvaluemaps.entries.update()`

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.keyvaluemaps.entries.list()`

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`. If the KeyValueMap is under an API Proxy resource that has the `space` attribute set, IAM permissions are checked against the Space resource path. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview). |
| `params.pageSize` | `integer` | No | Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned. |
| `params.pageToken` | `string` | No | Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page. |

### `organizations.sites`

### `organizations.sites.apicategories`

#### `organizations.sites.apicategories.create()`

Creates a new API category.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sites.apicategories.delete()`

Deletes an API category.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}` |

#### `organizations.sites.apicategories.patch()`

Updates an API category.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sites.apicategories.get()`

Gets an API category.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}` |

#### `organizations.sites.apicategories.list()`

Returns the API categories associated with a portal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}` |

### `organizations.sites.apidocs`

#### `organizations.sites.apidocs.get()`

Gets a catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the catalog item. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}` |

#### `organizations.sites.apidocs.create()`

Creates a new catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sites.apidocs.update()`

Updates a catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the catalog item. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sites.apidocs.list()`

Returns the catalog items associated with a portal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 25 books will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListApiDocs` call. Provide this to retrieve the subsequent page. |

#### `organizations.sites.apidocs.delete()`

Deletes a catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the catalog item. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}` |

#### `organizations.sites.apidocs.updateDocumentation()`

Updates the documentation for the specified catalog item. Note that the documentation file contents will not be populated in the return message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the catalog item documentation. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}/documentation` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sites.apidocs.getDocumentation()`

Gets the documentation for the specified catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the catalog item documentation. Use the following structure in your request: `organizations/{org}/sites/{site}/apidocs/{apidoc}/documentation` |

### `organizations.endpointAttachments`

#### `organizations.endpointAttachments.create()`

Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Organization the endpoint attachment will be created in. |
| `params.endpointAttachmentId` | `string` | No | ID to use for the endpoint attachment. ID must start with a lowercase letter followed by up to 31 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. The minimum length is 2. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.endpointAttachments.get()`

Gets the endpoint attachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}` |

#### `organizations.endpointAttachments.list()`

Lists the endpoint attachments in an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization for which to list endpoint attachments. Use the following structure in your request: `organizations/{org}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of endpoint attachments to return. If unspecified, at most 25 attachments will be returned. |
| `params.pageToken` | `string` | No | Optional. Page token, returned from a previous `ListEndpointAttachments` call, that you can use to retrieve the next page. |

#### `organizations.endpointAttachments.delete()`

Deletes an endpoint attachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}` |

### `organizations.dnsZones`

#### `organizations.dnsZones.create()`

Creates a new DNS zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Organization where the DNS zone will be created. |
| `params.dnsZoneId` | `string` | No | Required. User assigned ID for this resource. Must be unique within the organization. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.dnsZones.get()`

Fetches the representation of an existing DNS zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the DNS zone to fetch. Use the following structure in your request: `organizations/{org}/dnsZones/{dns_zone}`. |

#### `organizations.dnsZones.list()`

Enumerates DNS zones that have been created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization for which to list the DNS zones. Use the following structure in your request: `organizations/{org}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of DNS zones to return. If unspecified, at most 25 DNS zones will be returned. |
| `params.pageToken` | `string` | No | Optional. Page token, returned from a previous `ListDnsZones` call, that you can use to retrieve the next page. |

#### `organizations.dnsZones.delete()`

Deletes a previously created DNS zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the DNS zone to delete. Use the following structure in your request: `organizations/{org}/dnsZones/{dns_zone}`. |

### `projects`

#### `projects.provisionOrganization()`

Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Name of the GCP project with which to associate the Apigee organization. |
| `params.resource` | `object` | Yes | The request body. |