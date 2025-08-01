# Artifact Registry API - Apps Script Client Library

Auto-generated client library for using the **Artifact Registry API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:22:38 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:39 GMT
- **Created:** Sun, 20 Jul 2025 16:13:14 GMT



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

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.repositories`

#### `projects.locations.repositories.list()`

Lists repositories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose repositories will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of repositories to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |
| `params.orderBy` | `string` | No | Optional. The field to order the results by. |

#### `projects.locations.repositories.get()`

Gets a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the repository to retrieve. |

#### `projects.locations.repositories.create()`

Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource where the repository will be created. |
| `params.repositoryId` | `string` | No | Required. The repository id to use for this repository. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.patch()`

Updates a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. For each location in a project, repository names must be unique. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.delete()`

Deletes a repository and all of its contents. The returned Operation will finish once the repository has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the repository to delete. |

#### `projects.locations.repositories.setIamPolicy()`

Updates the IAM policy for a given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.getIamPolicy()`

Gets the IAM policy for a given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.repositories.testIamPermissions()`

Tests if the caller has a list of permissions on a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.packages`

#### `projects.locations.repositories.packages.list()`

Lists packages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose packages will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of packages to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |
| `params.orderBy` | `string` | No | Optional. The field to order the results by. |

#### `projects.locations.repositories.packages.get()`

Gets a package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the package to retrieve. |

#### `projects.locations.repositories.packages.delete()`

Deletes a package and all of its versions and tags. The returned operation will complete once the package has been deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the package to delete. |

### `projects.locations.repositories.packages.versions`

#### `projects.locations.repositories.packages.versions.list()`

Lists versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource whose versions will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of versions to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |
| `params.view` | `string` | No | The view that should be returned in the response. |
| `params.orderBy` | `string` | No | Optional. The field to order the results by. |

#### `projects.locations.repositories.packages.versions.get()`

Gets a version

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the version to retrieve. |
| `params.view` | `string` | No | The view that should be returned in the response. |

#### `projects.locations.repositories.packages.versions.delete()`

Deletes a version and all of its content. The returned operation will complete once the version has been deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the version to delete. |
| `params.force` | `boolean` | No | By default, a version that is tagged may not be deleted. If force=true, the version and any tags pointing to the version are deleted. |

### `projects.locations.repositories.packages.tags`

#### `projects.locations.repositories.packages.tags.list()`

Lists tags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent package whose tags will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. |
| `params.filter` | `string` | No | An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `version` Examples of using a filter: To filter the results of your request to tags with the name `my-tag` in package `my-package` in repository `my-repo` in project "`y-project` in the us-central region, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/my-tag"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/my*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/*tag"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/*tag*"` To filter the results of your request to tags applied to the version `1.0` in package `my-package`, append the following filter expression to your request: * `version="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/1.0"` |
| `params.pageSize` | `integer` | No | The maximum number of tags to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |

#### `projects.locations.repositories.packages.tags.get()`

Gets a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the tag to retrieve. |

#### `projects.locations.repositories.packages.tags.create()`

Creates a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource where the tag will be created. |
| `params.tagId` | `string` | No | The tag id to use for this repository. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.packages.tags.patch()`

Updates a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.packages.tags.delete()`

Deletes a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the tag to delete. |

### `projects.locations.repositories.files`

#### `projects.locations.repositories.files.list()`

Lists files.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the repository whose files will be listed. For example: "projects/p1/locations/us-central1/repositories/repo1 |
| `params.filter` | `string` | No | An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `owner` * `annotations` Examples of using a filter: To filter the results of your request to files with the name `my_file.txt` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/my-file.txt"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/my-*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/*file.txt"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/*file*"` To filter the results of your request to files owned by the version `1.0` in package `pkg1`, append the following filter expression to your request: * `owner="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/1.0"` To filter the results of your request to files with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request: * `"annotations.external_link:external_link_value"` To filter just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to files with the annotation key-value pair [`external.link`:`https://example.com/my-file`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-file`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" `` |
| `params.pageSize` | `integer` | No | The maximum number of files to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |

#### `projects.locations.repositories.files.get()`

Gets a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the file to retrieve. |