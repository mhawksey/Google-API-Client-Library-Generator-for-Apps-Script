# Artifact Registry API - Apps Script Client Library

Auto-generated client library for using the **Artifact Registry API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 19:53:22 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:53:22 GMT
- **Created:** Sun, 20 Jul 2025 16:13:20 GMT



---

## API Reference

### `projects`

#### `projects.getProjectSettings()`

Retrieves the Settings for the Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the projectSettings resource. |

#### `projects.updateProjectSettings()`

Updates the Settings for the Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set |
| `params.updateMask` | `string` | No | Field mask to support partial updates. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations`

#### `projects.locations.getVpcscConfig()`

Retrieves the VPCSC Config for the Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the VPCSCConfig resource. |

#### `projects.locations.updateVpcscConfig()`

Updates the VPCSC Config for the Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the project's VPC SC Config. Always of the form: projects/{projectID}/locations/{location}/vpcscConfig In update request: never set In response: always set |
| `params.updateMask` | `string` | No | Field mask to support partial updates. |
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

### `projects.locations.repositories`

#### `projects.locations.repositories.list()`

Lists repositories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose repositories will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of repositories to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` Examples of using a filter: To filter the results of your request to repositories with the name `my-repo` in project `my-project` in the `us-central` region, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-*"` * `name="projects/my-project/locations/us-central1/repositories/*repo"` * `name="projects/my-project/locations/us-central1/repositories/*repo*"` |
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

### `projects.locations.repositories.dockerImages`

#### `projects.locations.repositories.dockerImages.list()`

Lists docker images.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose docker images will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of artifacts to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |
| `params.orderBy` | `string` | No | The field to order the results by. |

#### `projects.locations.repositories.dockerImages.get()`

Gets a docker image.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the docker images. |

### `projects.locations.repositories.mavenArtifacts`

#### `projects.locations.repositories.mavenArtifacts.list()`

Lists maven artifacts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose maven artifacts will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of artifacts to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |

#### `projects.locations.repositories.mavenArtifacts.get()`

Gets a maven artifact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the maven artifact. |

### `projects.locations.repositories.npmPackages`

#### `projects.locations.repositories.npmPackages.list()`

Lists npm packages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose npm packages will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of artifacts to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |

#### `projects.locations.repositories.npmPackages.get()`

Gets a npm package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the npm package. |

### `projects.locations.repositories.pythonPackages`

#### `projects.locations.repositories.pythonPackages.list()`

Lists python packages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose python packages will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of artifacts to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |

#### `projects.locations.repositories.pythonPackages.get()`

Gets a python package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the python package. |

### `projects.locations.repositories.aptArtifacts`

#### `projects.locations.repositories.aptArtifacts.import()`

Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource where the artifacts will be imported. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.aptArtifacts.upload()`

Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource where the artifacts will be uploaded. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.yumArtifacts`

#### `projects.locations.repositories.yumArtifacts.import()`

Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource where the artifacts will be imported. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.yumArtifacts.upload()`

Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource where the artifacts will be uploaded. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.googetArtifacts`

#### `projects.locations.repositories.googetArtifacts.import()`

Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource where the artifacts will be imported. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.googetArtifacts.upload()`

Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the parent resource where the artifacts will be uploaded. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.genericArtifacts`

#### `projects.locations.repositories.genericArtifacts.upload()`

Directly uploads a Generic artifact. The returned operation will complete once the resources are uploaded. Package, version, and file resources are created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will raise an `ALREADY_EXISTS` error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the repository where the generic artifact will be uploaded. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.kfpArtifacts`

#### `projects.locations.repositories.kfpArtifacts.upload()`

Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the repository where the KFP artifact will be uploaded. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.goModules`

#### `projects.locations.repositories.goModules.upload()`

Directly uploads a Go module. The returned Operation will complete once the Go module is uploaded. Package, Version, and File resources are created based on the uploaded Go module.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the repository where the Go module will be uploaded. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.packages`

#### `projects.locations.repositories.packages.list()`

Lists packages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose packages will be listed. |
| `params.pageSize` | `integer` | No | The maximum number of packages to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `annotations` Examples of using a filter: To filter the results of your request to packages with the name `my-package` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/*package"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/*pack*"` To filter the results of your request to packages with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request": * `"annotations.external_link:external_link_value"` To filter the results just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to packages with the annotation key-value pair [`external.link`:`https://example.com/my-package`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-package`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" `` |
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

#### `projects.locations.repositories.packages.patch()`

Updates a package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the package, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. If the package ID part contains slashes, the slashes are escaped. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

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
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `annotations` Examples of using a filter: To filter the results of your request to versions with the name `my-version` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my-version"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version*"` To filter the results of your request to versions with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request: * `"annotations.external_link:external_link_value"` To filter just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to versions with the annotation key-value pair [`external.link`:`https://example.com/my-version`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-version`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" `` |

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

#### `projects.locations.repositories.packages.versions.batchDelete()`

Deletes multiple versions across a repository. The returned operation will complete once the versions have been deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the repository holding all requested versions. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.packages.versions.patch()`

Updates a version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the version, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1`. If the package or version ID parts contain slashes, the slashes are escaped. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

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
| `params.orderBy` | `string` | No | The field to order the results by. |

#### `projects.locations.repositories.files.get()`

Gets a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the file to retrieve. |

#### `projects.locations.repositories.files.download()`

Download a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the file to download. |

#### `projects.locations.repositories.files.upload()`

Directly uploads a file to a repository. The returned Operation will complete once the resources are uploaded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the repository where the file will be uploaded. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.files.delete()`

Deletes a file and all of its content. It is only allowed on generic repositories. The returned operation will complete once the file has been deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the file to delete. |

#### `projects.locations.repositories.files.patch()`

Updates a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the file, for example: `projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt`. If the file ID part contains slashes, they are escaped. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.rules`

#### `projects.locations.repositories.rules.create()`

Creates a rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource where the rule will be created. |
| `params.ruleId` | `string` | No | The rule id to use for this repository. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.rules.list()`

Lists rules.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent repository whose rules will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1`. |
| `params.pageSize` | `integer` | No | The maximum number of rules to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |

#### `projects.locations.repositories.rules.get()`

Gets a rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the rule to retrieve. |

#### `projects.locations.repositories.rules.patch()`

Updates a rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the rule, for example: `projects/p1/locations/us-central1/repositories/repo1/rules/rule1`. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.rules.delete()`

Deletes a rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the rule to delete. |

### `projects.locations.repositories.attachments`

#### `projects.locations.repositories.attachments.list()`

Lists attachments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource whose attachments will be listed. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `target` * `type` * `attachment_namespace` |
| `params.pageSize` | `integer` | No | The maximum number of attachments to return. Maximum page size is 1,000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. |

#### `projects.locations.repositories.attachments.get()`

Gets an attachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the attachment to retrieve. |

#### `projects.locations.repositories.attachments.create()`

Creates an attachment. The returned Operation will finish once the attachment has been created. Its response will be the created attachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource where the attachment will be created. |
| `params.attachmentId` | `string` | No | Required. The attachment id to use for this attachment. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.attachments.delete()`

Deletes an attachment. The returned Operation will finish once the attachments has been deleted. It will not have any Operation metadata and will return a `google.protobuf.Empty` response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the attachment to delete. |