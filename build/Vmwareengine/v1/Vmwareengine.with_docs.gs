
/**
 * Google Apps Script client library for the VMware Engine API
 * Documentation URL: https://cloud.google.com/solutions/vmware-as-a-service
 * @class
 */
class Vmwareengine {
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
    this._rootUrl = 'https://vmwareengine.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets all the principals having bind permission on the intranet VPC associated with the consumer project granted by the Grant API. DnsBindPermission is a global resource and location can only be global.
     * @param {string} params.name - (Required) Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
     * @return {object} The API response object.
     */
    this.projects.locations.getDnsBindPermission = (params) => this._makeRequest('v1/{+name}', 'GET', params);

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

    this.projects.locations.privateClouds = {};

    /**
     * Lists `PrivateCloud` resources in a given project and location.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of private clouds, you can exclude the ones named `example-pc` by specifying `name != "example-pc"`. You can also filter nested fields. For example, you could specify `networkConfig.managementCidr = "192.168.0.0/24"` to include private clouds only if they have a matching address in their network configuration. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-pc") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "private-cloud-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "private-cloud-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of private clouds to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListPrivateClouds` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateClouds` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to be queried for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.list = (params) => this._makeRequest('v1/{+parent}/privateClouds', 'GET', params);

    /**
     * Retrieves a `PrivateCloud` resource by its resource name.
     * @param {string} params.name - (Required) Required. The resource name of the private cloud to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `PrivateCloud` resource in a given project and location. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. Creating a private cloud also creates a [management cluster](https://cloud.google.com/vmware-engine/docs/concepts-vmware-components) for that private cloud.
     * @param {string} params.parent - (Required) Required. The resource name of the location to create the new private cloud in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
     * @param {string} params.privateCloudId - Required. The user-provided identifier of the private cloud to be created. This identifier must be unique among each `PrivateCloud` within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.requestId - Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. True if you want the request to be validated and not executed; false otherwise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.create = (params) => this._makeRequest('v1/{+parent}/privateClouds', 'POST', params);

    /**
     * Modifies a `PrivateCloud` resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {string} params.requestId - Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `PrivateCloud` resource by the update. The fields specified in `updateMask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Schedules a `PrivateCloud` resource for deletion. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `expireTime` set to the time when deletion is final and can no longer be reversed. The delete operation is marked as done as soon as the `PrivateCloud` is successfully scheduled for deletion (this also applies when `delayHours` is set to zero), and the operation is not kept in pending state until `PrivateCloud` is purged. `PrivateCloud` can be restored using `UndeletePrivateCloud` method before the `expireTime` elapses. When `expireTime` is reached, deletion is final and all private cloud resources are irreversibly removed and billing stops. During the final removal process, `PrivateCloud.state` is set to `PURGING`. `PrivateCloud` can be polled using standard `GET` method for the whole period of deletion and purging. It will not be returned only when it is completely purged.
     * @param {integer} params.delayHours - Optional. Time delay of the deletion specified in hours. The default value is `3`. Specifying a non-zero value for this field changes the value of `PrivateCloud.state` to `DELETED` and sets `expire_time` to the planned deletion time. Deletion can be cancelled before `expire_time` elapses using VmwareEngine.UndeletePrivateCloud. Specifying a value of `0` for this field instead begins the deletion process and ceases billing immediately. During the final deletion process, the value of `PrivateCloud.state` becomes `PURGING`.
     * @param {boolean} params.force - Optional. If set to true, cascade delete is enabled and all children of this private cloud resource are also deleted. When this flag is set to false, the private cloud will not be deleted if there are any children other than the management cluster. The management cluster is always deleted.
     * @param {string} params.name - (Required) Required. The resource name of the private cloud to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {string} params.requestId - Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Restores a private cloud that was previously scheduled for deletion by `DeletePrivateCloud`. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.
     * @param {string} params.name - (Required) Required. The resource name of the private cloud scheduled for deletion. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    /**
     * Gets details of credentials for NSX appliance.
     * @param {string} params.privateCloud - (Required) Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.showNsxCredentials = (params) => this._makeRequest('v1/{+privateCloud}:showNsxCredentials', 'GET', params);

    /**
     * Gets details of credentials for Vcenter appliance.
     * @param {string} params.privateCloud - (Required) Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {string} params.username - Optional. The username of the user to be queried for credentials. The default value of this field is CloudOwner@gve.local. The provided value must be one of the following: CloudOwner@gve.local, solution-user-01@gve.local, solution-user-02@gve.local, solution-user-03@gve.local, solution-user-04@gve.local, solution-user-05@gve.local, zertoadmin@gve.local.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.showVcenterCredentials = (params) => this._makeRequest('v1/{+privateCloud}:showVcenterCredentials', 'GET', params);

    /**
     * Resets credentials of the NSX appliance.
     * @param {string} params.privateCloud - (Required) Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.resetNsxCredentials = (params) => this._makeRequest('v1/{+privateCloud}:resetNsxCredentials', 'POST', params);

    /**
     * Resets credentials of the Vcenter appliance.
     * @param {string} params.privateCloud - (Required) Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.resetVcenterCredentials = (params) => this._makeRequest('v1/{+privateCloud}:resetVcenterCredentials', 'POST', params);

    /**
     * Gets details of the `DnsForwarding` config.
     * @param {string} params.name - (Required) Required. The resource name of a `DnsForwarding` to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.getDnsForwarding = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of the `DnsForwarding` config, like associated domains. Only fields specified in `update_mask` are applied.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `DnsForwarding` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.updateDnsForwarding = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.privateClouds.clusters = {};

    /**
     * Lists `Cluster` resources in a given private cloud.
     * @param {string} params.filter - To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-cluster") (nodeCount = "3") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-cluster-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-cluster-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of clusters to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to query for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.list = (params) => this._makeRequest('v1/{+parent}/clusters', 'GET', params);

    /**
     * Retrieves a `Cluster` resource by its resource name.
     * @param {string} params.name - (Required) Required. The cluster resource name to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new cluster in a given private cloud. Creating a new cluster provides additional nodes for use in the parent private cloud and requires sufficient [node quota](https://cloud.google.com/vmware-engine/quotas).
     * @param {string} params.clusterId - Required. The user-provided identifier of the new `Cluster`. This identifier must be unique among clusters within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to create a new cluster in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {string} params.requestId - Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. True if you want the request to be validated and not executed; false otherwise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.create = (params) => this._makeRequest('v1/{+parent}/clusters', 'POST', params);

    /**
     * Modifies a `Cluster` resource. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of this cluster. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     * @param {string} params.requestId - Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Cluster` resource by the update. The fields specified in the `updateMask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. True if you want the request to be validated and not executed; false otherwise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a `Cluster` resource. To avoid unintended data loss, migrate or gracefully shut down any workloads running on the cluster before deletion. You cannot delete the management cluster of a private cloud using this method.
     * @param {string} params.name - (Required) Required. The resource name of the cluster to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     * @param {string} params.requestId - Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.privateClouds.clusters.nodes = {};

    /**
     * Lists nodes in a given cluster.
     * @param {integer} params.pageSize - The maximum number of nodes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListNodes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNodes` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the cluster to be queried for nodes. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.nodes.list = (params) => this._makeRequest('v1/{+parent}/nodes', 'GET', params);

    /**
     * Gets details of a single node.
     * @param {string} params.name - (Required) Required. The resource name of the node to retrieve. For example: `projects/{project}/locations/{location}/privateClouds/{private_cloud}/clusters/{cluster}/nodes/{node}`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.clusters.nodes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.privateClouds.externalAddresses = {};

    /**
     * Lists external IP addresses assigned to VMware workload VMs in a given private cloud.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of IP addresses, you can exclude the ones named `example-ip` by specifying `name != "example-ip"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-ip") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-ip-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-ip-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of external IP addresses to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListExternalAddresses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExternalAddresses` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to be queried for external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.externalAddresses.list = (params) => this._makeRequest('v1/{+parent}/externalAddresses', 'GET', params);

    /**
     * Gets details of a single external IP address.
     * @param {string} params.name - (Required) Required. The resource name of the external IP address to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.externalAddresses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `ExternalAddress` resource in a given private cloud. The network policy that corresponds to the private cloud must have the external IP address network service enabled (`NetworkPolicy.external_ip`).
     * @param {string} params.externalAddressId - Required. The user-provided identifier of the `ExternalAddress` to be created. This identifier must be unique among `ExternalAddress` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to create a new external IP address in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.externalAddresses.create = (params) => this._makeRequest('v1/{+parent}/externalAddresses', 'POST', params);

    /**
     * Updates the parameters of a single external IP address. Only fields specified in `update_mask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of this external IP address. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `ExternalAddress` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.externalAddresses.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single external IP address. When you delete an external IP address, connectivity between the external IP address and the corresponding internal IP address is lost.
     * @param {string} params.name - (Required) Required. The resource name of the external IP address to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.externalAddresses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.privateClouds.subnets = {};

    /**
     * Lists subnets in a given private cloud.
     * @param {integer} params.pageSize - The maximum number of subnets to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListSubnetsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubnetsRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to be queried for subnets. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.subnets.list = (params) => this._makeRequest('v1/{+parent}/subnets', 'GET', params);

    /**
     * Gets details of a single subnet.
     * @param {string} params.name - (Required) Required. The resource name of the subnet to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.subnets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of a single subnet. Only fields specified in `update_mask` are applied. *Note*: This API is synchronous and always returns a successful `google.longrunning.Operation` (LRO). The returned LRO will only have `done` and `response` fields.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of this subnet. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet`
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Subnet` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.subnets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.privateClouds.loggingServers = {};

    /**
     * Lists logging servers configured for a given private cloud.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of logging servers, you can exclude the ones named `example-server` by specifying `name != "example-server"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-server") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-server-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-server-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of logging servers to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListLoggingServersRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLoggingServersRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to be queried for logging servers. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.loggingServers.list = (params) => this._makeRequest('v1/{+parent}/loggingServers', 'GET', params);

    /**
     * Gets details of a logging server.
     * @param {string} params.name - (Required) Required. The resource name of the Logging Server to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.loggingServers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Create a new logging server for a given private cloud.
     * @param {string} params.loggingServerId - Required. The user-provided identifier of the `LoggingServer` to be created. This identifier must be unique among `LoggingServer` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to create a new Logging Server in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.loggingServers.create = (params) => this._makeRequest('v1/{+parent}/loggingServers', 'POST', params);

    /**
     * Updates the parameters of a single logging server. Only fields specified in `update_mask` are applied.
     * @param {string} params.name - (Required) Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `LoggingServer` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.loggingServers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single logging server.
     * @param {string} params.name - (Required) Required. The resource name of the logging server to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.loggingServers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.privateClouds.hcxActivationKeys = {};

    /**
     * Creates a new HCX activation key in a given private cloud.
     * @param {string} params.hcxActivationKeyId - Required. The user-provided identifier of the `HcxActivationKey` to be created. This identifier must be unique among `HcxActivationKey` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to create the key for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.hcxActivationKeys.create = (params) => this._makeRequest('v1/{+parent}/hcxActivationKeys', 'POST', params);

    /**
     * Lists `HcxActivationKey` resources in a given private cloud.
     * @param {integer} params.pageSize - The maximum number of HCX activation keys to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListHcxActivationKeys` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListHcxActivationKeys` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to be queried for HCX activation keys. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.hcxActivationKeys.list = (params) => this._makeRequest('v1/{+parent}/hcxActivationKeys', 'GET', params);

    /**
     * Retrieves a `HcxActivationKey` resource by its resource name.
     * @param {string} params.name - (Required) Required. The resource name of the HCX activation key to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud/hcxActivationKeys/my-key`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.hcxActivationKeys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.hcxActivationKeys.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.hcxActivationKeys.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.hcxActivationKeys.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.privateClouds.managementDnsZoneBindings = {};

    /**
     * Lists Consumer VPCs bound to Management DNS Zone of a given private cloud.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of Management DNS Zone Bindings, you can exclude the ones named `example-management-dns-zone-binding` by specifying `name != "example-management-dns-zone-binding"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-management-dns-zone-binding") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-management-dns-zone-binding-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-management-dns-zone-binding-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of management DNS zone bindings to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListManagementDnsZoneBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListManagementDnsZoneBindings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to be queried for management DNS zone bindings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.managementDnsZoneBindings.list = (params) => this._makeRequest('v1/{+parent}/managementDnsZoneBindings', 'GET', params);

    /**
     * Retrieves a 'ManagementDnsZoneBinding' resource by its resource name.
     * @param {string} params.name - (Required) Required. The resource name of the management DNS zone binding to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.managementDnsZoneBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `ManagementDnsZoneBinding` resource in a private cloud. This RPC creates the DNS binding and the resource that represents the DNS binding of the consumer VPC network to the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
     * @param {string} params.managementDnsZoneBindingId - Required. The user-provided identifier of the `ManagementDnsZoneBinding` resource to be created. This identifier must be unique among `ManagementDnsZoneBinding` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the private cloud to create a new management DNS zone binding for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.managementDnsZoneBindings.create = (params) => this._makeRequest('v1/{+parent}/managementDnsZoneBindings', 'POST', params);

    /**
     * Updates a `ManagementDnsZoneBinding` resource. Only fields specified in `update_mask` are applied.
     * @param {string} params.name - (Required) Output only. The resource name of this binding. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `ManagementDnsZoneBinding` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.managementDnsZoneBindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a `ManagementDnsZoneBinding` resource. When a management DNS zone binding is deleted, the corresponding consumer VPC network is no longer bound to the management DNS zone.
     * @param {string} params.name - (Required) Required. The resource name of the management DNS zone binding to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.managementDnsZoneBindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retries to create a `ManagementDnsZoneBinding` resource that is in failed state.
     * @param {string} params.name - (Required) Required. The resource name of the management DNS zone binding to repair. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.managementDnsZoneBindings.repair = (params) => this._makeRequest('v1/{+name}:repair', 'POST', params);

    this.projects.locations.privateClouds.upgrades = {};

    /**
     * Lists past, ongoing and upcoming `Upgrades` for the given private cloud.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of upgrades, you can exclude the ones named `example-upgrade1` by specifying `name != "example-upgrade1"`. You can also filter nested fields. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-upgrade") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "upgrade-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "upgrade-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of `Upgrades` to return in one page. The service may return fewer resources than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListUpgrades` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUpgrades` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Query a list of `Upgrades` for the given private cloud resource name. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1-a/privateClouds/my-cloud`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.upgrades.list = (params) => this._makeRequest('v1/{+parent}/upgrades', 'GET', params);

    /**
     * Retrieves a private cloud `Upgrade` resource by its resource name.
     * @param {string} params.name - (Required) Required. The name of the `Upgrade` resource to be retrieved. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1-a/privateClouds/my-cloud/upgrades/my-upgrade`
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.upgrades.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update the private cloud `Upgrade` resource. Only `schedule` field can updated. The schedule can only be updated when the upgrade has not started and schedule edit window is open. Only fields specified in `update_mask` are considered.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the private cloud `Upgrade`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1-a/privateClouds/my-cloud/upgrades/my-upgrade`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Upgrade` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateClouds.upgrades.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.networkPolicies = {};

    /**
     * Lists external IP addresses assigned to VMware workload VMs within the scope of the given network policy.
     * @param {string} params.networkPolicy - (Required) Required. The resource name of the network policy to query for assigned external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
     * @param {integer} params.pageSize - The maximum number of external IP addresses to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `FetchNetworkPolicyExternalAddresses` call. Provide this to retrieve the subsequent page. When paginating, all parameters provided to `FetchNetworkPolicyExternalAddresses`, except for `page_size` and `page_token`, must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.fetchExternalAddresses = (params) => this._makeRequest('v1/{+networkPolicy}:fetchExternalAddresses', 'GET', params);

    /**
     * Retrieves a `NetworkPolicy` resource by its resource name.
     * @param {string} params.name - (Required) Required. The resource name of the network policy to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists `NetworkPolicy` resources in a specified project and location.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of network policies, you can exclude the ones named `example-policy` by specifying `name != "example-policy"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-policy") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-policy-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-policy-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of network policies to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListNetworkPolicies` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPolicies` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the location (region) to query for network policies. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.list = (params) => this._makeRequest('v1/{+parent}/networkPolicies', 'GET', params);

    /**
     * Creates a new network policy in a given VMware Engine network of a project and location (region). A new network policy cannot be created if another network policy already exists in the same scope.
     * @param {string} params.networkPolicyId - Required. The user-provided identifier of the network policy to be created. This identifier must be unique within parent `projects/{my-project}/locations/{us-central1}/networkPolicies` and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the location (region) to create the new network policy in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.create = (params) => this._makeRequest('v1/{+parent}/networkPolicies', 'POST', params);

    /**
     * Modifies a `NetworkPolicy` resource. Only the following fields can be updated: `internet_access`, `external_ip`, `edge_services_cidr`. Only fields specified in `updateMask` are applied. When updating a network policy, the external IP network service can only be disabled if there are no external IP addresses present in the scope of the policy. Also, a `NetworkService` cannot be updated when `NetworkService.state` is set to `RECONCILING`. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `NetworkPolicy` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a `NetworkPolicy` resource. A network policy cannot be deleted when `NetworkService.state` is set to `RECONCILING` for either its external IP or internet access service.
     * @param {string} params.name - (Required) Required. The resource name of the network policy to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.networkPolicies.externalAccessRules = {};

    /**
     * Lists `ExternalAccessRule` resources in the specified network policy.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of external access rules, you can exclude the ones named `example-rule` by specifying `name != "example-rule"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-rule") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-rule-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-rule-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of external access rules to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListExternalAccessRulesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExternalAccessRulesRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the network policy to query for external access firewall rules. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.externalAccessRules.list = (params) => this._makeRequest('v1/{+parent}/externalAccessRules', 'GET', params);

    /**
     * Gets details of a single external access rule.
     * @param {string} params.name - (Required) Required. The resource name of the external access firewall rule to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.externalAccessRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new external access rule in a given network policy.
     * @param {string} params.externalAccessRuleId - Required. The user-provided identifier of the `ExternalAccessRule` to be created. This identifier must be unique among `ExternalAccessRule` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the network policy to create a new external access firewall rule in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.externalAccessRules.create = (params) => this._makeRequest('v1/{+parent}/externalAccessRules', 'POST', params);

    /**
     * Updates the parameters of a single external access rule. Only fields specified in `update_mask` are applied.
     * @param {string} params.name - (Required) Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `ExternalAccessRule` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.externalAccessRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single external access rule.
     * @param {string} params.name - (Required) Required. The resource name of the external access firewall rule to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.networkPolicies.externalAccessRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.nodeTypes = {};

    /**
     * Lists node types
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of node types, you can exclude the ones named `standard-72` by specifying `name != "standard-72"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "standard-72") (virtual_cpu_count > 2) ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "standard-96") AND (virtual_cpu_count > 2) OR (name = "standard-72") ```
     * @param {integer} params.pageSize - The maximum number of node types to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListNodeTypes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNodeTypes` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the location to be queried for node types. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
     * @return {object} The API response object.
     */
    this.projects.locations.nodeTypes.list = (params) => this._makeRequest('v1/{+parent}/nodeTypes', 'GET', params);

