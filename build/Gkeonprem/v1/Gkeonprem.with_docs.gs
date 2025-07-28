
/**
 * Google Apps Script client library for the GKE On-Prem API
 * Documentation URL: https://cloud.google.com/anthos/clusters/docs/on-prem/
 * @class
 */
class Gkeonprem {
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
    this._rootUrl = 'https://gkeonprem.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.bareMetalClusters = {};

    /**
     * Creates a new bare metal cluster in a given project and location.
     * @param {boolean} params.allowPreflightFailure - Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster.
     * @param {string} params.bareMetalClusterId - Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.create = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters', 'POST', params);

    /**
     * Deletes a single bare metal Cluster.
     * @param {boolean} params.allowMissing - If set to true, and the bare metal cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the bare metal Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.force - If set to true, any node pools from the cluster will also be deleted.
     * @param {boolean} params.ignoreErrors - If set to true, the deletion of a bare metal user cluster resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's cluster resource and the on-prem admin cluster that hosts your user cluster is disconnected / unreachable or deleted. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP user cluster but an existing on-prem user cluster.
     * @param {string} params.name - (Required) Required. Name of the bare metal user cluster to be deleted. Format: "projects/{project}/locations/{location}/bareMetalClusters/{bare_metal_cluster}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.enroll = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters:enroll', 'POST', params);

    /**
     * Gets details of a single bare metal Cluster.
     * @param {boolean} params.allowMissing - Optional. If true, return BareMetal Cluster including the one that only exists in RMS.
     * @param {string} params.name - (Required) Required. Name of the bare metal user cluster to get. Format: "projects/{project}/locations/{location}/bareMetalClusters/{bare_metal_cluster}"
     * @param {string} params.view - View for bare metal user cluster. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists bare metal clusters in a given project and location.
     * @param {boolean} params.allowMissing - Optional. If true, return list of BareMetal Clusters including the ones that only exists in RMS.
     * @param {string} params.filter - A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
     * @param {string} params.view - View for bare metal Clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.list = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters', 'GET', params);

    /**
     * Unenrolls an existing bare metal user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.
     * @param {boolean} params.allowMissing - If set to true, and the bare metal cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the bare metal Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.force - This is required if the cluster has any associated node pools. When set, any child node pools will also be unenrolled.
     * @param {string} params.name - (Required) Required. Name of the bare metal user cluster to be unenrolled. Format: "projects/{project}/locations/{location}/bareMetalClusters/{cluster}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);

    /**
     * Updates the parameters of a single bare metal Cluster.
     * @param {boolean} params.allowMissing - If set to true, and the bare metal cluster is not found, the request will create a new bare metal cluster with the provided configuration. The user must have both create and update permission to call Update with allow_missing set to true.
     * @param {string} params.name - (Required) Immutable. The bare metal user cluster resource name.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the BareMetalCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Queries the bare metal user cluster version config.
     * @param {string} params.createConfig.adminClusterMembership - The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project}/locations/{location}/memberships/{membership}"
     * @param {string} params.createConfig.adminClusterName - The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}"
     * @param {string} params.parent - (Required) Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}"
     * @param {string} params.upgradeConfig.clusterName - The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project}/locations/{location}/bareMetalClusters/{bare_metal_cluster}"
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.queryVersionConfig = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters:queryVersionConfig', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.bareMetalClusters.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.bareMetalClusters.bareMetalNodePools = {};

    /**
     * Creates a new bare metal node pool in a given project, location and Bare Metal cluster.
     * @param {string} params.bareMetalNodePoolId - The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 63 characters, and valid characters are /a-z-/. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i).
     * @param {string} params.parent - (Required) Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/bareMetalClusters/{cluster}
     * @param {boolean} params.validateOnly - If set, only validate the request, but do not actually create the node pool.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.create = (params) => this._makeRequest('v1/{+parent}/bareMetalNodePools', 'POST', params);

    /**
     * Deletes a single bare metal node pool.
     * @param {boolean} params.allowMissing - If set to true, and the bare metal node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the BareMetalNodePool. If an etag is provided and does not match the current etag of the node pool, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.ignoreErrors - If set to true, the deletion of a bare metal node pool resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's node pool resource and you've already deleted the on-prem admin cluster that hosted your node pool. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP node pool but an existing on-prem node pool.
     * @param {string} params.name - (Required) Required. The name of the node pool to delete. Format: projects/{project}/locations/{location}/bareMetalClusters/{cluster}/bareMetalNodePools/{nodepool}
     * @param {boolean} params.validateOnly - If set, only validate the request, but do not actually delete the node pool.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.
     * @param {string} params.parent - (Required) Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/bareMetalClusters/{cluster}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.enroll = (params) => this._makeRequest('v1/{+parent}/bareMetalNodePools:enroll', 'POST', params);

    /**
     * Gets details of a single bare metal node pool.
     * @param {string} params.name - (Required) Required. The name of the node pool to retrieve. projects/{project}/locations/{location}/bareMetalClusters/{cluster}/bareMetalNodePools/{nodepool}
     * @param {string} params.view - View for bare metal node pool. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists bare metal node pools in a given project, location and bare metal cluster.
     * @param {integer} params.pageSize - The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListBareMetalNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBareMetalNodePools` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of node pools. Format: projects/{project}/locations/{location}/bareMetalClusters/{bareMetalCluster}
     * @param {string} params.view - View for bare metal node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.list = (params) => this._makeRequest('v1/{+parent}/bareMetalNodePools', 'GET', params);

    /**
     * Unenrolls a bare metal node pool from Anthos On-Prem API.
     * @param {boolean} params.allowMissing - If set to true, and the bare metal node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the bare metal node pool. If an etag is provided and does not match the current etag of node pool, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The name of the node pool to unenroll. Format: projects/{project}/locations/{location}/bareMetalClusters/{cluster}/bareMetalNodePools/{nodepool}
     * @param {boolean} params.validateOnly - If set, only validate the request, but do not actually unenroll the node pool.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);

    /**
     * Updates the parameters of a single bare metal node pool.
     * @param {boolean} params.allowMissing - If set to true, and the bare metal node pool is not found, the request will create a new bare metal node pool with the provided configuration. The user must have both create and update permission to call Update with allow_missing set to true.
     * @param {string} params.name - (Required) Immutable. The bare metal node pool resource name.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the BareMetalNodePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalNodePool message will be updated. Empty fields will be ignored unless a field mask is used.
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.vmwareClusters = {};

    /**
     * Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the cluster is Enrolled in. Format: "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.enroll = (params) => this._makeRequest('v1/{+parent}/vmwareClusters:enroll', 'POST', params);

    /**
     * Unenrolls an existing VMware user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or UI.
     * @param {boolean} params.allowMissing - If set to true, and the VMware cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the VMware Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.force - This is required if the cluster has any associated node pools. When set, any child node pools will also be unenrolled.
     * @param {string} params.name - (Required) Required. Name of the VMware user cluster to be unenrolled. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);

    /**
     * Creates a new VMware user cluster in a given project and location.
     * @param {boolean} params.allowPreflightFailure - Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where this cluster is created in. Format: "projects/{project}/locations/{location}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {string} params.vmwareClusterId - User provided identifier that is used as part of the resource name; This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.create = (params) => this._makeRequest('v1/{+parent}/vmwareClusters', 'POST', params);

    /**
     * Deletes a single VMware Cluster.
     * @param {boolean} params.allowMissing - If set to true, and the VMware cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the VMware cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.force - If set to true, any node pools from the cluster will also be deleted.
     * @param {boolean} params.ignoreErrors - If set to true, the deletion of a VMware user cluster resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's cluster resource and the on-prem admin cluster that hosts your user cluster is disconnected / unreachable or deleted. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP user cluster but an existing on-prem user cluster.
     * @param {string} params.name - (Required) Required. Name of the VMware user cluster to be deleted. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets details of a single VMware Cluster.
     * @param {boolean} params.allowMissing - Optional. If true, return Vmware Cluster including the one that only exists in RMS.
     * @param {string} params.name - (Required) Required. Name of the VMware user cluster to be returned. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}"
     * @param {string} params.view - View for VMware user cluster. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists VMware Clusters in a given project and location.
     * @param {boolean} params.allowMissing - Optional. If true, return list of Vmware Clusters including the ones that only exists in RMS.
     * @param {string} params.filter - A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
     * @param {string} params.view - View for VMware clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.list = (params) => this._makeRequest('v1/{+parent}/vmwareClusters', 'GET', params);

    /**
     * Updates the parameters of a single VMware cluster.
     * @param {string} params.name - (Required) Immutable. The VMware user cluster resource name.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the VMwareCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VmwareCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Queries the VMware user cluster version config.
     * @param {string} params.createConfig.adminClusterMembership - The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project}/locations/{location}/memberships/{membership}"
     * @param {string} params.createConfig.adminClusterName - The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/vmwareAdminClusters/{vmware_admin_cluster}"
     * @param {string} params.parent - (Required) Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}"
     * @param {string} params.upgradeConfig.clusterName - The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}"
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.queryVersionConfig = (params) => this._makeRequest('v1/{+parent}/vmwareClusters:queryVersionConfig', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.vmwareClusters.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.vmwareClusters.vmwareNodePools = {};

    /**
     * Creates a new VMware node pool in a given project, location and VMWare cluster.
     * @param {string} params.parent - (Required) Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/vmwareClusters/{cluster}
     * @param {boolean} params.validateOnly - If set, only validate the request, but do not actually create the node pool.
     * @param {string} params.vmwareNodePoolId - The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.create = (params) => this._makeRequest('v1/{+parent}/vmwareNodePools', 'POST', params);

    /**
     * Deletes a single VMware node pool.
     * @param {boolean} params.allowMissing - If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the VmwareNodePool. If an etag is provided and does not match the current etag of the node pool, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.ignoreErrors - If set to true, the deletion of a VMware node pool resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's node pool resource and you've already deleted the on-prem admin cluster that hosted your node pool. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP node pool but an existing on-prem node pool.
     * @param {string} params.name - (Required) Required. The name of the node pool to delete. Format: projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool}
     * @param {boolean} params.validateOnly - If set, only validate the request, but do not actually delete the node pool.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets details of a single VMware node pool.
     * @param {string} params.name - (Required) Required. The name of the node pool to retrieve. projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool}
     * @param {string} params.view - View for VMware node pool. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists VMware node pools in a given project, location and VMWare cluster.
     * @param {integer} params.pageSize - The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListVmwareNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVmwareNodePools` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of node pools. Format: projects/{project}/locations/{location}/vmwareClusters/{vmwareCluster}
     * @param {string} params.view - View for VMware node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.list = (params) => this._makeRequest('v1/{+parent}/vmwareNodePools', 'GET', params);

    /**
     * Updates the parameters of a single VMware node pool.
     * @param {string} params.name - (Required) Immutable. The resource name of this node pool.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the VMwareNodePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VMwareNodePool message will be updated. Empty fields will be ignored unless a field mask is used.
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Enrolls a VMware node pool to Anthos On-Prem API
     * @param {string} params.parent - (Required) Required. The parent resource where the node pool is enrolled in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.enroll = (params) => this._makeRequest('v1/{+parent}/vmwareNodePools:enroll', 'POST', params);

    /**
     * Unenrolls a VMware node pool to Anthos On-Prem API
     * @param {boolean} params.allowMissing - If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the VMware node pool. If an etag is provided and does not match the current etag of node pool, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The name of the node pool to unenroll. Format: projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool}
     * @param {boolean} params.validateOnly - If set, only validate the request, but do not actually unenroll the node pool.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.vmwareClusters.vmwareNodePools.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareClusters.vmwareNodePools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.vmwareAdminClusters = {};

    /**
     * Creates a new VMware admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work.
     * @param {boolean} params.allowPreflightFailure - Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {string} params.vmwareAdminClusterId - Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.create = (params) => this._makeRequest('v1/{+parent}/vmwareAdminClusters', 'POST', params);

    /**
     * Lists VMware admin clusters in a given project and location.
     * @param {boolean} params.allowMissing - Optional. If true, return list of Vmware Admin Clusters including the ones that only exists in RMS.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
     * @param {string} params.view - View for VMware admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.list = (params) => this._makeRequest('v1/{+parent}/vmwareAdminClusters', 'GET', params);

    /**
     * Gets details of a single VMware admin cluster.
     * @param {boolean} params.allowMissing - Optional. If true, return Vmware Admin Cluster including the one that only exists in RMS.
     * @param {string} params.name - (Required) Required. Name of the VMware admin cluster to be returned. Format: "projects/{project}/locations/{location}/vmwareAdminClusters/{vmware_admin_cluster}"
     * @param {string} params.view - View for VMware admin cluster. When `BASIC` is specified, only the cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.enroll = (params) => this._makeRequest('v1/{+parent}/vmwareAdminClusters:enroll', 'POST', params);

    /**
     * Unenrolls an existing VMware admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.
     * @param {boolean} params.allowMissing - If set to true, and the VMware admin cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the VMware admin cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.ignoreErrors - Optional. If set to true, the unenrollment of a vmware admin cluster resource will succeed even if errors occur during unenrollment. This parameter can be used when you want to unenroll admin cluster resource and the on-prem admin cluster is disconnected / unreachable. WARNING: Using this parameter when your admin cluster still exists may result in a deleted GCP admin cluster but existing resourcelink in on-prem admin cluster and membership.
     * @param {string} params.name - (Required) Required. Name of the VMware admin cluster to be unenrolled. Format: "projects/{project}/locations/{location}/vmwareAdminClusters/{cluster}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);

    /**
     * Updates the parameters of a single VMware admin cluster.
     * @param {string} params.name - (Required) Immutable. The VMware admin cluster resource name.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the VMwareAdminCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VmwareAdminCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.vmwareAdminClusters.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareAdminClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.bareMetalAdminClusters = {};

    /**
     * Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment
     * @param {boolean} params.allowPreflightFailure - Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster.
     * @param {string} params.bareMetalAdminClusterId - Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.create = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters', 'POST', params);

    /**
     * Lists bare metal admin clusters in a given project and location.
     * @param {boolean} params.allowMissing - Optional. If true, return list of BareMetal Admin Clusters including the ones that only exists in RMS.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
     * @param {string} params.view - View for bare metal admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.list = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters', 'GET', params);

    /**
     * Gets details of a single bare metal admin cluster.
     * @param {boolean} params.allowMissing - Optional. If true, return BareMetal Admin Cluster including the one that only exists in RMS.
     * @param {string} params.name - (Required) Required. Name of the bare metal admin cluster to get. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}"
     * @param {string} params.view - View for bare metal admin cluster. When `BASIC` is specified, only the cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
     * @param {string} params.parent - (Required) Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.enroll = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters:enroll', 'POST', params);

    /**
     * Unenrolls an existing bare metal admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.
     * @param {boolean} params.allowMissing - If set to true, and the bare metal admin cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     * @param {string} params.etag - The current etag of the bare metal admin cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.ignoreErrors - If set to true, the unenrollment of a bare metal admin cluster resource will succeed even if errors occur during unenrollment. This parameter can be used when you want to unenroll admin cluster resource and the on-prem admin cluster is disconnected / unreachable. WARNING: Using this parameter when your admin cluster still exists may result in a deleted GCP admin cluster but existing resourcelink in on-prem admin cluster and membership.
     * @param {string} params.name - (Required) Required. Name of the bare metal admin cluster to be unenrolled. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{cluster}"
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);

    /**
     * Updates the parameters of a single bare metal admin cluster.
     * @param {string} params.name - (Required) Immutable. The bare metal admin cluster resource name.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the BareMetalAdminCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalAdminCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     * @param {boolean} params.validateOnly - Validate the request without actually doing any updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Queries the bare metal admin cluster version config.
     * @param {string} params.parent - (Required) Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}"
     * @param {string} params.upgradeConfig.clusterName - The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}"
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.queryVersionConfig = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters:queryVersionConfig', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.bareMetalAdminClusters.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.bareMetalAdminClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
