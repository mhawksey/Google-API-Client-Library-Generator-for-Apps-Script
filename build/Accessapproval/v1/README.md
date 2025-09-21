# Access Approval API - Apps Script Client Library

Auto-generated client library for using the **Access Approval API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:02:23 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:02:23 GMT
- **Created:** Sun, 20 Jul 2025 16:10:32 GMT



---

## API Reference

### `projects`

#### `projects.getAccessApprovalSettings()`

Gets the Access Approval settings associated with a project, folder, or organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings" |

#### `projects.updateAccessApprovalSettings()`

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" |
| `params.updateMask` | `string` | No | The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.deleteAccessApprovalSettings()`

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the resource. Access Approval may remain active based on parent resource settings. To confirm the effective settings, call GetAccessApprovalSettings and verify effective setting is disabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the AccessApprovalSettings to delete. |

#### `projects.getServiceAccount()`

Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the AccessApprovalServiceAccount to retrieve. |

### `projects.approvalRequests`

#### `projects.approvalRequests.list()`

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}". |
| `params.filter` | `string` | No | A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests. |
| `params.pageSize` | `integer` | No | Requested page size. |
| `params.pageToken` | `string` | No | A token identifying the page of results to return. |

#### `projects.approvalRequests.get()`

Gets an approval request. Returns NOT_FOUND if the request does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}" |

#### `projects.approvalRequests.approve()`

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the approval request to approve. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.approvalRequests.dismiss()`

Dismisses a request. Returns the updated ApprovalRequest. NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the ApprovalRequest to dismiss. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.approvalRequests.invalidate()`

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This action revokes Google access based on this approval request. If the resource has other active approvals, access will remain granted. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the ApprovalRequest to invalidate. |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders`

#### `folders.getAccessApprovalSettings()`

Gets the Access Approval settings associated with a project, folder, or organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings" |

#### `folders.updateAccessApprovalSettings()`

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" |
| `params.updateMask` | `string` | No | The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.deleteAccessApprovalSettings()`

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the resource. Access Approval may remain active based on parent resource settings. To confirm the effective settings, call GetAccessApprovalSettings and verify effective setting is disabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the AccessApprovalSettings to delete. |

#### `folders.getServiceAccount()`

Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the AccessApprovalServiceAccount to retrieve. |

### `folders.approvalRequests`

#### `folders.approvalRequests.list()`

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}". |
| `params.filter` | `string` | No | A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests. |
| `params.pageSize` | `integer` | No | Requested page size. |
| `params.pageToken` | `string` | No | A token identifying the page of results to return. |

#### `folders.approvalRequests.get()`

Gets an approval request. Returns NOT_FOUND if the request does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}" |

#### `folders.approvalRequests.approve()`

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the approval request to approve. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.approvalRequests.dismiss()`

Dismisses a request. Returns the updated ApprovalRequest. NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the ApprovalRequest to dismiss. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.approvalRequests.invalidate()`

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This action revokes Google access based on this approval request. If the resource has other active approvals, access will remain granted. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the ApprovalRequest to invalidate. |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations`

#### `organizations.getAccessApprovalSettings()`

Gets the Access Approval settings associated with a project, folder, or organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings" |

#### `organizations.updateAccessApprovalSettings()`

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" |
| `params.updateMask` | `string` | No | The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.deleteAccessApprovalSettings()`

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the resource. Access Approval may remain active based on parent resource settings. To confirm the effective settings, call GetAccessApprovalSettings and verify effective setting is disabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the AccessApprovalSettings to delete. |

#### `organizations.getServiceAccount()`

Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the AccessApprovalServiceAccount to retrieve. |

### `organizations.approvalRequests`

#### `organizations.approvalRequests.list()`

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}". |
| `params.filter` | `string` | No | A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests. |
| `params.pageSize` | `integer` | No | Requested page size. |
| `params.pageToken` | `string` | No | A token identifying the page of results to return. |

#### `organizations.approvalRequests.get()`

Gets an approval request. Returns NOT_FOUND if the request does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}" |

#### `organizations.approvalRequests.approve()`

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the approval request to approve. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.approvalRequests.dismiss()`

Dismisses a request. Returns the updated ApprovalRequest. NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the ApprovalRequest to dismiss. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.approvalRequests.invalidate()`

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This action revokes Google access based on this approval request. If the resource has other active approvals, access will remain granted. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the ApprovalRequest to invalidate. |
| `params.requestBody` | `object` | Yes | The request body. |