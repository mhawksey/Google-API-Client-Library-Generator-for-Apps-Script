
/**
 * Google Apps Script client library for the BigQuery Reservation API
 * Documentation URL: https://cloud.google.com/bigquery/
 * @class
 */
class Bigqueryreservation {
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
    this._rootUrl = 'https://bigqueryreservation.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*\/locations/*`, instead of `projects/*\/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.
     * @param {integer} params.pageSize - The maximum number of items to return per page.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.
     * @param {string} params.query - Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     * @return {object} The API response object.
     */
    this.projects.locations.searchAssignments = (params) => this._makeRequest('v1/{+parent}:searchAssignments', 'GET', params);

    /**
     * Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*\/locations/*`, instead of `projects/*\/locations/*reservations/*`.
     * @param {integer} params.pageSize - The maximum number of items to return per page.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name with location (project name could be the wildcard '-'), e.g.: `projects/-/locations/US`.
     * @param {string} params.query - Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     * @return {object} The API response object.
     */
    this.projects.locations.searchAllAssignments = (params) => this._makeRequest('v1/{+parent}:searchAllAssignments', 'GET', params);

    /**
     * Retrieves a BI reservation.
     * @param {string} params.name - (Required) Required. Name of the requested reservation, for example: `projects/{project_id}/locations/{location_id}/biReservation`
     * @return {object} The API response object.
     */
    this.projects.locations.getBiReservation = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a BI reservation. Only fields specified in the `field_mask` are updated. A singleton BI reservation always exists with default size 0. In order to reserve BI capacity it needs to be updated to an amount greater than 0. In order to release BI capacity reservation size must be set to 0.
     * @param {string} params.name - (Required) Identifier. The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/biReservation`.
     * @param {string} params.updateMask - A list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateBiReservation = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.reservations = {};

    /**
     * Creates a new reservation resource.
     * @param {string} params.parent - (Required) Required. Project, location. E.g., `projects/myproject/locations/US`
     * @param {string} params.reservationId - The reservation ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.create = (params) => this._makeRequest('v1/{+parent}/reservations', 'POST', params);

    /**
     * Lists all the reservations for the project in the specified location.
     * @param {integer} params.pageSize - The maximum number of items to return per page.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.list = (params) => this._makeRequest('v1/{+parent}/reservations', 'GET', params);

    /**
     * Returns information about the reservation.
     * @param {string} params.name - (Required) Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.
     * @param {string} params.name - (Required) Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates an existing reservation resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the reservation, e.g., `projects/*\/locations/*\/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Fail over a reservation to the secondary location. The operation should be done in the current secondary location, which will be promoted to the new primary location for the reservation. Attempting to failover a reservation in the current primary location will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @param {string} params.name - (Required) Required. Resource name of the reservation to failover. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.failoverReservation = (params) => this._makeRequest('v1/{+name}:failoverReservation', 'POST', params);

    /**
     * Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Reservations - ReservationAssignments To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.getIamPolicy` to get policies on reservations.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Reservations To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.setIamPolicy` to set policies on reservations.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Reservations No Google IAM permissions are required to call this method.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.reservations.assignments = {};

    /**
     * Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
     * @param {string} params.assignmentId - The optional assignment ID. Assignment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. Max length is 64 characters.
     * @param {string} params.parent - (Required) Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.create = (params) => this._makeRequest('v1/{+parent}/assignments', 'POST', params);

    /**
     * Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
     * @param {integer} params.pageSize - The maximum number of items to return per page.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-`
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.list = (params) => this._makeRequest('v1/{+parent}/assignments', 'GET', params);

    /**
     * Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
     * @param {string} params.name - (Required) Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
     * @param {string} params.name - (Required) Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    /**
     * Updates an existing assignment. Only the `priority` field can be updated.
     * @param {string} params.name - (Required) Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Reservations - ReservationAssignments To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.getIamPolicy` to get policies on reservations.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Reservations To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.setIamPolicy` to set policies on reservations.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Reservations No Google IAM permissions are required to call this method.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservations.assignments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.capacityCommitments = {};

    /**
     * Creates a new capacity commitment resource.
     * @param {string} params.capacityCommitmentId - The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged.
     * @param {boolean} params.enforceSingleAdminProjectPerOrg - If true, fail the request if another project in the organization has a capacity commitment.
     * @param {string} params.parent - (Required) Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.capacityCommitments.create = (params) => this._makeRequest('v1/{+parent}/capacityCommitments', 'POST', params);

    /**
     * Lists all the capacity commitments for the admin project.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     * @return {object} The API response object.
     */
    this.projects.locations.capacityCommitments.list = (params) => this._makeRequest('v1/{+parent}/capacityCommitments', 'GET', params);

    /**
     * Returns information about the capacity commitment.
     * @param {string} params.name - (Required) Required. Resource name of the capacity commitment to retrieve. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     * @return {object} The API response object.
     */
    this.projects.locations.capacityCommitments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a capacity commitment. Attempting to delete capacity commitment before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @param {boolean} params.force - Can be used to force delete commitments even if assignments exist. Deleting commitments with assignments may cause queries to fail if they no longer have access to slots.
     * @param {string} params.name - (Required) Required. Resource name of the capacity commitment to delete. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     * @return {object} The API response object.
     */
    this.projects.locations.capacityCommitments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates an existing capacity commitment. Only `plan` and `renewal_plan` fields can be updated. Plan can only be changed to a plan of a longer commitment period. Attempting to change to a plan with shorter commitment period will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @param {string} params.name - (Required) Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.capacityCommitments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
     * @param {string} params.name - (Required) Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.capacityCommitments.split = (params) => this._makeRequest('v1/{+name}:split', 'POST', params);

    /**
     * Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @param {string} params.parent - (Required) Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.capacityCommitments.merge = (params) => this._makeRequest('v1/{+parent}/capacityCommitments:merge', 'POST', params);

    this.projects.locations.reservationGroups = {};

    /**
     * Creates a new reservation group.
     * @param {string} params.parent - (Required) Required. Project, location. E.g., `projects/myproject/locations/US`
     * @param {string} params.reservationGroupId - Required. The reservation group ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reservationGroups.create = (params) => this._makeRequest('v1/{+parent}/reservationGroups', 'POST', params);

    /**
     * Returns information about the reservation group.
     * @param {string} params.name - (Required) Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod`
     * @return {object} The API response object.
     */
    this.projects.locations.reservationGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.
     * @param {string} params.name - (Required) Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod`
     * @return {object} The API response object.
     */
    this.projects.locations.reservationGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all the reservation groups for the project in the specified location.
     * @param {integer} params.pageSize - The maximum number of items to return per page.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
     * @return {object} The API response object.
     */
    this.projects.locations.reservationGroups.list = (params) => this._makeRequest('v1/{+parent}/reservationGroups', 'GET', params);
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
