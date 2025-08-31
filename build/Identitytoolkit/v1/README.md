# Identity Toolkit API - Apps Script Client Library

Auto-generated client library for using the **Identity Toolkit API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:42:09 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:24:15 GMT
- **Created:** Sun, 20 Jul 2025 16:35:17 GMT



---

## API Reference

### `accounts`

#### `accounts.createAuthUri()`

If an email identifier is specified, checks and returns if any user account is registered with the email. If there is a registered account, fetches all providers associated with the account's email. If the provider ID of an Identity Provider (IdP) is specified, creates an authorization URI for the IdP. The user can be directed to this URI to sign in with the IdP. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.sendVerificationCode()`

Sends a SMS verification code for phone number sign-in. To localize the text of the SMS sent to the user, set the HTTP header `X-Firebase-Locale` to the language code that corresponds with the user's locale. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.signInWithCustomToken()`

Signs in or signs up a user by exchanging a custom Auth token. Upon a successful sign-in or sign-up, a new Identity Platform ID token and refresh token are issued for the user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.signInWithGameCenter()`

Signs in or signs up a user with iOS Game Center credentials. If the sign-in succeeds, a new Identity Platform ID token and refresh token are issued for the authenticated user. The bundle ID is required in the request header as `x-ios-bundle-identifier`. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project. Apple has [deprecated the `playerID` field](https://developer.apple.com/documentation/gamekit/gkplayer/1521127-playerid/). The Apple platform Firebase SDK will use `gamePlayerID` and `teamPlayerID` from version 10.5.0 and onwards. Upgrading to SDK version 10.5.0 or later updates existing integrations that use `playerID` to instead use `gamePlayerID` and `teamPlayerID`. When making calls to `signInWithGameCenter`, you must include `playerID` along with the new fields `gamePlayerID` and `teamPlayerID` to successfully identify all existing users. Upgrading existing Game Center sign in integrations to SDK version 10.5.0 or later is irreversible.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.signInWithPassword()`

Signs in a user with email and password. If the sign-in succeeds, a new Identity Platform ID token and refresh token are issued for the authenticated user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.signInWithEmailLink()`

Signs in or signs up a user with a out-of-band code from an email link. If a user does not exist with the given email address, a user record will be created. If the sign-in succeeds, an Identity Platform ID and refresh token are issued for the authenticated user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.signInWithIdp()`

Signs in or signs up a user using credentials from an Identity Provider (IdP). This is done by manually providing an IdP credential, or by providing the authorization response obtained via the authorization request from CreateAuthUri. If the sign-in succeeds, a new Identity Platform ID token and refresh token are issued for the authenticated user. A new Identity Platform user account will be created if the user has not previously signed in to the IdP with the same account. In addition, when the "One account per email address" setting is enabled, there should not be an existing Identity Platform user account with the same email address for a new user account to be created. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.signInWithPhoneNumber()`

Completes a phone number authentication attempt. If a user already exists with the given phone number, an ID token is minted for that user. Otherwise, a new user is created and associated with the phone number. This method may also be used to link a phone number to an existing user. To localize the text of the SMS sent to the user, set the HTTP header `X-Firebase-Locale` to the language code that corresponds with the user's locale. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.verifyIosClient()`

Verifies an iOS client is a real iOS device. If the request is valid, a receipt will be sent in the response and a secret will be sent via Apple Push Notification Service. The client should send both of them back to certain Identity Platform APIs in a later call (for example, /accounts:sendVerificationCode), in order to verify the client. The bundle ID is required in the request header as `x-ios-bundle-identifier`. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.signUp()`

Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password. For an admin request with a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control), creates a new anonymous, email and password, or phone number user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.issueSamlResponse()`

Experimental

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.delete()`

Deletes a user's account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.lookup()`

Gets account information for all matched accounts. For an end user request, retrieves the account of the end user. For an admin request with Google OAuth 2.0 credential, retrieves one or multiple account(s) with matching criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.sendOobCode()`

Sends an out-of-band confirmation code for an account. Requests from a authenticated request can optionally return a link including the OOB code instead of sending it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.resetPassword()`

Resets the password of an account either using an out-of-band code generated by sendOobCode or by specifying the email and password of the account to be modified. Can also check the purpose of an out-of-band code without consuming it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.update()`

Updates account-related information for the specified user by setting specific fields or applying action codes. Requests from administrators and end users are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `v1`

#### `v1.getPublicKeys()`

Retrieves public keys of the legacy Identity Toolkit token signer to enable third parties to verify the legacy ID token. For now the X509 pem cert is the only format supported.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `v1.getRecaptchaParams()`

Gets parameters needed for generating a reCAPTCHA challenge.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `v1.getProjects()`

Gets a project's public Identity Toolkit configuration. (Legacy) This method also supports authenticated calls from a developer to retrieve non-public configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.delegatedProjectNumber` | `string` | No | Project Number of the delegated project request. This field should only be used as part of the Firebase V1 migration. |
| `params.projectNumber` | `string` | No | Project number of the configuration to retrieve. This field is deprecated and should not be used by new integrations. |
| `params.returnDynamicLink` | `boolean` | No | Whether dynamic link should be returned. |
| `params.androidPackageName` | `string` | No | Android package name to check against the real android package name. If this field is provided, and sha1_cert_hash is not provided, the action will throw an error if this does not match the real android package name. |
| `params.iosBundleId` | `string` | No | iOS bundle id to check against the real ios bundle id. If this field is provided, the action will throw an error if this does not match the real iOS bundle id. |
| `params.clientId` | `string` | No | The RP OAuth client ID. If set, a check will be performed to ensure that the OAuth client is valid for the retrieved project and the request rejected with a client error if not valid. |
| `params.sha1Cert` | `string` | No | SHA-1 Android application cert hash. If set, a check will be performed to ensure that the cert hash is valid for the retrieved project and android_package_name. |
| `params.firebaseAppId` | `string` | No | The Firebase app ID, for applications that use Firebase. This can be found in the Firebase console for your project. If set, a check will be performed to ensure that the app ID is valid for the retrieved project. If not valid, the request will be rejected with a client error. |

#### `v1.getSessionCookiePublicKeys()`

Retrieves the set of public keys of the session cookie JSON Web Token (JWT) signer that can be used to validate the session cookie created through createSessionCookie.

| Parameter | Type | Required | Description |
|---|---|---|---|

### `projects`

#### `projects.accounts()`

Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password. For an admin request with a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control), creates a new anonymous, email and password, or phone number user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The project ID of the project which the user should belong to. Specifying this field requires a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). If this is not set, the target project is inferred from the scope associated to the Bearer access token. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.queryAccounts()`

Looks up user accounts within a project or a tenant based on conditions in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the project to which the result is scoped. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.createSessionCookie()`

Creates a session cookie for the given Identity Platform ID token. The session cookie is used by the client to preserve the user's login state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the project that the account belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.tenants`

#### `projects.tenants.accounts()`

Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password. For an admin request with a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control), creates a new anonymous, email and password, or phone number user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The project ID of the project which the user should belong to. Specifying this field requires a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). If this is not set, the target project is inferred from the scope associated to the Bearer access token. |
| `params.tenantId` | `string` | Yes | The ID of the Identity Platform tenant to create a user under. If not set, the user will be created under the default Identity Platform project. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.createSessionCookie()`

Creates a session cookie for the given Identity Platform ID token. The session cookie is used by the client to preserve the user's login state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the project that the account belongs to. |
| `params.tenantId` | `string` | Yes | The tenant ID of the Identity Platform tenant the account belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.tenants.accounts`

#### `projects.tenants.accounts.batchDelete()`

Batch deletes multiple accounts. For accounts that fail to be deleted, error info is contained in the response. The method ignores accounts that do not exist or are duplicated in the request. This method requires a Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that accounts belong to. |
| `params.tenantId` | `string` | Yes | If the accounts belong to an Identity Platform tenant, the ID of the tenant. If the accounts belong to a default Identity Platform project, the field is not needed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.accounts.delete()`

Deletes a user's account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the project which the account belongs to. Should only be specified in authenticated requests that specify local_id of an account. |
| `params.tenantId` | `string` | Yes | The ID of the tenant that the account belongs to, if applicable. Only require to be specified for authenticated requests bearing a Google OAuth 2.0 credential that specify local_id of an account that belongs to an Identity Platform tenant. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.accounts.batchGet()`

Download account information for all accounts on the project in a paginated manner. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).. Furthermore, additional permissions are needed to get password hash, password salt, and password version from accounts; otherwise these fields are redacted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that the accounts belong to. |
| `params.tenantId` | `string` | Yes | The ID of the Identity Platform tenant the accounts belongs to. If not specified, accounts on the Identity Platform project are returned. |
| `params.delegatedProjectNumber` | `string` | No |  |
| `params.nextPageToken` | `string` | No | The pagination token from the response of a previous request. |
| `params.maxResults` | `integer` | No | The maximum number of results to return. Must be at least 1 and no greater than 1000. By default, it is 20. |

#### `projects.tenants.accounts.lookup()`

Gets account information for all matched accounts. For an end user request, retrieves the account of the end user. For an admin request with Google OAuth 2.0 credential, retrieves one or multiple account(s) with matching criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the Google Cloud project that the account or the Identity Platform tenant specified by `tenant_id` belongs to. Should only be specified by authenticated requests bearing a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). |
| `params.tenantId` | `string` | Yes | The ID of the tenant that the account belongs to. Should only be specified by authenticated requests from a developer. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.accounts.sendOobCode()`

Sends an out-of-band confirmation code for an account. Requests from a authenticated request can optionally return a link including the OOB code instead of sending it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The Project ID of the Identity Platform project which the account belongs to. To specify this field, it requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). |
| `params.tenantId` | `string` | Yes | The tenant ID of the Identity Platform tenant the account belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.accounts.query()`

Looks up user accounts within a project or a tenant based on conditions in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the project to which the result is scoped. |
| `params.tenantId` | `string` | Yes | The ID of the tenant to which the result is scoped. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.accounts.update()`

Updates account-related information for the specified user by setting specific fields or applying action codes. Requests from administrators and end users are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The project ID for the project that the account belongs to. Specifying this field requires Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control). Requests from end users should pass an Identity Platform ID token instead. |
| `params.tenantId` | `string` | Yes | The tenant ID of the Identity Platform tenant that the account belongs to. Requests from end users should pass an Identity Platform ID token rather than setting this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.tenants.accounts.batchCreate()`

Uploads multiple accounts into the Google Cloud project. If there is a problem uploading one or more of the accounts, the rest will be uploaded, and a list of the errors will be returned. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The Project ID of the Identity Platform project which the account belongs to. |
| `params.tenantId` | `string` | Yes | The ID of the Identity Platform tenant the account belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.accounts`

#### `projects.accounts.batchDelete()`

Batch deletes multiple accounts. For accounts that fail to be deleted, error info is contained in the response. The method ignores accounts that do not exist or are duplicated in the request. This method requires a Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that accounts belong to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.accounts.delete()`

Deletes a user's account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the project which the account belongs to. Should only be specified in authenticated requests that specify local_id of an account. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.accounts.batchGet()`

Download account information for all accounts on the project in a paginated manner. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).. Furthermore, additional permissions are needed to get password hash, password salt, and password version from accounts; otherwise these fields are redacted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that the accounts belong to. |
| `params.delegatedProjectNumber` | `string` | No |  |
| `params.nextPageToken` | `string` | No | The pagination token from the response of a previous request. |
| `params.maxResults` | `integer` | No | The maximum number of results to return. Must be at least 1 and no greater than 1000. By default, it is 20. |
| `params.tenantId` | `string` | No | The ID of the Identity Platform tenant the accounts belongs to. If not specified, accounts on the Identity Platform project are returned. |

#### `projects.accounts.lookup()`

Gets account information for all matched accounts. For an end user request, retrieves the account of the end user. For an admin request with Google OAuth 2.0 credential, retrieves one or multiple account(s) with matching criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the Google Cloud project that the account or the Identity Platform tenant specified by `tenant_id` belongs to. Should only be specified by authenticated requests bearing a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.accounts.sendOobCode()`

Sends an out-of-band confirmation code for an account. Requests from a authenticated request can optionally return a link including the OOB code instead of sending it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The Project ID of the Identity Platform project which the account belongs to. To specify this field, it requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.accounts.query()`

Looks up user accounts within a project or a tenant based on conditions in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The ID of the project to which the result is scoped. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.accounts.update()`

Updates account-related information for the specified user by setting specific fields or applying action codes. Requests from administrators and end users are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The project ID for the project that the account belongs to. Specifying this field requires Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control). Requests from end users should pass an Identity Platform ID token instead. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.accounts.batchCreate()`

Uploads multiple accounts into the Google Cloud project. If there is a problem uploading one or more of the accounts, the rest will be uploaded, and a list of the errors will be returned. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetProjectId` | `string` | Yes | The Project ID of the Identity Platform project which the account belongs to. |
| `params.resource` | `object` | Yes | The request body. |