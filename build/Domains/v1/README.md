# Cloud Domains API - Apps Script Client Library

Auto-generated client library for using the **Cloud Domains API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:14:21 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:14:21 GMT
- **Created:** Sun, 20 Jul 2025 16:32:25 GMT



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

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.registrations`

#### `projects.locations.registrations.searchDomains()`

Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location. Must be in the format `projects/*/locations/*`. |
| `params.query` | `string` | No | Required. String used to search for available domain names. |

#### `projects.locations.registrations.retrieveRegisterParameters()`

Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location. Must be in the format `projects/*/locations/*`. |
| `params.domainName` | `string` | No | Required. The domain name. Unicode domain names must be expressed in Punycode format. |

#### `projects.locations.registrations.register()`

Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.retrieveTransferParameters()`

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location. Must be in the format `projects/*/locations/*`. |
| `params.domainName` | `string` | No | Required. The domain name. Unicode domain names must be expressed in Punycode format. |

#### `projects.locations.registrations.transfer()`

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.retrieveImportableDomains()`

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location. Must be in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | When set to the `next_page_token` from a prior response, provides the next page of results. |

#### `projects.locations.registrations.import()`

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the Registration. Must be in the format `projects/*/locations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.list()`

Lists the `Registration` resources in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which to list `Registration`s, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | When set to the `next_page_token` from a prior response, provides the next page of results. |
| `params.filter` | `string` | No | Filter expression to restrict the `Registration`s returned. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, a boolean, or an enum value. The comparison operator should be one of =, !=, >, <, >=, <=, or : for prefix or wildcard matches. For example, to filter to a specific domain name, use an expression like `domainName="example.com"`. You can also check for the existence of a field; for example, to find domains using custom DNS settings, use an expression like `dnsSettings.customDns:*`. You can also create compound filters by combining expressions with the `AND` and `OR` operators. For example, to find domains that are suspended or have specific issues flagged, use an expression like `(state=SUSPENDED) OR (issue:*)`. |

#### `projects.locations.registrations.get()`

Gets the details of a `Registration` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `Registration` to get, in the format `projects/*/locations/*/registrations/*`. |

#### `projects.locations.registrations.patch()`

Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method:

* To update management settings, see `ConfigureManagementSettings`

* To update DNS configuration, see `ConfigureDnsSettings`

* To update contact information, see `ConfigureContactSettings`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the `Registration` resource, in the format `projects/*/locations/*/registrations/`. |
| `params.updateMask` | `string` | No | Required. The field mask describing which fields to update as a comma-separated list. For example, if only the labels are being updated, the `update_mask` is `"labels"`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.configureManagementSettings()`

Updates a `Registration`'s management settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whose management settings are being updated, in the format `projects/*/locations/*/registrations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.configureDnsSettings()`

Updates a `Registration`'s DNS settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whose DNS settings are being updated, in the format `projects/*/locations/*/registrations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.retrieveGoogleDomainsDnsRecords()`

Lists the DNS records from the Google Domains DNS zone for domains that use the deprecated `google_domains_dns` in the `Registration`'s `dns_settings`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whose Google Domains DNS records details you are retrieving, in the format `projects/*/locations/*/registrations/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. |
| `params.pageToken` | `string` | No | Optional. When set to the `next_page_token` from a prior response, provides the next page of results. |

#### `projects.locations.registrations.retrieveGoogleDomainsForwardingConfig()`

Lists the deprecated domain and email forwarding configurations you set up in the deprecated Google Domains UI. The configuration is present only for domains with the `google_domains_redirects_data_available` set to `true` in the `Registration`'s `dns_settings`. A forwarding configuration might not work correctly if required DNS records are not present in the domain's authoritative DNS Zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whose Google Domains forwarding configuration details are being retrieved, in the format `projects/*/locations/*/registrations/*`. |

#### `projects.locations.registrations.configureContactSettings()`

Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact . Caution: Please consider carefully any changes to contact privacy settings when changing from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA.` There may be a delay in reflecting updates you make to registrant contact information such that any changes you make to contact privacy (including from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA`) will be applied without delay but changes to registrant contact information may take a limited time to be publicized. This means that changes to contact privacy from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA` may make the previous registrant contact data public until the modified registrant contact details are published.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whose contact settings are being updated, in the format `projects/*/locations/*/registrations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.export()`

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `Registration` to export, in the format `projects/*/locations/*/registrations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.delete()`

Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains. After January 2024 you will only be able to delete `Registration` resources when `state` is one of: `EXPORTED`, `EXPIRED`,`REGISTRATION_FAILED` or `TRANSFER_FAILED`. See [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) for more details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `Registration` to delete, in the format `projects/*/locations/*/registrations/*`. |

#### `projects.locations.registrations.retrieveAuthorizationCode()`

Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration. Domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties` don't support authorization codes and must use the `InitiatePushTransfer` method to initiate the process to transfer the domain to a different registrar.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whose authorization code is being retrieved, in the format `projects/*/locations/*/registrations/*`. |

#### `projects.locations.registrations.resetAuthorizationCode()`

Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration. Domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties` don't support authorization codes and must use the `InitiatePushTransfer` method to initiate the process to transfer the domain to a different registrar.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whose authorization code is being reset, in the format `projects/*/locations/*/registrations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.initiatePushTransfer()`

Initiates the `Push Transfer` process to transfer the domain to another registrar. The process might complete instantly or might require confirmation or additional work. Check the emails sent to the email address of the registrant. The process is aborted after a timeout if it's not completed. This method is only supported for domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties`. The domain must also be unlocked before it can be transferred to a different registrar. For more information, see [Transfer a registered domain to another registrar](https://cloud.google.com/domains/docs/transfer-domain-to-another-registrar).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` for which the push transfer is initiated, in the format `projects/*/locations/*/registrations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.renewDomain()`

Renews a recently expired domain. This method can only be called on domains that expired in the previous 30 days. After the renewal, the new expiration time of the domain is one year after the old expiration time and you are charged a `yearly_price` for the renewal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registration` | `string` | Yes | Required. The name of the `Registration` whish is being renewed, in the format `projects/*/locations/*/registrations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.registrations.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.registrations.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |