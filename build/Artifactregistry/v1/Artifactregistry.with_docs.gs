
/**
 * Google Apps Script client library for the Artifact Registry API
 * Documentation URL: https://cloud.google.com/artifacts/docs/
 * @class
 */
class Artifactregistry {
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
    this._rootUrl = 'https://artifactregistry.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Retrieves the Settings for the Project.
     * @param {string} params.name - (Required) Required. The name of the projectSettings resource.
     * @return {object} The API response object.
     */
    this.projects.getProjectSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the Settings for the Project.
     * @param {string} params.name - (Required) The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set
     * @param {string} params.updateMask - Field mask to support partial updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateProjectSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations = {};

    /**
     * Retrieves the VPCSC Config for the Project.
     * @param {string} params.name - (Required) Required. The name of the VPCSCConfig resource.
     * @return {object} The API response object.
     */
    this.projects.locations.getVpcscConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the VPCSC Config for the Project.
     * @param {string} params.name - (Required) The name of the project's VPC SC Config. Always of the form: projects/{projectID}/locations/{location}/vpcscConfig In update request: never set In response: always set
     * @param {string} params.updateMask - Field mask to support partial updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateVpcscConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

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

    this.projects.locations.repositories = {};

    /**
     * Lists repositories.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` Examples of using a filter: To filter the results of your request to repositories with the name `my-repo` in project `my-project` in the `us-central` region, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-*"` * `name="projects/my-project/locations/us-central1/repositories/*repo"` * `name="projects/my-project/locations/us-central1/repositories/*repo*"`
     * @param {string} params.orderBy - Optional. The field to order the results by.
     * @param {integer} params.pageSize - The maximum number of repositories to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent resource whose repositories will be listed.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.list = (params) => this._makeRequest('v1/{+parent}/repositories', 'GET', params);

    /**
     * Gets a repository.
     * @param {string} params.name - (Required) Required. The name of the repository to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
     * @param {string} params.parent - (Required) Required. The name of the parent resource where the repository will be created.
     * @param {string} params.repositoryId - Required. The repository id to use for this repository.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.create = (params) => this._makeRequest('v1/{+parent}/repositories', 'POST', params);

    /**
     * Updates a repository.
     * @param {string} params.name - (Required) The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. For each location in a project, repository names must be unique.
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a repository and all of its contents. The returned Operation will finish once the repository has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response.
     * @param {string} params.name - (Required) Required. The name of the repository to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates the IAM policy for a given resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the IAM policy for a given resource.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Tests if the caller has a list of permissions on a resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.repositories.dockerImages = {};

    /**
     * Lists docker images.
     * @param {string} params.orderBy - The field to order the results by.
     * @param {integer} params.pageSize - The maximum number of artifacts to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent resource whose docker images will be listed.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.dockerImages.list = (params) => this._makeRequest('v1/{+parent}/dockerImages', 'GET', params);

    /**
     * Gets a docker image.
     * @param {string} params.name - (Required) Required. The name of the docker images.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.dockerImages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.mavenArtifacts = {};

    /**
     * Lists maven artifacts.
     * @param {integer} params.pageSize - The maximum number of artifacts to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent resource whose maven artifacts will be listed.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.mavenArtifacts.list = (params) => this._makeRequest('v1/{+parent}/mavenArtifacts', 'GET', params);

    /**
     * Gets a maven artifact.
     * @param {string} params.name - (Required) Required. The name of the maven artifact.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.mavenArtifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.npmPackages = {};

    /**
     * Lists npm packages.
     * @param {integer} params.pageSize - The maximum number of artifacts to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent resource whose npm packages will be listed.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.npmPackages.list = (params) => this._makeRequest('v1/{+parent}/npmPackages', 'GET', params);

    /**
     * Gets a npm package.
     * @param {string} params.name - (Required) Required. The name of the npm package.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.npmPackages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.pythonPackages = {};

    /**
     * Lists python packages.
     * @param {integer} params.pageSize - The maximum number of artifacts to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent resource whose python packages will be listed.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pythonPackages.list = (params) => this._makeRequest('v1/{+parent}/pythonPackages', 'GET', params);

    /**
     * Gets a python package.
     * @param {string} params.name - (Required) Required. The name of the python package.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pythonPackages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.aptArtifacts = {};

    /**
     * Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
     * @param {string} params.parent - (Required) The name of the parent resource where the artifacts will be imported.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.aptArtifacts.import = (params) => this._makeRequest('v1/{+parent}/aptArtifacts:import', 'POST', params);

    /**
     * Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
     * @param {string} params.parent - (Required) The name of the parent resource where the artifacts will be uploaded.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.aptArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/aptArtifacts:create', 'POST', params);

    this.projects.locations.repositories.yumArtifacts = {};

    /**
     * Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
     * @param {string} params.parent - (Required) The name of the parent resource where the artifacts will be imported.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.yumArtifacts.import = (params) => this._makeRequest('v1/{+parent}/yumArtifacts:import', 'POST', params);

    /**
     * Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
     * @param {string} params.parent - (Required) The name of the parent resource where the artifacts will be uploaded.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.yumArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/yumArtifacts:create', 'POST', params);

    this.projects.locations.repositories.googetArtifacts = {};

    /**
     * Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
     * @param {string} params.parent - (Required) The name of the parent resource where the artifacts will be imported.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.googetArtifacts.import = (params) => this._makeRequest('v1/{+parent}/googetArtifacts:import', 'POST', params);

    /**
     * Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
     * @param {string} params.parent - (Required) The name of the parent resource where the artifacts will be uploaded.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.googetArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/googetArtifacts:create', 'POST', params);

    this.projects.locations.repositories.genericArtifacts = {};

    /**
     * Directly uploads a Generic artifact. The returned operation will complete once the resources are uploaded. Package, version, and file resources are created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will raise an `ALREADY_EXISTS` error.
     * @param {string} params.parent - (Required) The resource name of the repository where the generic artifact will be uploaded.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.genericArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/genericArtifacts:create', 'POST', params);

    this.projects.locations.repositories.kfpArtifacts = {};

    /**
     * Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
     * @param {string} params.parent - (Required) The resource name of the repository where the KFP artifact will be uploaded.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.kfpArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/kfpArtifacts:create', 'POST', params);

    this.projects.locations.repositories.goModules = {};

    /**
     * Directly uploads a Go module. The returned Operation will complete once the Go module is uploaded. Package, Version, and File resources are created based on the uploaded Go module.
     * @param {string} params.parent - (Required) The resource name of the repository where the Go module will be uploaded.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.goModules.upload = (params) => this._makeRequest('v1/{+parent}/goModules:create', 'POST', params);

    this.projects.locations.repositories.packages = {};

    /**
     * Lists packages.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `annotations` Examples of using a filter: To filter the results of your request to packages with the name `my-package` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/*package"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/*pack*"` To filter the results of your request to packages with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request": * `"annotations.external_link:external_link_value"` To filter the results just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to packages with the annotation key-value pair [`external.link`:`https://example.com/my-package`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-package`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" ``
     * @param {string} params.orderBy - Optional. The field to order the results by.
     * @param {integer} params.pageSize - The maximum number of packages to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent resource whose packages will be listed.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.list = (params) => this._makeRequest('v1/{+parent}/packages', 'GET', params);

    /**
     * Gets a package.
     * @param {string} params.name - (Required) Required. The name of the package to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a package and all of its versions and tags. The returned operation will complete once the package has been deleted.
     * @param {string} params.name - (Required) Required. The name of the package to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a package.
     * @param {string} params.name - (Required) The name of the package, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. If the package ID part contains slashes, the slashes are escaped.
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.repositories.packages.versions = {};

    /**
     * Lists versions.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `annotations` Examples of using a filter: To filter the results of your request to versions with the name `my-version` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my-version"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version*"` To filter the results of your request to versions with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request: * `"annotations.external_link:external_link_value"` To filter just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to versions with the annotation key-value pair [`external.link`:`https://example.com/my-version`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-version`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" ``
     * @param {string} params.orderBy - Optional. The field to order the results by.
     * @param {integer} params.pageSize - The maximum number of versions to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) The name of the parent resource whose versions will be listed.
     * @param {string} params.view - The view that should be returned in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Gets a version
     * @param {string} params.name - (Required) The name of the version to retrieve.
     * @param {string} params.view - The view that should be returned in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
     * @param {boolean} params.force - By default, a version that is tagged may not be deleted. If force=true, the version and any tags pointing to the version are deleted.
     * @param {string} params.name - (Required) The name of the version to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Deletes multiple versions across a repository. The returned operation will complete once the versions have been deleted.
     * @param {string} params.parent - (Required) The name of the repository holding all requested versions.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.versions.batchDelete = (params) => this._makeRequest('v1/{+parent}/versions:batchDelete', 'POST', params);

    /**
     * Updates a version.
     * @param {string} params.name - (Required) The name of the version, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1`. If the package or version ID parts contain slashes, the slashes are escaped.
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.repositories.packages.tags = {};

    /**
     * Lists tags.
     * @param {string} params.filter - An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `version` Examples of using a filter: To filter the results of your request to tags with the name `my-tag` in package `my-package` in repository `my-repo` in project "`y-project` in the us-central region, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/my-tag"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/my*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/*tag"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/*tag*"` To filter the results of your request to tags applied to the version `1.0` in package `my-package`, append the following filter expression to your request: * `version="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/1.0"`
     * @param {integer} params.pageSize - The maximum number of tags to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) The name of the parent package whose tags will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.tags.list = (params) => this._makeRequest('v1/{+parent}/tags', 'GET', params);

    /**
     * Gets a tag.
     * @param {string} params.name - (Required) The name of the tag to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.tags.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a tag.
     * @param {string} params.parent - (Required) The name of the parent resource where the tag will be created.
     * @param {string} params.tagId - The tag id to use for this repository.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.tags.create = (params) => this._makeRequest('v1/{+parent}/tags', 'POST', params);

    /**
     * Updates a tag.
     * @param {string} params.name - (Required) The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.tags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a tag.
     * @param {string} params.name - (Required) The name of the tag to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.packages.tags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.files = {};

    /**
     * Lists files.
     * @param {string} params.filter - An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `owner` * `annotations` Examples of using a filter: To filter the results of your request to files with the name `my_file.txt` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/my-file.txt"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/my-*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/*file.txt"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/*file*"` To filter the results of your request to files owned by the version `1.0` in package `pkg1`, append the following filter expression to your request: * `owner="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/1.0"` To filter the results of your request to files with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request: * `"annotations.external_link:external_link_value"` To filter just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to files with the annotation key-value pair [`external.link`:`https://example.com/my-file`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-file`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" ``
     * @param {string} params.orderBy - The field to order the results by.
     * @param {integer} params.pageSize - The maximum number of files to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the repository whose files will be listed. For example: "projects/p1/locations/us-central1/repositories/repo1
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.files.list = (params) => this._makeRequest('v1/{+parent}/files', 'GET', params);

    /**
     * Gets a file.
     * @param {string} params.name - (Required) Required. The name of the file to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.files.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Download a file.
     * @param {string} params.name - (Required) Required. The name of the file to download.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.files.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    /**
     * Directly uploads a file to a repository. The returned Operation will complete once the resources are uploaded.
     * @param {string} params.parent - (Required) Required. The resource name of the repository where the file will be uploaded.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.files.upload = (params) => this._makeRequest('v1/{+parent}/files:upload', 'POST', params);

    /**
     * Deletes a file and all of its content. It is only allowed on generic repositories. The returned operation will complete once the file has been deleted.
     * @param {string} params.name - (Required) Required. The name of the file to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.files.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a file.
     * @param {string} params.name - (Required) The name of the file, for example: `projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt`. If the file ID part contains slashes, they are escaped.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.files.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.repositories.rules = {};

    /**
     * Creates a rule.
     * @param {string} params.parent - (Required) Required. The name of the parent resource where the rule will be created.
     * @param {string} params.ruleId - The rule id to use for this repository.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.rules.create = (params) => this._makeRequest('v1/{+parent}/rules', 'POST', params);

    /**
     * Lists rules.
     * @param {integer} params.pageSize - The maximum number of rules to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent repository whose rules will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.rules.list = (params) => this._makeRequest('v1/{+parent}/rules', 'GET', params);

    /**
     * Gets a rule.
     * @param {string} params.name - (Required) Required. The name of the rule to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.rules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a rule.
     * @param {string} params.name - (Required) The name of the rule, for example: `projects/p1/locations/us-central1/repositories/repo1/rules/rule1`.
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.rules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a rule.
     * @param {string} params.name - (Required) Required. The name of the rule to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.rules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.attachments = {};

    /**
     * Lists attachments.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `target` * `type` * `attachment_namespace`
     * @param {integer} params.pageSize - The maximum number of attachments to return. Maximum page size is 1,000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent resource whose attachments will be listed.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.attachments.list = (params) => this._makeRequest('v1/{+parent}/attachments', 'GET', params);

    /**
     * Gets an attachment.
     * @param {string} params.name - (Required) Required. The name of the attachment to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.attachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an attachment. The returned Operation will finish once the attachment has been created. Its response will be the created attachment.
     * @param {string} params.attachmentId - Required. The attachment id to use for this attachment.
     * @param {string} params.parent - (Required) Required. The name of the parent resource where the attachment will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.attachments.create = (params) => this._makeRequest('v1/{+parent}/attachments', 'POST', params);

    /**
     * Deletes an attachment. The returned Operation will finish once the attachments has been deleted. It will not have any Operation metadata and will return a `google.protobuf.Empty` response.
     * @param {string} params.name - (Required) Required. The name of the attachment to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.attachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