    /**
     * Gets details of a single `NodeType`.
     * @param {string} params.name - (Required) Required. The resource name of the node type to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-proj/locations/us-central1-a/nodeTypes/standard-72`
     * @return {object} The API response object.
     */
    this.projects.locations.nodeTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.networkPeerings = {};

    /**
     * Retrieves a `NetworkPeering` resource by its resource name. The resource contains details of the network peering, such as peered networks, import and export custom route configurations, and peering state. NetworkPeering is a global resource and location can only be global.
     * @param {string} params.name - (Required) Required. The resource name of the network peering to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     * @return {object} The API response object.
     */
    this.projects.locations.networkPeerings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists `NetworkPeering` resources in a given project. NetworkPeering is a global resource and location can only be global.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of network peerings, you can exclude the ones named `example-peering` by specifying `name != "example-peering"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-peering") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-peering-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-peering-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of network peerings to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListNetworkPeerings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPeerings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the location (global) to query for network peerings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     * @return {object} The API response object.
     */
    this.projects.locations.networkPeerings.list = (params) => this._makeRequest('v1/{+parent}/networkPeerings', 'GET', params);

    /**
     * Creates a new network peering between the peer network and VMware Engine network provided in a `NetworkPeering` resource. NetworkPeering is a global resource and location can only be global.
     * @param {string} params.networkPeeringId - Required. The user-provided identifier of the new `NetworkPeering`. This identifier must be unique among `NetworkPeering` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.parent - (Required) Required. The resource name of the location to create the new network peering in. This value is always `global`, because `NetworkPeering` is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networkPeerings.create = (params) => this._makeRequest('v1/{+parent}/networkPeerings', 'POST', params);

    /**
     * Deletes a `NetworkPeering` resource. When a network peering is deleted for a VMware Engine network, the peer network becomes inaccessible to that VMware Engine network. NetworkPeering is a global resource and location can only be global.
     * @param {string} params.name - (Required) Required. The resource name of the network peering to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.networkPeerings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Modifies a `NetworkPeering` resource. Only the `description` field can be updated. Only fields specified in `updateMask` are applied. NetworkPeering is a global resource and location can only be global.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the network peering. NetworkPeering is a global resource and location can only be global. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `NetworkPeering` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networkPeerings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.networkPeerings.peeringRoutes = {};

    /**
     * Lists the network peering routes exchanged over a peering connection. NetworkPeering is a global resource and location can only be global.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. Currently, only filtering on the `direction` field is supported. To return routes imported from the peer network, provide "direction=INCOMING". To return routes exported from the VMware Engine network, provide "direction=OUTGOING". Other filter expressions return an error.
     * @param {integer} params.pageSize - The maximum number of peering routes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListPeeringRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPeeringRoutes` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the network peering to retrieve peering routes from. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     * @return {object} The API response object.
     */
    this.projects.locations.networkPeerings.peeringRoutes.list = (params) => this._makeRequest('v1/{+parent}/peeringRoutes', 'GET', params);

    this.projects.locations.vmwareEngineNetworks = {};

    /**
     * Creates a new VMware Engine network that can be used by a private cloud.
     * @param {string} params.parent - (Required) Required. The resource name of the location to create the new VMware Engine network in. A VMware Engine network of type `LEGACY` is a regional resource, and a VMware Engine network of type `STANDARD` is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.vmwareEngineNetworkId - Required. The user-provided identifier of the new VMware Engine network. This identifier must be unique among VMware Engine network resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * For networks of type LEGACY, adheres to the format: `{region-id}-default`. Replace `{region-id}` with the region where you want to create the VMware Engine network. For example, "us-central1-default". * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareEngineNetworks.create = (params) => this._makeRequest('v1/{+parent}/vmwareEngineNetworks', 'POST', params);

    /**
     * Modifies a VMware Engine network resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the VMware Engine network. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the VMware Engine network resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. Only the following fields can be updated: `description`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareEngineNetworks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a `VmwareEngineNetwork` resource. You can only delete a VMware Engine network after all resources that refer to it are deleted. For example, a private cloud, a network peering, and a network policy can all refer to the same VMware Engine network.
     * @param {string} params.etag - Optional. Checksum used to ensure that the user-provided value is up to date before the server processes the request. The server compares provided checksum with the current checksum of the resource. If the user-provided value is out of date, this request returns an `ABORTED` error.
     * @param {string} params.name - (Required) Required. The resource name of the VMware Engine network to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareEngineNetworks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieves a `VmwareEngineNetwork` resource by its resource name. The resource contains details of the VMware Engine network, such as its VMware Engine network type, peered networks in a service project, and state (for example, `CREATING`, `ACTIVE`, `DELETING`).
     * @param {string} params.name - (Required) Required. The resource name of the VMware Engine network to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareEngineNetworks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists `VmwareEngineNetwork` resources in a given project and location.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of network peerings, you can exclude the ones named `example-network` by specifying `name != "example-network"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-network") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-network-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-network-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of results to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListVmwareEngineNetworks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVmwareEngineNetworks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the location to query for VMware Engine networks. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     * @return {object} The API response object.
     */
    this.projects.locations.vmwareEngineNetworks.list = (params) => this._makeRequest('v1/{+parent}/vmwareEngineNetworks', 'GET', params);

    this.projects.locations.privateConnections = {};

    /**
     * Creates a new private connection that can be used for accessing private Clouds.
     * @param {string} params.parent - (Required) Required. The resource name of the location to create the new private connection in. Private connection is a regional resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     * @param {string} params.privateConnectionId - Required. The user-provided identifier of the new private connection. This identifier must be unique among private connection resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.create = (params) => this._makeRequest('v1/{+parent}/privateConnections', 'POST', params);

    /**
     * Retrieves a `PrivateConnection` resource by its resource name. The resource contains details of the private connection, such as connected network, routing mode and state.
     * @param {string} params.name - (Required) Required. The resource name of the private connection to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists `PrivateConnection` resources in a given project and location.
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of private connections, you can exclude the ones named `example-connection` by specifying `name != "example-connection"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-connection") (createTime > "2022-09-22T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-connection-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-connection-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of private connections to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the location to query for private connections. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.list = (params) => this._makeRequest('v1/{+parent}/privateConnections', 'GET', params);

    /**
     * Modifies a `PrivateConnection` resource. Only `description` and `routing_mode` fields can be updated. Only fields specified in `updateMask` are applied.
     * @param {string} params.name - (Required) Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `PrivateConnection` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a `PrivateConnection` resource. When a private connection is deleted for a VMware Engine network, the connected network becomes inaccessible to that VMware Engine network.
     * @param {string} params.name - (Required) Required. The resource name of the private connection to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.privateConnections.peeringRoutes = {};

    /**
     * Lists the private connection routes exchanged over a peering connection.
     * @param {integer} params.pageSize - The maximum number of peering routes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListPrivateConnectionPeeringRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnectionPeeringRoutes` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the private connection to retrieve peering routes from. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1/privateConnections/my-connection`
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.peeringRoutes.list = (params) => this._makeRequest('v1/{+parent}/peeringRoutes', 'GET', params);

    this.projects.locations.dnsBindPermission = {};

    /**
     * Grants the bind permission to the customer provided principal(user / service account) to bind their DNS zone with the intranet VPC associated with the project. DnsBindPermission is a global resource and location can only be global.
     * @param {string} params.name - (Required) Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dnsBindPermission.grant = (params) => this._makeRequest('v1/{+name}:grant', 'POST', params);

    /**
     * Revokes the bind permission from the customer provided principal(user / service account) on the intranet VPC associated with the consumer project. DnsBindPermission is a global resource and location can only be global.
     * @param {string} params.name - (Required) Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dnsBindPermission.revoke = (params) => this._makeRequest('v1/{+name}:revoke', 'POST', params);

    this.projects.locations.announcements = {};

    /**
     * Lists `Announcements` for a given region and project
     * @param {string} params.filter - A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of announcement runs, you can exclude the ones named `example-announcement` by specifying `name != "example-announcement"`. You can also filter nested fields. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-announcement") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "announcement-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "announcement-2") ```
     * @param {string} params.orderBy - Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     * @param {integer} params.pageSize - The maximum number of announcements to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListAnnouncements` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAnnouncements` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the location to be queried for announcements. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1-a`
     * @return {object} The API response object.
     */
    this.projects.locations.announcements.list = (params) => this._makeRequest('v1/{+parent}/announcements', 'GET', params);

    /**
     * Retrieves a `Announcement` by its resource name.
     * @param {string} params.name - (Required) Required. The resource name of the announcement to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1-a/announcements/announcement-uuid`
     * @return {object} The API response object.
     */
    this.projects.locations.announcements.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
