# Cloud Asset API - Apps Script Client Library

Auto-generated client library for using the **Cloud Asset API (version: v1p1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:24:25 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:06:56 GMT
- **Created:** Sun, 20 Jul 2025 16:20:54 GMT



---

## API Reference

### `resources`

#### `resources.searchAll()`

Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloudasset.assets.searchAllResources` permission on the requested scope, otherwise the request will be rejected.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be: * Organization number (such as "organizations/123") * Folder number (such as "folders/1234") * Project number (such as "projects/12345") * Project ID (such as "projects/abc") |
| `params.query` | `string` | No | Optional. The query statement. |
| `params.assetTypes` | `string` | No | Optional. A list of asset types that this request searches for. If empty, it will search all the supported asset types. |
| `params.pageSize` | `integer` | No | Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned. |
| `params.pageToken` | `string` | No | Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call. |
| `params.orderBy` | `string` | No | Optional. A comma separated list of fields specifying the sorting order of the results. The default order is ascending. Add ` DESC` after the field name to indicate descending order. Redundant space characters are ignored. For example, ` location DESC , name `. |

### `iamPolicies`

#### `iamPolicies.searchAll()`

Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloudasset.assets.searchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be: * Organization number (such as "organizations/123") * Folder number (such as "folders/1234") * Project number (such as "projects/12345") * Project ID (such as "projects/abc") |
| `params.query` | `string` | No | Optional. The query statement. Examples: * "policy:myuser@mydomain.com" * "policy:(myuser@mydomain.com viewer)" |
| `params.pageSize` | `integer` | No | Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned. |
| `params.pageToken` | `string` | No | Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters must be identical to those in the previous call. |