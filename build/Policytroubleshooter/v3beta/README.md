# Policy Troubleshooter API - Apps Script Client Library

Auto-generated client library for using the **Policy Troubleshooter API (version: v3beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 01 Jul 2026 00:13:52 GMT
- **Last Modified:** Wed, 01 Jul 2026 00:13:52 GMT
- **Created:** Wed, 18 Mar 2026 21:59:52 GMT



---

## API Reference

### `iam`

#### `iam.troubleshoot()`

Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or doesn't have that permission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `iam.troubleshootError()`

Checks the access request associated with the error identifier and explains why the access is denied by IAM policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |