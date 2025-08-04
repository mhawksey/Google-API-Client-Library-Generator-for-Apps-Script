
/**
 * Google Apps Script client library for the Managed Service for Microsoft Active Directory API
 * Documentation URL: https://cloud.google.com/managed-microsoft-ad/
 * @class
 */
class Managedidentities {
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
    this._rootUrl = 'https://managedidentities.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1alpha1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.projects.locations.global = {};

    this.projects.locations.global.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.global.operations.list = (params) => this._makeRequest('v1alpha1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.global.operations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.global.operations.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.operations.cancel = (params) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', params);

    this.projects.locations.global.domains = {};

    /**
     * Creates a Microsoft AD Domain in a given project. Operation
     * @param {string} params.domainName - The fully qualified domain name. e.g. mydomain.myorganization.com, with the following restrictions: * Must contain only lowercase letters, numbers, periods and hyphens. * Must start with a letter. * Must contain between 2-64 characters. * Must end with a number or a letter. * Must not start with period. * Must be unique within the project. * First segment length (mydomain form example above) shouldn't exceed 15 chars. * The last segment cannot be fully numeric.
     * @param {string} params.parent - (Required) Resource project name and location using the form: `projects/{project_id}/locations/global`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.create = (params) => this._makeRequest('v1alpha1/{+parent}/domains', 'POST', params);

    /**
     * Resets managed identities admin password identified by managed_identities_admin_name
     * @param {string} params.name - (Required) The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.resetAdminPassword = (params) => this._makeRequest('v1alpha1/{+name}:resetAdminPassword', 'POST', params);

    /**
     * Lists Domains in a given project.
     * @param {string} params.filter - Optional. Filter specifying constraints of a list operation. For example, `Domain.fqdn="mydomain.myorginization"`.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer} params.pageSize - If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.list = (params) => this._makeRequest('v1alpha1/{+parent}/domains', 'GET', params);

    /**
     * Gets details of a single Domain.
     * @param {string} params.name - (Required) Domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Updates the metadata and configuration of a specified domain. Operation
     * @param {string} params.name - (Required) Output only. Unique name of the domain in this scope including projects and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.
     * @param {string} params.updateMask - Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Domain: * `labels` * `locations` * `authorized_networks` * `audit_logs_enabled`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Deletes identified domain. Operation
     * @param {string} params.name - (Required) Domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Adds AD trust in a given domain. Operation
     * @param {string} params.name - (Required) The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.attachTrust = (params) => this._makeRequest('v1alpha1/{+name}:attachTrust', 'POST', params);

    /**
     * Updates the dns conditional forwarder. Operation
     * @param {string} params.name - (Required) The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.reconfigureTrust = (params) => this._makeRequest('v1alpha1/{+name}:reconfigureTrust', 'POST', params);

    /**
     * Removes identified trust. Operation
     * @param {string} params.name - (Required) The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.detachTrust = (params) => this._makeRequest('v1alpha1/{+name}:detachTrust', 'POST', params);

    /**
     * Validate the trust state Operation
     * @param {string} params.name - (Required) The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.validateTrust = (params) => this._makeRequest('v1alpha1/{+name}:validateTrust', 'POST', params);

    /**
     * RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
     * @param {string} params.name - (Required) Required. resource name for the domain to which the backup belongs
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.restore = (params) => this._makeRequest('v1alpha1/{+name}:restore', 'POST', params);

    /**
     * Gets the domain ldaps settings.
     * @param {string} params.name - (Required) Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.getLdapssettings = (params) => this._makeRequest('v1alpha1/{+name}/ldapssettings', 'GET', params);

    /**
     * Patches a single ldaps settings.
     * @param {string} params.name - (Required) The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.updateLdapssettings = (params) => this._makeRequest('v1alpha1/{+name}/ldapssettings', 'PATCH', params);

    /**
     * Extend Schema for Domain
     * @param {string} params.domain - (Required) Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.extendSchema = (params) => this._makeRequest('v1alpha1/{+domain}:extendSchema', 'POST', params);

    /**
     * Enable Domain Migration
     * @param {string} params.domain - (Required) Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.enableMigration = (params) => this._makeRequest('v1alpha1/{+domain}:enableMigration', 'POST', params);

    /**
     * Disable Domain Migration
     * @param {string} params.domain - (Required) Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.disableMigration = (params) => this._makeRequest('v1alpha1/{+domain}:disableMigration', 'POST', params);

    /**
     * AuditMigration API gets the current state of DomainMigration
     * @param {string} params.domain - (Required) Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.checkMigrationPermission = (params) => this._makeRequest('v1alpha1/{+domain}:checkMigrationPermission', 'POST', params);

    /**
     * DomainJoinMachine API joins a Compute Engine VM to the domain
     * @param {string} params.domain - (Required) Required. The domain resource name using the form: projects/{project_id}/locations/global/domains/{domain_name}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.domainJoinMachine = (params) => this._makeRequest('v1alpha1/{+domain}:domainJoinMachine', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.global.domains.sqlIntegrations = {};

    /**
     * Lists SQLIntegrations in a given domain.
     * @param {string} params.filter - Optional. Filter specifying constraints of a list operation. For example, `SqlIntegration.name="sql"`.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response'ANIZATIONs next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the SqlIntegrations using the form: `projects/{project_id}/locations/global/domains/*`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.sqlIntegrations.list = (params) => this._makeRequest('v1alpha1/{+parent}/sqlIntegrations', 'GET', params);

    /**
     * Gets details of a single sqlIntegration.
     * @param {string} params.name - (Required) Required. MangedOU resource name using the form: `projects/{project_id}/locations/global/domains/*\/sqlIntegrations/{name}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.sqlIntegrations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.projects.locations.global.domains.backups = {};

    /**
     * Creates a Backup for a domain.
     * @param {string} params.backupId - Required. Backup Id, unique name to identify the backups with the following restrictions: * Must be lowercase letters, numbers, and hyphens * Must start with a letter. * Must contain between 1-63 characters. * Must end with a number or a letter. * Must be unique within the domain.
     * @param {string} params.parent - (Required) Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.create = (params) => this._makeRequest('v1alpha1/{+parent}/backups', 'POST', params);

    /**
     * Lists Backup in a given project.
     * @param {string} params.filter - Optional. Filter specifying constraints of a list operation.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.list = (params) => this._makeRequest('v1alpha1/{+parent}/backups', 'GET', params);

    /**
     * Gets details of a single Backup.
     * @param {string} params.name - (Required) Required. The backup resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}/backups/{backup_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Updates the labels for specified Backup.
     * @param {string} params.name - (Required) Output only. The unique name of the Backup in the form of projects/{project_id}/locations/global/domains/{domain_name}/backups/{name}
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Backup: * `labels`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Deletes identified Backup.
     * @param {string} params.name - (Required) Required. The backup resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}/backups/{backup_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.domains.backups.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.global.peerings = {};

    /**
     * Creates a Peering for Managed AD instance.
     * @param {string} params.parent - (Required) Required. Resource project name and location using the form: `projects/{project_id}/locations/global`
     * @param {string} params.peeringId - Required. Peering Id, unique name to identify peering.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.create = (params) => this._makeRequest('v1alpha1/{+parent}/peerings', 'POST', params);

    /**
     * Lists Peerings in a given project.
     * @param {string} params.filter - Optional. Filter specifying constraints of a list operation. For example, `peering.authoized_network ="/projects/myprojectid"`.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.list = (params) => this._makeRequest('v1alpha1/{+parent}/peerings', 'GET', params);

    /**
     * Gets details of a single Peering.
     * @param {string} params.name - (Required) Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Updates the labels for specified Peering.
     * @param {string} params.name - (Required) Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Peering: * `labels`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Deletes identified Peering.
     * @param {string} params.name - (Required) Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.peerings.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);
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
