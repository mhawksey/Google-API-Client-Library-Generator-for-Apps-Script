
/**
 * Google Apps Script client library for the Identity Toolkit API
 * Documentation URL: https://cloud.google.com/identity-platform
 * @class
 */
class Identitytoolkit {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://identitytoolkit.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    /**
     * If an email identifier is specified, checks and returns if any user account is registered with the email. If there is a registered account, fetches all providers associated with the account's email. If the provider ID of an Identity Provider (IdP) is specified, creates an authorization URI for the IdP. The user can be directed to this URI to sign in with the IdP. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.createAuthUri = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:createAuthUri', 'POST', apiParams, clientConfig);

    /**
     * Sends a SMS verification code for phone number sign-in. To localize the text of the SMS sent to the user, set the HTTP header `X-Firebase-Locale` to the language code that corresponds with the user's locale. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.sendVerificationCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:sendVerificationCode', 'POST', apiParams, clientConfig);

    /**
     * Signs in or signs up a user by exchanging a custom Auth token. Upon a successful sign-in or sign-up, a new Identity Platform ID token and refresh token are issued for the user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.signInWithCustomToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithCustomToken', 'POST', apiParams, clientConfig);

    /**
     * Signs in or signs up a user with iOS Game Center credentials. If the sign-in succeeds, a new Identity Platform ID token and refresh token are issued for the authenticated user. The bundle ID is required in the request header as `x-ios-bundle-identifier`. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project. Apple has [deprecated the `playerID` field](https://developer.apple.com/documentation/gamekit/gkplayer/1521127-playerid/). The Apple platform Firebase SDK will use `gamePlayerID` and `teamPlayerID` from version 10.5.0 and onwards. Upgrading to SDK version 10.5.0 or later updates existing integrations that use `playerID` to instead use `gamePlayerID` and `teamPlayerID`. When making calls to `signInWithGameCenter`, you must include `playerID` along with the new fields `gamePlayerID` and `teamPlayerID` to successfully identify all existing users. Upgrading existing Game Center sign in integrations to SDK version 10.5.0 or later is irreversible.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.signInWithGameCenter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithGameCenter', 'POST', apiParams, clientConfig);

    /**
     * Signs in a user with email and password. If the sign-in succeeds, a new Identity Platform ID token and refresh token are issued for the authenticated user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.signInWithPassword = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithPassword', 'POST', apiParams, clientConfig);

    /**
     * Signs in or signs up a user with a out-of-band code from an email link. If a user does not exist with the given email address, a user record will be created. If the sign-in succeeds, an Identity Platform ID and refresh token are issued for the authenticated user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.signInWithEmailLink = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithEmailLink', 'POST', apiParams, clientConfig);

    /**
     * Signs in or signs up a user using credentials from an Identity Provider (IdP). This is done by manually providing an IdP credential, or by providing the authorization response obtained via the authorization request from CreateAuthUri. If the sign-in succeeds, a new Identity Platform ID token and refresh token are issued for the authenticated user. A new Identity Platform user account will be created if the user has not previously signed in to the IdP with the same account. In addition, when the "One account per email address" setting is enabled, there should not be an existing Identity Platform user account with the same email address for a new user account to be created. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.signInWithIdp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithIdp', 'POST', apiParams, clientConfig);

    /**
     * Completes a phone number authentication attempt. If a user already exists with the given phone number, an ID token is minted for that user. Otherwise, a new user is created and associated with the phone number. This method may also be used to link a phone number to an existing user. To localize the text of the SMS sent to the user, set the HTTP header `X-Firebase-Locale` to the language code that corresponds with the user's locale. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.signInWithPhoneNumber = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithPhoneNumber', 'POST', apiParams, clientConfig);

    /**
     * Verifies an iOS client is a real iOS device. If the request is valid, a receipt will be sent in the response and a secret will be sent via Apple Push Notification Service. The client should send both of them back to certain Identity Platform APIs in a later call (for example, /accounts:sendVerificationCode), in order to verify the client. The bundle ID is required in the request header as `x-ios-bundle-identifier`. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.verifyIosClient = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:verifyIosClient', 'POST', apiParams, clientConfig);

    /**
     * Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password. For an admin request with a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control), creates a new anonymous, email and password, or phone number user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.signUp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signUp', 'POST', apiParams, clientConfig);

    /**
     * Experimental
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.issueSamlResponse = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:issueSamlResponse', 'POST', apiParams, clientConfig);

    /**
     * Deletes a user's account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:delete', 'POST', apiParams, clientConfig);

    /**
     * Gets account information for all matched accounts. For an end user request, retrieves the account of the end user. For an admin request with Google OAuth 2.0 credential, retrieves one or multiple account(s) with matching criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:lookup', 'POST', apiParams, clientConfig);

    /**
     * Sends an out-of-band confirmation code for an account. Requests from a authenticated request can optionally return a link including the OOB code instead of sending it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.sendOobCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:sendOobCode', 'POST', apiParams, clientConfig);

    /**
     * Resets the password of an account either using an out-of-band code generated by sendOobCode or by specifying the email and password of the account to be modified. Can also check the purpose of an out-of-band code without consuming it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.resetPassword = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:resetPassword', 'POST', apiParams, clientConfig);

    /**
     * Updates account-related information for the specified user by setting specific fields or applying action codes. Requests from administrators and end users are supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:update', 'POST', apiParams, clientConfig);

    this.v1 = {};

    /**
     * Retrieves public keys of the legacy Identity Toolkit token signer to enable third parties to verify the legacy ID token. For now the X509 pem cert is the only format supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v1.getPublicKeys = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/publicKeys', 'GET', apiParams, clientConfig);

    /**
     * Gets parameters needed for generating a reCAPTCHA challenge.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v1.getRecaptchaParams = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/recaptchaParams', 'GET', apiParams, clientConfig);

    /**
     * Gets a project's public Identity Toolkit configuration. (Legacy) This method also supports authenticated calls from a developer to retrieve non-public configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.androidPackageName - Android package name to check against the real android package name. If this field is provided, and sha1_cert_hash is not provided, the action will throw an error if this does not match the real android package name.
     * @param {string} apiParams.clientId - The RP OAuth client ID. If set, a check will be performed to ensure that the OAuth client is valid for the retrieved project and the request rejected with a client error if not valid.
     * @param {string} apiParams.delegatedProjectNumber - Project Number of the delegated project request. This field should only be used as part of the Firebase V1 migration.
     * @param {string} apiParams.firebaseAppId - The Firebase app ID, for applications that use Firebase. This can be found in the Firebase console for your project. If set, a check will be performed to ensure that the app ID is valid for the retrieved project. If not valid, the request will be rejected with a client error.
     * @param {string} apiParams.iosBundleId - iOS bundle id to check against the real ios bundle id. If this field is provided, the action will throw an error if this does not match the real iOS bundle id.
     * @param {string} apiParams.projectNumber - Project number of the configuration to retrieve. This field is deprecated and should not be used by new integrations.
     * @param {boolean} apiParams.returnDynamicLink - Whether dynamic link should be returned.
     * @param {string} apiParams.sha1Cert - SHA-1 Android application cert hash. If set, a check will be performed to ensure that the cert hash is valid for the retrieved project and android_package_name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v1.getProjects = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the set of public keys of the session cookie JSON Web Token (JWT) signer that can be used to validate the session cookie created through createSessionCookie.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v1.getSessionCookiePublicKeys = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/sessionCookiePublicKeys', 'GET', apiParams, clientConfig);

    this.projects = {};

    /**
     * Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password. For an admin request with a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control), creates a new anonymous, email and password, or phone number user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The project ID of the project which the user should belong to. Specifying this field requires a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). If this is not set, the target project is inferred from the scope associated to the Bearer access token.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts', 'POST', apiParams, clientConfig);

    /**
     * Looks up user accounts within a project or a tenant based on conditions in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the project to which the result is scoped.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.queryAccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}:queryAccounts', 'POST', apiParams, clientConfig);

    /**
     * Creates a session cookie for the given Identity Platform ID token. The session cookie is used by the client to preserve the user's login state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the project that the account belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.createSessionCookie = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}:createSessionCookie', 'POST', apiParams, clientConfig);

    this.projects.tenants = {};

    /**
     * Signs up a new email and password user or anonymous user, or upgrades an anonymous user to email and password. For an admin request with a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control), creates a new anonymous, email and password, or phone number user. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The project ID of the project which the user should belong to. Specifying this field requires a Google OAuth 2.0 credential with the proper [permissions](https://cloud.google.com/identity-platform/docs/access-control). If this is not set, the target project is inferred from the scope associated to the Bearer access token.
     * @param {string} apiParams.tenantId - (Required) The ID of the Identity Platform tenant to create a user under. If not set, the user will be created under the default Identity Platform project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts', 'POST', apiParams, clientConfig);

    /**
     * Creates a session cookie for the given Identity Platform ID token. The session cookie is used by the client to preserve the user's login state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the project that the account belongs to.
     * @param {string} apiParams.tenantId - (Required) The tenant ID of the Identity Platform tenant the account belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.createSessionCookie = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}:createSessionCookie', 'POST', apiParams, clientConfig);

    this.projects.tenants.accounts = {};

    /**
     * Batch deletes multiple accounts. For accounts that fail to be deleted, error info is contained in the response. The method ignores accounts that do not exist or are duplicated in the request. This method requires a Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that accounts belong to.
     * @param {string} apiParams.tenantId - (Required) If the accounts belong to an Identity Platform tenant, the ID of the tenant. If the accounts belong to a default Identity Platform project, the field is not needed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Deletes a user's account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the project which the account belongs to. Should only be specified in authenticated requests that specify local_id of an account.
     * @param {string} apiParams.tenantId - (Required) The ID of the tenant that the account belongs to, if applicable. Only require to be specified for authenticated requests bearing a Google OAuth 2.0 credential that specify local_id of an account that belongs to an Identity Platform tenant.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:delete', 'POST', apiParams, clientConfig);

    /**
     * Download account information for all accounts on the project in a paginated manner. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).. Furthermore, additional permissions are needed to get password hash, password salt, and password version from accounts; otherwise these fields are redacted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.delegatedProjectNumber - 
     * @param {integer} apiParams.maxResults - The maximum number of results to return. Must be at least 1 and no greater than 1000. By default, it is 20.
     * @param {string} apiParams.nextPageToken - The pagination token from the response of a previous request.
     * @param {string} apiParams.targetProjectId - (Required) If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that the accounts belong to.
     * @param {string} apiParams.tenantId - (Required) The ID of the Identity Platform tenant the accounts belongs to. If not specified, accounts on the Identity Platform project are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Gets account information for all matched accounts. For an end user request, retrieves the account of the end user. For an admin request with Google OAuth 2.0 credential, retrieves one or multiple account(s) with matching criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the Google Cloud project that the account or the Identity Platform tenant specified by `tenant_id` belongs to. Should only be specified by authenticated requests bearing a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).
     * @param {string} apiParams.tenantId - (Required) The ID of the tenant that the account belongs to. Should only be specified by authenticated requests from a developer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:lookup', 'POST', apiParams, clientConfig);

    /**
     * Sends an out-of-band confirmation code for an account. Requests from a authenticated request can optionally return a link including the OOB code instead of sending it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The Project ID of the Identity Platform project which the account belongs to. To specify this field, it requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).
     * @param {string} apiParams.tenantId - (Required) The tenant ID of the Identity Platform tenant the account belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.sendOobCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:sendOobCode', 'POST', apiParams, clientConfig);

    /**
     * Looks up user accounts within a project or a tenant based on conditions in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the project to which the result is scoped.
     * @param {string} apiParams.tenantId - (Required) The ID of the tenant to which the result is scoped.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:query', 'POST', apiParams, clientConfig);

    /**
     * Updates account-related information for the specified user by setting specific fields or applying action codes. Requests from administrators and end users are supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The project ID for the project that the account belongs to. Specifying this field requires Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control). Requests from end users should pass an Identity Platform ID token instead.
     * @param {string} apiParams.tenantId - (Required) The tenant ID of the Identity Platform tenant that the account belongs to. Requests from end users should pass an Identity Platform ID token rather than setting this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:update', 'POST', apiParams, clientConfig);

    /**
     * Uploads multiple accounts into the Google Cloud project. If there is a problem uploading one or more of the accounts, the rest will be uploaded, and a list of the errors will be returned. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The Project ID of the Identity Platform project which the account belongs to.
     * @param {string} apiParams.tenantId - (Required) The ID of the Identity Platform tenant the account belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.tenants.accounts.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchCreate', 'POST', apiParams, clientConfig);

    this.projects.accounts = {};

    /**
     * Batch deletes multiple accounts. For accounts that fail to be deleted, error info is contained in the response. The method ignores accounts that do not exist or are duplicated in the request. This method requires a Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that accounts belong to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Deletes a user's account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the project which the account belongs to. Should only be specified in authenticated requests that specify local_id of an account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:delete', 'POST', apiParams, clientConfig);

    /**
     * Download account information for all accounts on the project in a paginated manner. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).. Furthermore, additional permissions are needed to get password hash, password salt, and password version from accounts; otherwise these fields are redacted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.delegatedProjectNumber - 
     * @param {integer} apiParams.maxResults - The maximum number of results to return. Must be at least 1 and no greater than 1000. By default, it is 20.
     * @param {string} apiParams.nextPageToken - The pagination token from the response of a previous request.
     * @param {string} apiParams.targetProjectId - (Required) If `tenant_id` is specified, the ID of the Google Cloud project that the Identity Platform tenant belongs to. Otherwise, the ID of the Google Cloud project that the accounts belong to.
     * @param {string} apiParams.tenantId - The ID of the Identity Platform tenant the accounts belongs to. If not specified, accounts on the Identity Platform project are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Gets account information for all matched accounts. For an end user request, retrieves the account of the end user. For an admin request with Google OAuth 2.0 credential, retrieves one or multiple account(s) with matching criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the Google Cloud project that the account or the Identity Platform tenant specified by `tenant_id` belongs to. Should only be specified by authenticated requests bearing a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:lookup', 'POST', apiParams, clientConfig);

    /**
     * Sends an out-of-band confirmation code for an account. Requests from a authenticated request can optionally return a link including the OOB code instead of sending it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The Project ID of the Identity Platform project which the account belongs to. To specify this field, it requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.sendOobCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:sendOobCode', 'POST', apiParams, clientConfig);

    /**
     * Looks up user accounts within a project or a tenant based on conditions in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The ID of the project to which the result is scoped.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:query', 'POST', apiParams, clientConfig);

    /**
     * Updates account-related information for the specified user by setting specific fields or applying action codes. Requests from administrators and end users are supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The project ID for the project that the account belongs to. Specifying this field requires Google OAuth 2.0 credential with proper [permissions] (https://cloud.google.com/identity-platform/docs/access-control). Requests from end users should pass an Identity Platform ID token instead.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:update', 'POST', apiParams, clientConfig);

    /**
     * Uploads multiple accounts into the Google Cloud project. If there is a problem uploading one or more of the accounts, the rest will be uploaded, and a list of the errors will be returned. To use this method requires a Google OAuth 2.0 credential with proper [permissions](https://cloud.google.com/identity-platform/docs/access-control).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetProjectId - (Required) The Project ID of the Identity Platform project which the account belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.accounts.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchCreate', 'POST', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
