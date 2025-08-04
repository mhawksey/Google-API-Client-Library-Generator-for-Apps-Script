
/**
 * Google Apps Script client library for the Cloud Dataproc API
 * Documentation URL: https://cloud.google.com/dataproc/
 * @class
 */
class Dataproc {
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
    this._rootUrl = 'https://dataproc.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.regions = {};

    this.projects.regions.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.regions.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.regions.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.regions.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.regions.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.operations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.operations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.operations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.autoscalingPolicies = {};

    /**
     * Creates new autoscaling policy.
     * @param {string} params.parent - (Required) Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.create = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'POST', params);

    /**
     * Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.
     * @param {string} params.name - (Required) Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Retrieves autoscaling policy.
     * @param {string} params.name - (Required) Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists autoscaling policies in the project.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
     * @param {string} params.pageToken - Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent - (Required) Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.list = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'GET', params);

    /**
     * Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.
     * @param {string} params.name - (Required) Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.autoscalingPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.clusters = {};

    /**
     * Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
     * @param {string} params.actionOnFailedPrimaryWorkers - Optional. Failure action when primary worker creation fails.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.create = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters', 'POST', params);

    /**
     * Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
     * @param {string} params.clusterName - (Required) Required. The cluster name.
     * @param {string} params.gracefulDecommissionTimeout - Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {string} params.updateMask - Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.patch = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'PATCH', params);

    /**
     * Stops a cluster in a project.
     * @param {string} params.clusterName - (Required) Required. The cluster name.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.stop = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop', 'POST', params);

    /**
     * Starts a cluster in a project.
     * @param {string} params.clusterName - (Required) Required. The cluster name.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.start = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start', 'POST', params);

    /**
     * Repairs a cluster.
     * @param {string} params.clusterName - (Required) Required. The cluster name.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.repair = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair', 'POST', params);

    /**
     * Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
     * @param {string} params.clusterName - (Required) Required. The cluster name.
     * @param {string} params.clusterUuid - Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
     * @param {string} params.gracefulTerminationTimeout - Optional. The graceful termination timeout for the deletion of the cluster. Indicate the time the request will wait to complete the running jobs on the cluster before its forceful deletion. Default value is 0 indicating that the user has not enabled the graceful termination. Value can be between 60 second and 6 Hours, in case the graceful termination is enabled. (There is no separate flag to check the enabling or disabling of graceful termination, it can be checked by the values in the field).
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.delete = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'DELETE', params);

    /**
     * Gets the resource representation for a cluster in a project.
     * @param {string} params.clusterName - (Required) Required. The cluster name.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.get = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'GET', params);

    /**
     * Lists all regions/{region}/clusters in a project alphabetically.
     * @param {string} params.filter - Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, or STOPPED. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING, ERROR, STOPPING, and STOPPED states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
     * @param {integer} params.pageSize - Optional. The standard List page size.
     * @param {string} params.pageToken - Optional. The standard List page token.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.list = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters', 'GET', params);

    /**
     * Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
     * @param {string} params.clusterName - (Required) Required. The cluster name.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.diagnose = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose', 'POST', params);

    /**
     * Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
     * @param {string} params.cluster - (Required) Required. The cluster, in the form clusters/.
     * @param {string} params.project - (Required) Required. The ID of the Google Cloud Platform project the cluster belongs to, of the form projects/.
     * @param {string} params.region - (Required) Required. The region containing the cluster, of the form regions/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.injectCredentials = (params) => this._makeRequest('v1/{+project}/{+region}/{+cluster}:injectCredentials', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.clusters.nodeGroups = {};

    /**
     * Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
     * @param {string} params.nodeGroupId - Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
     * @param {string} params.parent - (Required) Required. The parent resource where this node group will be created. Format: projects/{project}/regions/{region}/clusters/{cluster}
     * @param {string} params.parentOperationId - Optional. operation id of the parent operation sending the create request
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequest) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.nodeGroups.create = (params) => this._makeRequest('v1/{+parent}/nodeGroups', 'POST', params);

    /**
     * Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
     * @param {string} params.name - (Required) Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.nodeGroups.resize = (params) => this._makeRequest('v1/{+name}:resize', 'POST', params);

    /**
     * Repair nodes in a node group.
     * @param {string} params.name - (Required) Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.nodeGroups.repair = (params) => this._makeRequest('v1/{+name}:repair', 'POST', params);

    /**
     * Gets the resource representation for a node group in a cluster.
     * @param {string} params.name - (Required) Required. The name of the node group to retrieve. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}
     * @return {object} The API response object.
     */
    this.projects.regions.clusters.nodeGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.regions.jobs = {};

    /**
     * Submits a job to a cluster.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.submit = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs:submit', 'POST', params);

    /**
     * Submits job to a cluster.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.submitAsOperation = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation', 'POST', params);

    /**
     * Gets the resource representation for a job in a project.
     * @param {string} params.jobId - (Required) Required. The job ID.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.get = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'GET', params);

    /**
     * Lists regions/{region}/jobs in a project.
     * @param {string} params.clusterName - Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
     * @param {string} params.filter - Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
     * @param {string} params.jobStateMatcher - Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.
     * @param {integer} params.pageSize - Optional. The number of results to return in each response.
     * @param {string} params.pageToken - Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.list = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs', 'GET', params);

    /**
     * Updates a job in a project.
     * @param {string} params.jobId - (Required) Required. The job ID.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {string} params.updateMask - Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.patch = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'PATCH', params);

    /**
     * Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
     * @param {string} params.jobId - (Required) Required. The job ID.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.cancel = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel', 'POST', params);

    /**
     * Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
     * @param {string} params.jobId - (Required) Required. The job ID.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region - (Required) Required. The Dataproc region in which to handle the request.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.delete = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.jobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.workflowTemplates = {};

    /**
     * Creates new workflow template.
     * @param {string} params.parent - (Required) Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.create = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'POST', params);

    /**
     * Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
     * @param {string} params.name - (Required) Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer} params.version - Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
     * @param {string} params.name - (Required) Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.instantiate = (params) => this._makeRequest('v1/{+name}:instantiate', 'POST', params);

    /**
     * Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
     * @param {string} params.parent - (Required) Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @param {string} params.requestId - Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.instantiateInline = (params) => this._makeRequest('v1/{+parent}/workflowTemplates:instantiateInline', 'POST', params);

    /**
     * Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
     * @param {string} params.name - (Required) Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Lists workflows that match the specified filter in the request.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return in each response.
     * @param {string} params.pageToken - Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent - (Required) Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.list = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'GET', params);

    /**
     * Deletes a workflow template. It does not cancel in-progress workflows.
     * @param {string} params.name - (Required) Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer} params.version - Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.regions.workflowTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations = {};

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.batches = {};

    /**
     * Analyze a Batch for possible recommendations and insights.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to analyze in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.analyze = (params) => this._makeRequest('v1/{+name}:analyze', 'POST', params);

    /**
     * Creates a batch workload that executes asynchronously.
     * @param {string} params.batchId - Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.
     * @param {string} params.parent - (Required) Required. The parent resource where this batch will be created.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateBatchRequest)s with the same request_id, the second request is ignored and the Operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.create = (params) => this._makeRequest('v1/{+parent}/batches', 'POST', params);

    /**
     * Gets the batch workload resource representation.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID"
     * @return {object} The API response object.
     */
    this.projects.locations.batches.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists batch workloads.
     * @param {string} params.filter - Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields are batch_id, batch_uuid, state, create_time, and labels.e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01. state = RUNNING and labels.environment=production filters for batches in state in a RUNNING state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons.
     * @param {string} params.orderBy - Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000.
     * @param {string} params.pageToken - Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of batches.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.list = (params) => this._makeRequest('v1/{+parent}/batches', 'GET', params);

    /**
     * Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID"
     * @return {object} The API response object.
     */
    this.projects.locations.batches.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.batches.sparkApplications = {};

    /**
     * Write wrapper objects from dataplane to spanner
     * @param {string} params.name - (Required) Required. The fully qualified name of the spark application to write data about in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.write = (params) => this._makeRequest('v1/{+name}:write', 'POST', params);

    /**
     * Obtain high level information and list of Spark Applications corresponding to a batch
     * @param {string} params.applicationStatus - Optional. Search only applications in the chosen state.
     * @param {string} params.maxEndTime - Optional. Latest end timestamp to list.
     * @param {string} params.maxTime - Optional. Latest start timestamp to list.
     * @param {string} params.minEndTime - Optional. Earliest end timestamp to list.
     * @param {string} params.minTime - Optional. Earliest start timestamp to list.
     * @param {integer} params.pageSize - Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSparkApplications call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID"
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.search = (params) => this._makeRequest('v1/{+parent}/sparkApplications:search', 'GET', params);

    /**
     * Obtain high level information corresponding to a single Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.access = (params) => this._makeRequest('v1/{+name}:access', 'GET', params);

    /**
     * Obtain list of spark jobs corresponding to a Spark Application.
     * @param {string} params.jobStatus - Optional. List only jobs in the specific state.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSparkApplicationJobs call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.searchJobs = (params) => this._makeRequest('v1/{+name}:searchJobs', 'GET', params);

    /**
     * Obtain data corresponding to a spark job for a Spark Application.
     * @param {string} params.jobId - Required. Job ID to fetch data for.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.accessJob = (params) => this._makeRequest('v1/{+name}:accessJob', 'GET', params);

    /**
     * Obtain data corresponding to stages for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous FetchSparkApplicationStagesList call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {string} params.stageStatus - Optional. List only stages in the given state.
     * @param {string} params.summaryMetricsMask - Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.searchStages = (params) => this._makeRequest('v1/{+name}:searchStages', 'GET', params);

    /**
     * Obtain data corresponding to a spark stage attempts for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {string} params.stageId - Required. Stage ID for which attempts are to be fetched
     * @param {string} params.summaryMetricsMask - Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.searchStageAttempts = (params) => this._makeRequest('v1/{+name}:searchStageAttempts', 'GET', params);

    /**
     * Obtain data corresponding to a spark stage attempt for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {integer} params.stageAttemptId - Required. Stage Attempt ID
     * @param {string} params.stageId - Required. Stage ID
     * @param {string} params.summaryMetricsMask - Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.accessStageAttempt = (params) => this._makeRequest('v1/{+name}:accessStageAttempt', 'GET', params);

    /**
     * Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous ListSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {boolean} params.sortRuntime - Optional. Sort the tasks by runtime.
     * @param {integer} params.stageAttemptId - Optional. Stage Attempt ID
     * @param {string} params.stageId - Optional. Stage ID
     * @param {string} params.taskStatus - Optional. List only tasks in the state.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.searchStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:searchStageAttemptTasks', 'GET', params);

    /**
     * Obtain data corresponding to executors for a Spark Application.
     * @param {string} params.executorStatus - Optional. Filter to select whether active/ dead or all executors should be selected.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.searchExecutors = (params) => this._makeRequest('v1/{+name}:searchExecutors', 'GET', params);

    /**
     * Obtain executor summary with respect to a spark stage attempt.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {integer} params.stageAttemptId - Required. Stage Attempt ID
     * @param {string} params.stageId - Required. Stage ID
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.searchExecutorStageSummary = (params) => this._makeRequest('v1/{+name}:searchExecutorStageSummary', 'GET', params);

    /**
     * Obtain data corresponding to SQL Queries for a Spark Application.
     * @param {boolean} params.details - Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {boolean} params.planDescription - Optional. Enables/ disables physical plan description on demand
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.searchSqlQueries = (params) => this._makeRequest('v1/{+name}:searchSqlQueries', 'GET', params);

    /**
     * Obtain data corresponding to a particular SQL Query for a Spark Application.
     * @param {boolean} params.details - Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     * @param {string} params.executionId - Required. Execution ID
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {boolean} params.planDescription - Optional. Enables/ disables physical plan description on demand
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.accessSqlQuery = (params) => this._makeRequest('v1/{+name}:accessSqlQuery', 'GET', params);

    /**
     * Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.
     * @param {string} params.executionId - Required. Execution ID
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.accessSqlPlan = (params) => this._makeRequest('v1/{+name}:accessSqlPlan', 'GET', params);

    /**
     * Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {string} params.stageId - Required. Stage ID
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.accessStageRddGraph = (params) => this._makeRequest('v1/{+name}:accessStageRddGraph', 'GET', params);

    /**
     * Obtain environment details for a Spark Application
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.accessEnvironmentInfo = (params) => this._makeRequest('v1/{+name}:accessEnvironmentInfo', 'GET', params);

    /**
     * Obtain summary of Jobs for a Spark Application
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.summarizeJobs = (params) => this._makeRequest('v1/{+name}:summarizeJobs', 'GET', params);

    /**
     * Obtain summary of Stages for a Spark Application
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.summarizeStages = (params) => this._makeRequest('v1/{+name}:summarizeStages', 'GET', params);

    /**
     * Obtain summary of Tasks for a Spark Application Stage Attempt
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @param {integer} params.stageAttemptId - Required. Stage Attempt ID
     * @param {string} params.stageId - Required. Stage ID
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.summarizeStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:summarizeStageAttemptTasks', 'GET', params);

    /**
     * Obtain summary of Executor Summary for a Spark Application
     * @param {string} params.name - (Required) Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Batch) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.batches.sparkApplications.summarizeExecutors = (params) => this._makeRequest('v1/{+name}:summarizeExecutors', 'GET', params);

    this.projects.locations.autoscalingPolicies = {};

    /**
     * Creates new autoscaling policy.
     * @param {string} params.parent - (Required) Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.create = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'POST', params);

    /**
     * Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.
     * @param {string} params.name - (Required) Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Retrieves autoscaling policy.
     * @param {string} params.name - (Required) Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists autoscaling policies in the project.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
     * @param {string} params.pageToken - Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent - (Required) Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.list = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'GET', params);

    /**
     * Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.
     * @param {string} params.name - (Required) Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.autoscalingPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.sessions = {};

    /**
     * Create an interactive session asynchronously.
     * @param {string} params.parent - (Required) Required. The parent resource where this session will be created.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the service receives two CreateSessionRequests (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateSessionRequest)s with the same ID, the second request is ignored, and the first Session is created and stored in the backend.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {string} params.sessionId - Required. The ID to use for the session, which becomes the final component of the session's resource name.This value must be 4-63 characters. Valid characters are /a-z-/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.create = (params) => this._makeRequest('v1/{+parent}/sessions', 'POST', params);

    /**
     * Gets the resource representation for an interactive session.
     * @param {string} params.name - (Required) Required. The name of the session to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists interactive sessions.
     * @param {string} params.filter - Optional. A filter for the sessions to return in the response.A filter is a logical expression constraining the values of various fields in each session resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND, OR). Supported fields are session_id, session_uuid, state, create_time, and labels.Example: state = ACTIVE and create_time < "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state that were created before 2023-01-01. state = ACTIVE and labels.environment=production is a filter for sessions in an ACTIVE state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparators.
     * @param {integer} params.pageSize - Optional. The maximum number of sessions to return in each response. The service may return fewer than this value.
     * @param {string} params.pageToken - Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of sessions.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.list = (params) => this._makeRequest('v1/{+parent}/sessions', 'GET', params);

    /**
     * Terminates the interactive session.
     * @param {string} params.name - (Required) Required. The name of the session resource to terminate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.terminate = (params) => this._makeRequest('v1/{+name}:terminate', 'POST', params);

    /**
     * Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.
     * @param {string} params.name - (Required) Required. The name of the session resource to delete.
     * @param {string} params.requestId - Optional. A unique ID used to identify the request. If the service receives two DeleteSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.sessions.sparkApplications = {};

    /**
     * Write wrapper objects from dataplane to spanner
     * @param {string} params.name - (Required) Required. The fully qualified name of the spark application to write data about in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.write = (params) => this._makeRequest('v1/{+name}:write', 'POST', params);

    /**
     * Obtain high level information and list of Spark Applications corresponding to a batch
     * @param {string} params.applicationStatus - Optional. Search only applications in the chosen state.
     * @param {string} params.maxEndTime - Optional. Latest end timestamp to list.
     * @param {string} params.maxTime - Optional. Latest start timestamp to list.
     * @param {string} params.minEndTime - Optional. Earliest end timestamp to list.
     * @param {string} params.minTime - Optional. Earliest start timestamp to list.
     * @param {integer} params.pageSize - Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplications call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID"
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.search = (params) => this._makeRequest('v1/{+parent}/sparkApplications:search', 'GET', params);

    /**
     * Obtain high level information corresponding to a single Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.access = (params) => this._makeRequest('v1/{+name}:access', 'GET', params);

    /**
     * Obtain list of spark jobs corresponding to a Spark Application.
     * @param {string} params.jobIds - Optional. List of Job IDs to filter by if provided.
     * @param {string} params.jobStatus - Optional. List only jobs in the specific state.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplicationJobs call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.searchJobs = (params) => this._makeRequest('v1/{+name}:searchJobs', 'GET', params);

    /**
     * Obtain data corresponding to a spark job for a Spark Application.
     * @param {string} params.jobId - Required. Job ID to fetch data for.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.accessJob = (params) => this._makeRequest('v1/{+name}:accessJob', 'GET', params);

    /**
     * Obtain data corresponding to stages for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplicationStages call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {string} params.stageIds - Optional. List of Stage IDs to filter by if provided.
     * @param {string} params.stageStatus - Optional. List only stages in the given state.
     * @param {string} params.summaryMetricsMask - Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.searchStages = (params) => this._makeRequest('v1/{+name}:searchStages', 'GET', params);

    /**
     * Obtain data corresponding to a spark stage attempts for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {string} params.stageId - Required. Stage ID for which attempts are to be fetched
     * @param {string} params.summaryMetricsMask - Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.searchStageAttempts = (params) => this._makeRequest('v1/{+name}:searchStageAttempts', 'GET', params);

    /**
     * Obtain data corresponding to a spark stage attempt for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {integer} params.stageAttemptId - Required. Stage Attempt ID
     * @param {string} params.stageId - Required. Stage ID
     * @param {string} params.summaryMetricsMask - Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.accessStageAttempt = (params) => this._makeRequest('v1/{+name}:accessStageAttempt', 'GET', params);

    /**
     * Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {boolean} params.sortRuntime - Optional. Sort the tasks by runtime.
     * @param {integer} params.stageAttemptId - Optional. Stage Attempt ID
     * @param {string} params.stageId - Optional. Stage ID
     * @param {string} params.taskStatus - Optional. List only tasks in the state.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.searchStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:searchStageAttemptTasks', 'GET', params);

    /**
     * Obtain data corresponding to executors for a Spark Application.
     * @param {string} params.executorStatus - Optional. Filter to select whether active/ dead or all executors should be selected.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplicationExecutors call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.searchExecutors = (params) => this._makeRequest('v1/{+name}:searchExecutors', 'GET', params);

    /**
     * Obtain executor summary with respect to a spark stage attempt.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {integer} params.pageSize - Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplicationExecutorStageSummary call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {integer} params.stageAttemptId - Required. Stage Attempt ID
     * @param {string} params.stageId - Required. Stage ID
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.searchExecutorStageSummary = (params) => this._makeRequest('v1/{+name}:searchExecutorStageSummary', 'GET', params);

    /**
     * Obtain data corresponding to SQL Queries for a Spark Application.
     * @param {boolean} params.details - Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.operationIds - Optional. List of Spark Connect operation IDs to filter by if provided.
     * @param {integer} params.pageSize - Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {boolean} params.planDescription - Optional. Enables/ disables physical plan description on demand
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.searchSqlQueries = (params) => this._makeRequest('v1/{+name}:searchSqlQueries', 'GET', params);

    /**
     * Obtain data corresponding to a particular SQL Query for a Spark Application.
     * @param {boolean} params.details - Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     * @param {string} params.executionId - Required. Execution ID
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {boolean} params.planDescription - Optional. Enables/ disables physical plan description on demand
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.accessSqlQuery = (params) => this._makeRequest('v1/{+name}:accessSqlQuery', 'GET', params);

    /**
     * Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.
     * @param {string} params.executionId - Required. Execution ID
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.accessSqlPlan = (params) => this._makeRequest('v1/{+name}:accessSqlPlan', 'GET', params);

    /**
     * Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {string} params.stageId - Required. Stage ID
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.accessStageRddGraph = (params) => this._makeRequest('v1/{+name}:accessStageRddGraph', 'GET', params);

    /**
     * Obtain environment details for a Spark Application
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.accessEnvironmentInfo = (params) => this._makeRequest('v1/{+name}:accessEnvironmentInfo', 'GET', params);

    /**
     * Obtain summary of Jobs for a Spark Application
     * @param {string} params.jobIds - Optional. List of Job IDs to filter by if provided.
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.summarizeJobs = (params) => this._makeRequest('v1/{+name}:summarizeJobs', 'GET', params);

    /**
     * Obtain summary of Stages for a Spark Application
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {string} params.stageIds - Optional. List of Stage IDs to filter by if provided.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.summarizeStages = (params) => this._makeRequest('v1/{+name}:summarizeStages', 'GET', params);

    /**
     * Obtain summary of Tasks for a Spark Application Stage Attempt
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @param {integer} params.stageAttemptId - Required. Stage Attempt ID
     * @param {string} params.stageId - Required. Stage ID
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.summarizeStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:summarizeStageAttemptTasks', 'GET', params);

    /**
     * Obtain summary of Executor Summary for a Spark Application
     * @param {string} params.name - (Required) Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID"
     * @param {string} params.parent - Required. Parent (Session) resource reference.
     * @return {object} The API response object.
     */
    this.projects.locations.sessions.sparkApplications.summarizeExecutors = (params) => this._makeRequest('v1/{+name}:summarizeExecutors', 'GET', params);

    this.projects.locations.sessionTemplates = {};

    /**
     * Create a session template synchronously.
     * @param {string} params.parent - (Required) Required. The parent resource where this session template will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sessionTemplates.create = (params) => this._makeRequest('v1/{+parent}/sessionTemplates', 'POST', params);

    /**
     * Updates the session template synchronously.
     * @param {string} params.name - (Required) Required. The resource name of the session template.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sessionTemplates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the resource representation for a session template.
     * @param {string} params.name - (Required) Required. The name of the session template to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.sessionTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists session templates.
     * @param {string} params.filter - Optional. A filter for the session templates to return in the response. Filters are case sensitive and have the following syntax:field = value AND field = value ...
     * @param {integer} params.pageSize - Optional. The maximum number of sessions to return in each response. The service may return fewer than this value.
     * @param {string} params.pageToken - Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent that owns this collection of session templates.
     * @return {object} The API response object.
     */
    this.projects.locations.sessionTemplates.list = (params) => this._makeRequest('v1/{+parent}/sessionTemplates', 'GET', params);

    /**
     * Deletes a session template.
     * @param {string} params.name - (Required) Required. The name of the session template resource to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.sessionTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workflowTemplates = {};

    /**
     * Creates new workflow template.
     * @param {string} params.parent - (Required) Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.create = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'POST', params);

    /**
     * Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
     * @param {string} params.name - (Required) Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer} params.version - Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
     * @param {string} params.name - (Required) Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.instantiate = (params) => this._makeRequest('v1/{+name}:instantiate', 'POST', params);

    /**
     * Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
     * @param {string} params.parent - (Required) Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @param {string} params.requestId - Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.instantiateInline = (params) => this._makeRequest('v1/{+parent}/workflowTemplates:instantiateInline', 'POST', params);

    /**
     * Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
     * @param {string} params.name - (Required) Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Lists workflows that match the specified filter in the request.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return in each response.
     * @param {string} params.pageToken - Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent - (Required) Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.list = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'GET', params);

    /**
     * Deletes a workflow template. It does not cancel in-progress workflows.
     * @param {string} params.name - (Required) Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer} params.version - Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflowTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
