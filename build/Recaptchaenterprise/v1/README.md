# reCAPTCHA Enterprise API - Apps Script Client Library

Auto-generated client library for using the **reCAPTCHA Enterprise API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:18:48 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:45:30 GMT
- **Created:** Sun, 20 Jul 2025 16:52:14 GMT



---

## API Reference

### `projects`

### `projects.assessments`

#### `projects.assessments.create()`

Creates an Assessment of the likelihood an event is legitimate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which the assessment is created, in the format `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.assessments.annotate()`

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Assessment, in the format `projects/{project}/assessments/{assessment}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.keys`

#### `projects.keys.create()`

Creates a new reCAPTCHA Enterprise key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which the key is created, in the format `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.keys.list()`

Returns the list of all keys that belong to a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project that contains the keys that is listed, in the format `projects/{project}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of keys to return. Default is 10. Max limit is 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous. ListKeysRequest, if any. |

#### `projects.keys.retrieveLegacySecretKey()`

Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.key` | `string` | Yes | Required. The public key name linked to the requested secret key in the format `projects/{project}/keys/{key}`. |

#### `projects.keys.get()`

Returns the specified key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the requested key, in the format `projects/{project}/keys/{key}`. |

#### `projects.keys.patch()`

Updates the specified key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.keys.delete()`

Deletes the specified key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key to be deleted, in the format `projects/{project}/keys/{key}`. |

#### `projects.keys.migrate()`

Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key to be migrated, in the format `projects/{project}/keys/{key}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.keys.addIpOverride()`

Adds an IP override to a key. The following restrictions hold:

* The maximum number of IP overrides per key is 1000.

* For any conflict (such as IP already exists or IP part of an existing IP range), an error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key to which the IP override is added, in the format `projects/{project}/keys/{key}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.keys.removeIpOverride()`

Removes an IP override from a key. The following restrictions hold:

* If the IP isn't found in an existing IP override, a `NOT_FOUND` error is returned.

* If the IP is found in an existing IP override, but the override type does not match, a `NOT_FOUND` error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the key from which the IP override is removed, in the format `projects/{project}/keys/{key}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.keys.listIpOverrides()`

Lists all IP overrides for a key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent key for which the IP overrides are listed, in the format `projects/{project}/keys/{key}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of overrides to return. Default is 10. Max limit is 100. If the number of overrides is less than the page_size, all overrides are returned. If the page size is more than 100, it is coerced to 100. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous ListIpOverridesRequest, if any. |

#### `projects.keys.getMetrics()`

Get some aggregated metrics for a Key. This data can be used to build dashboards.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the requested metrics, in the format `projects/{project}/keys/{key}/metrics`. |

### `projects.firewallpolicies`

#### `projects.firewallpolicies.create()`

Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project this policy applies to, in the format `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.firewallpolicies.list()`

Returns the list of all firewall policies that belong to a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to list the policies for, in the format `projects/{project}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of policies to return. Default is 10. Max limit is 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any. |

#### `projects.firewallpolicies.get()`

Returns the specified firewall policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the requested policy, in the format `projects/{project}/firewallpolicies/{firewallpolicy}`. |

#### `projects.firewallpolicies.patch()`

Updates the specified firewall policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields of the policy get updated. If the mask is not present, all fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.firewallpolicies.delete()`

Deletes the specified firewall policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the policy to be deleted, in the format `projects/{project}/firewallpolicies/{firewallpolicy}`. |

#### `projects.firewallpolicies.reorder()`

Reorders all firewall policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to list the policies for, in the format `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.relatedaccountgroups`

#### `projects.relatedaccountgroups.list()`

List groups of related accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to list related account groups from, in the format `projects/{project}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token. |

### `projects.relatedaccountgroups.memberships`

#### `projects.relatedaccountgroups.memberships.list()`

Get memberships in a group of related accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token. |

### `projects.relatedaccountgroupmemberships`

#### `projects.relatedaccountgroupmemberships.search()`

Search group memberships related to a given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The name of the project to search related account group memberships from. Specify the project name in the following format: `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |