# Binary Authorization API - Apps Script Client Library

Auto-generated client library for using the **Binary Authorization API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:23:46 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:54:41 GMT
- **Created:** Sun, 20 Jul 2025 16:14:36 GMT



---

## API Reference

### `projects`

#### `projects.getPolicy()`

A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. There is at most one policy per project. All image admission requests are permitted if a project has no policy. Gets the policy for this project. Returns a default policy if the project does not have one.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the policy to retrieve, in the format `projects/*/policy`. |

#### `projects.updatePolicy()`

Creates or updates a project's policy, and returns a copy of the new policy. A policy is always updated as a whole, to avoid race conditions with concurrent policy enforcement (or management!) requests. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name, in the format `projects/*/policy`. There is at most one policy per project. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.platforms`

### `projects.platforms.gke`

### `projects.platforms.gke.policies`

#### `projects.platforms.gke.policies.evaluate()`

Evaluates a Kubernetes object versus a GKE platform policy. Returns `NOT_FOUND` if the policy doesn't exist, `INVALID_ARGUMENT` if the policy or request is malformed and `PERMISSION_DENIED` if the client does not have sufficient permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the platform policy to evaluate in the format `projects/*/platforms/*/policies/*`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.platforms.policies`

#### `projects.platforms.policies.create()`

Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of this platform policy. |
| `params.policyId` | `string` | No | Required. The platform policy ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.platforms.policies.get()`

Gets a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the platform policy to retrieve in the format `projects/*/platforms/*/policies/*`. |

#### `projects.platforms.policies.replacePlatformPolicy()`

Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/*/platforms/*/policies/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.platforms.policies.list()`

Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the platform associated with the platform policies using the format `projects/*/platforms/*`. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListPlatformPoliciesResponse.next_page_token returned from the previous call to the `ListPlatformPolicies` method. |

#### `projects.platforms.policies.delete()`

Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the platform policy to delete, in the format `projects/*/platforms/*/policies/*`. |
| `params.etag` | `string` | No | Optional. Used to prevent deleting the policy when another request has updated it since it was retrieved. |

### `projects.attestors`

#### `projects.attestors.create()`

Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of this attestor. |
| `params.attestorId` | `string` | No | Required. The attestors ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.attestors.get()`

Gets an attestor. Returns `NOT_FOUND` if the attestor does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the attestor to retrieve, in the format `projects/*/attestors/*`. |

#### `projects.attestors.update()`

Updates an attestor. Returns `NOT_FOUND` if the attestor does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.attestors.list()`

Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project associated with the attestors, in the format `projects/*`. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method. |

#### `projects.attestors.delete()`

Deletes an attestor. Returns `NOT_FOUND` if the attestor does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the attestors to delete, in the format `projects/*/attestors/*`. |

#### `projects.attestors.validateAttestationOccurrence()`

Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.attestor` | `string` | Yes | Required. The resource name of the Attestor of the occurrence, in the format `projects/*/attestors/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.attestors.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.attestors.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.attestors.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.policy`

#### `projects.policy.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.policy.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.policy.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `systempolicy`

#### `systempolicy.getPolicy()`

Gets the current system policy in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name, in the format `locations/*/policy`. Note that the system policy is not associated with a project. |