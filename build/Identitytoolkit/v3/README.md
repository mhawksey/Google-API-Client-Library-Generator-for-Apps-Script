# Google Identity Toolkit API - Apps Script Client Library

Auto-generated client library for using the **Google Identity Toolkit API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:46:34 GMT
- **Last Modified:** Thu, 01 Jan 2026 00:46:34 GMT
- **Created:** Sun, 20 Jul 2025 16:35:23 GMT



---

## API Reference

### `relyingparty`

#### `relyingparty.getPublicKeys()`

Get token signing public key.


#### `relyingparty.resetPassword()`

Reset password for a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.sendVerificationCode()`

Send SMS verification code.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.downloadAccount()`

Batch download user accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.signOutUser()`

Sign out user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.emailLinkSignin()`

Reset password for a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.getOobConfirmationCode()`

Get a code for user action confirmation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.setAccountInfo()`

Set account info for a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.deleteAccount()`

Delete user account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.getRecaptchaParam()`

Get recaptcha secure param.


#### `relyingparty.verifyPassword()`

Verifies the user entered password.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.getAccountInfo()`

Returns the account info.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.uploadAccount()`

Batch upload existing user accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.getProjectConfig()`

Get project configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectNumber` | `string` | No | GCP project number of the request. |
| `params.delegatedProjectNumber` | `string` | No | Delegated GCP project number of the request. |

#### `relyingparty.verifyAssertion()`

Verifies the assertion returned by the IdP.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.verifyCustomToken()`

Verifies the developer asserted ID token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.signupNewUser()`

Signup new user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.createAuthUri()`

Creates the URI used by the IdP to authenticate the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.verifyPhoneNumber()`

Verifies ownership of a phone number and creates/updates the user account accordingly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `relyingparty.setProjectConfig()`

Set project configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |