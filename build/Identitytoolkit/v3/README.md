# Google Identity Toolkit API - Apps Script Client Library

Auto-generated client library for using the **Google Identity Toolkit API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:24:23 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:24:23 GMT
- **Created:** Sun, 20 Jul 2025 16:35:23 GMT



---

## API Reference

### `relyingparty`

#### `relyingparty.createAuthUri()`

Creates the URI used by the IdP to authenticate the user.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.deleteAccount()`

Delete user account.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.downloadAccount()`

Batch download user accounts.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.emailLinkSignin()`

Reset password for a user.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.getAccountInfo()`

Returns the account info.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.getOobConfirmationCode()`

Get a code for user action confirmation.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.getProjectConfig()`

Get project configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.delegatedProjectNumber` | `string` | No | Delegated GCP project number of the request. |
| `params.projectNumber` | `string` | No | GCP project number of the request. |

#### `relyingparty.getPublicKeys()`

Get token signing public key.


#### `relyingparty.getRecaptchaParam()`

Get recaptcha secure param.


#### `relyingparty.resetPassword()`

Reset password for a user.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.sendVerificationCode()`

Send SMS verification code.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.setAccountInfo()`

Set account info for a user.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.setProjectConfig()`

Set project configuration.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.signOutUser()`

Sign out user.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.signupNewUser()`

Signup new user.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.uploadAccount()`

Batch upload existing user accounts.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.verifyAssertion()`

Verifies the assertion returned by the IdP.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.verifyCustomToken()`

Verifies the developer asserted ID token.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.verifyPassword()`

Verifies the user entered password.

| `params.resource` | `object` | Yes | The request body. |

#### `relyingparty.verifyPhoneNumber()`

Verifies ownership of a phone number and creates/updates the user account accordingly.

| `params.resource` | `object` | Yes | The request body. |