# Secret Manager API - Apps Script Client Library

Auto-generated client library for using the **Secret Manager API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:07:00 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:38:27 GMT
- **Created:** Sun, 20 Jul 2025 16:53:34 GMT



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

### `projects.secrets`

#### `projects.secrets.list()`

Lists Secrets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project associated with the Secrets, in the format `projects/*`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to be returned in a single page. If set to 0, the server decides the number of results to return. If the number is greater than 25000, it is capped at 25000. |
| `params.pageToken` | `string` | No | Optional. Pagination token, returned earlier via ListSecretsResponse.next_page_token. |

#### `projects.secrets.create()`

Creates a new Secret containing no SecretVersions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project to associate with the Secret, in the format `projects/*`. |
| `params.secretId` | `string` | No | Required. This must be unique within the project. A secret ID is a string with a maximum length of 255 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore (`_`) characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.secrets.addVersion()`

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Secret to associate with the SecretVersion in the format `projects/*/secrets/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.secrets.get()`

Gets metadata for a given Secret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Secret, in the format `projects/*/secrets/*`. |

#### `projects.secrets.patch()`

Updates metadata of an existing Secret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the Secret in the format `projects/*/secrets/*`. |
| `params.updateMask` | `string` | No | Required. Specifies the fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.secrets.delete()`

Deletes a Secret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Secret to delete in the format `projects/*/secrets/*`. |

#### `projects.secrets.setIamPolicy()`

Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.secrets.getIamPolicy()`

Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.secrets.testIamPermissions()`

Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.secrets.versions`

#### `projects.secrets.versions.list()`

Lists SecretVersions. This call does not return secret data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Secret associated with the SecretVersions to list, in the format `projects/*/secrets/*`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to be returned in a single page. If set to 0, the server decides the number of results to return. If the number is greater than 25000, it is capped at 25000. |
| `params.pageToken` | `string` | No | Optional. Pagination token, returned earlier via ListSecretVersionsResponse.next_page_token][]. |

#### `projects.secrets.versions.get()`

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SecretVersion in the format `projects/*/secrets/*/versions/*`. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion. |

#### `projects.secrets.versions.access()`

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SecretVersion in the format `projects/*/secrets/*/versions/*`. |

#### `projects.secrets.versions.disable()`

Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SecretVersion to disable in the format `projects/*/secrets/*/versions/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.secrets.versions.enable()`

Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SecretVersion to enable in the format `projects/*/secrets/*/versions/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.secrets.versions.destroy()`

Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the SecretVersion to destroy in the format `projects/*/secrets/*/versions/*`. |
| `params.resource` | `object` | Yes | The request body. |