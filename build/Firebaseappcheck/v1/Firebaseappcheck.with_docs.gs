
/**
 * Google Apps Script client library for the Firebase App Check API
 * Documentation URL: https://firebase.google.com/docs/app-check
 * @class
 */
class Firebaseappcheck {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebaseappcheck.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.services = {};

    /**
     * Gets the Service configuration for the specified service name.
     * @param {string} params.name - (Required) Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     * @return {object} The API response object.
     */
    this.projects.services.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
     * @param {integer} params.pageSize - The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     * @param {string} params.pageToken - Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.
     * @param {string} params.parent - (Required) Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ```
     * @return {object} The API response object.
     */
    this.projects.services.list = (params) => this._makeRequest('v1/{+parent}/services', 'GET', params);

    /**
     * Updates the specified Service configuration.
     * @param {string} params.name - (Required) Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.services.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Atomically updates the specified Service configurations.
     * @param {string} params.parent - (Required) Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.services.batchUpdate = (params) => this._makeRequest('v1/{+parent}/services:batchUpdate', 'POST', params);

    this.projects.services.resourcePolicies = {};

    /**
     * Gets the requested ResourcePolicy configuration.
     * @param {string} params.name - (Required) Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     * @return {object} The API response object.
     */
    this.projects.services.resourcePolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all ResourcePolicy configurations for the specified project and service.
     * @param {string} params.filter - Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields `enforcement_mode` and `target_resource`, this method does not support the traversal operator (`.`) or the has operator (`:`). Here are some examples of valid filters: * `enforcement_mode = ENFORCED` * `target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` * `enforcement_mode = ENFORCED AND target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"`
     * @param {integer} params.pageSize - The maximum number of ResourcePolicy objects to return in the response. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     * @param {string} params.pageToken - Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicy objects to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined.
     * @param {string} params.parent - (Required) Required. The relative resource name of the parent Service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     * @return {object} The API response object.
     */
    this.projects.services.resourcePolicies.list = (params) => this._makeRequest('v1/{+parent}/resourcePolicies', 'GET', params);

    /**
     * Creates the specified ResourcePolicy configuration.
     * @param {string} params.parent - (Required) Required. The relative resource name of the parent Service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.services.resourcePolicies.create = (params) => this._makeRequest('v1/{+parent}/resourcePolicies', 'POST', params);

    /**
     * Updates the specified ResourcePolicy configuration.
     * @param {string} params.name - (Required) Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.services.resourcePolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified ResourcePolicy configuration.
     * @param {string} params.etag - The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. This checksum is computed by the server based on the values of fields in the ResourcePolicy object, and can be obtained from the ResourcePolicy object received from the last CreateResourcePolicy, GetResourcePolicy, ListResourcePolicies, UpdateResourcePolicy, or BatchUpdateResourcePolicies call. This etag is strongly validated as defined by RFC 7232.
     * @param {string} params.name - (Required) Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ```
     * @return {object} The API response object.
     */
    this.projects.services.resourcePolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Atomically updates the specified ResourcePolicy configurations.
     * @param {string} params.parent - (Required) Required. The parent service name, in the format ``` projects/{project_number}/services/{service_id} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.services.resourcePolicies.batchUpdate = (params) => this._makeRequest('v1/{+parent}/resourcePolicies:batchUpdate', 'POST', params);

    this.projects.apps = {};

    /**
     * Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeSafetyNetToken = (params) => this._makeRequest('v1/{+app}:exchangeSafetyNetToken', 'POST', params);

    /**
     * Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
     * @param {string} params.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.generatePlayIntegrityChallenge = (params) => this._makeRequest('v1/{+app}:generatePlayIntegrityChallenge', 'POST', params);

    /**
     * Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangePlayIntegrityToken = (params) => this._makeRequest('v1/{+app}:exchangePlayIntegrityToken', 'POST', params);

    /**
     * Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeDeviceCheckToken = (params) => this._makeRequest('v1/{+app}:exchangeDeviceCheckToken', 'POST', params);

    /**
     * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeRecaptchaV3Token = (params) => this._makeRequest('v1/{+app}:exchangeRecaptchaV3Token', 'POST', params);

    /**
     * Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeRecaptchaEnterpriseToken = (params) => this._makeRequest('v1/{+app}:exchangeRecaptchaEnterpriseToken', 'POST', params);

    /**
     * Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeCustomToken = (params) => this._makeRequest('v1/{+app}:exchangeCustomToken', 'POST', params);

    /**
     * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
     * @param {string} params.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeDebugToken = (params) => this._makeRequest('v1/{+app}:exchangeDebugToken', 'POST', params);

    /**
     * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
     * @param {string} params.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.generateAppAttestChallenge = (params) => this._makeRequest('v1/{+app}:generateAppAttestChallenge', 'POST', params);

    /**
     * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
     * @param {string} params.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeAppAttestAttestation = (params) => this._makeRequest('v1/{+app}:exchangeAppAttestAttestation', 'POST', params);

    /**
     * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.exchangeAppAttestAssertion = (params) => this._makeRequest('v1/{+app}:exchangeAppAttestAssertion', 'POST', params);

    this.projects.apps.appAttestConfig = {};

    /**
     * Gets the AppAttestConfig for the specified app.
     * @param {string} params.name - (Required) Required. The relative resource name of the AppAttestConfig, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ```
     * @return {object} The API response object.
     */
    this.projects.apps.appAttestConfig.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Atomically gets the AppAttestConfigs for the specified list of apps.
     * @param {string} params.names - Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} params.parent - (Required) Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @return {object} The API response object.
     */
    this.projects.apps.appAttestConfig.batchGet = (params) => this._makeRequest('v1/{+parent}/apps/-/appAttestConfig:batchGet', 'GET', params);

    /**
     * Updates the AppAttestConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange AppAttest tokens for App Check tokens.
     * @param {string} params.name - (Required) Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ```
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the AppAttestConfig to update. Example: `token_ttl`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.appAttestConfig.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.apps.deviceCheckConfig = {};

    /**
     * Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response.
     * @param {string} params.name - (Required) Required. The relative resource name of the DeviceCheckConfig, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ```
     * @return {object} The API response object.
     */
    this.projects.apps.deviceCheckConfig.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
     * @param {string} params.names - Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} params.parent - (Required) Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @return {object} The API response object.
     */
    this.projects.apps.deviceCheckConfig.batchGet = (params) => this._makeRequest('v1/{+parent}/apps/-/deviceCheckConfig:batchGet', 'GET', params);

    /**
     * Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response.
     * @param {string} params.name - (Required) Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ```
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the DeviceCheckConfig to update. Example: `key_id,private_key`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.deviceCheckConfig.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.apps.recaptchaV3Config = {};

    /**
     * Gets the RecaptchaV3Config for the specified app. For security reasons, the `site_secret` field is never populated in the response.
     * @param {string} params.name - (Required) Required. The relative resource name of the RecaptchaV3Config, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ```
     * @return {object} The API response object.
     */
    this.projects.apps.recaptchaV3Config.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
     * @param {string} params.names - Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} params.parent - (Required) Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @return {object} The API response object.
     */
    this.projects.apps.recaptchaV3Config.batchGet = (params) => this._makeRequest('v1/{+parent}/apps/-/recaptchaV3Config:batchGet', 'GET', params);

    /**
     * Updates the RecaptchaV3Config for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA V3 tokens for App Check tokens. For security reasons, the `site_secret` field is never populated in the response.
     * @param {string} params.name - (Required) Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ```
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the RecaptchaV3Config to update. Example: `site_secret`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.recaptchaV3Config.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.apps.recaptchaEnterpriseConfig = {};

    /**
     * Gets the RecaptchaEnterpriseConfig for the specified app.
     * @param {string} params.name - (Required) Required. The relative resource name of the RecaptchaEnterpriseConfig, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ```
     * @return {object} The API response object.
     */
    this.projects.apps.recaptchaEnterpriseConfig.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
     * @param {string} params.names - Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} params.parent - (Required) Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @return {object} The API response object.
     */
    this.projects.apps.recaptchaEnterpriseConfig.batchGet = (params) => this._makeRequest('v1/{+parent}/apps/-/recaptchaEnterpriseConfig:batchGet', 'GET', params);

    /**
     * Updates the RecaptchaEnterpriseConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA Enterprise tokens for App Check tokens.
     * @param {string} params.name - (Required) Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ```
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the RecaptchaEnterpriseConfig to update. Example: `site_key`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.recaptchaEnterpriseConfig.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.apps.safetyNetConfig = {};

    /**
     * Gets the SafetyNetConfig for the specified app.
     * @param {string} params.name - (Required) Required. The relative resource name of the SafetyNetConfig, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ```
     * @return {object} The API response object.
     */
    this.projects.apps.safetyNetConfig.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Atomically gets the SafetyNetConfigs for the specified list of apps.
     * @param {string} params.names - Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} params.parent - (Required) Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @return {object} The API response object.
     */
    this.projects.apps.safetyNetConfig.batchGet = (params) => this._makeRequest('v1/{+parent}/apps/-/safetyNetConfig:batchGet', 'GET', params);

    /**
     * Updates the SafetyNetConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange SafetyNet tokens for App Check tokens.
     * @param {string} params.name - (Required) Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ```
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the SafetyNetConfig to update. Example: `token_ttl`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.safetyNetConfig.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.apps.playIntegrityConfig = {};

    /**
     * Gets the PlayIntegrityConfig for the specified app.
     * @param {string} params.name - (Required) Required. The relative resource name of the PlayIntegrityConfig, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ```
     * @return {object} The API response object.
     */
    this.projects.apps.playIntegrityConfig.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Atomically gets the PlayIntegrityConfigs for the specified list of apps.
     * @param {string} params.names - Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} params.parent - (Required) Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @return {object} The API response object.
     */
    this.projects.apps.playIntegrityConfig.batchGet = (params) => this._makeRequest('v1/{+parent}/apps/-/playIntegrityConfig:batchGet', 'GET', params);

    /**
     * Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens.
     * @param {string} params.name - (Required) Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ```
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the PlayIntegrityConfig to update. Example: `token_ttl`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.playIntegrityConfig.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.apps.debugTokens = {};

    /**
     * Gets the specified DebugToken. For security reasons, the `token` field is never populated in the response.
     * @param {string} params.name - (Required) Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
     * @return {object} The API response object.
     */
    this.projects.apps.debugTokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
     * @param {integer} params.pageSize - The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     * @param {string} params.pageToken - Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.
     * @param {string} params.parent - (Required) Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ```
     * @return {object} The API response object.
     */
    this.projects.apps.debugTokens.list = (params) => this._makeRequest('v1/{+parent}/debugTokens', 'GET', params);

    /**
     * Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
     * @param {string} params.parent - (Required) Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ```
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.debugTokens.create = (params) => this._makeRequest('v1/{+parent}/debugTokens', 'POST', params);

    /**
     * Updates the specified DebugToken. For security reasons, the `token` field cannot be updated, nor will it be populated in the response, but you can revoke the debug token using DeleteDebugToken.
     * @param {string} params.name - (Required) Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
     * @param {string} params.updateMask - Required. A comma-separated list of names of fields in the DebugToken to update. Example: `display_name`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.debugTokens.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
     * @param {string} params.name - (Required) Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
     * @return {object} The API response object.
     */
    this.projects.apps.debugTokens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.jwks = {};

    /**
     * Returns a public JWK set as specified by [RFC 7517](https://tools.ietf.org/html/rfc7517) that can be used to verify App Check tokens. Exactly one of the public keys in the returned set will successfully validate any App Check token that is currently valid.
     * @param {string} params.name - (Required) Required. The relative resource name to the public JWK set. Must always be exactly the string `jwks`.
     * @return {object} The API response object.
     */
    this.jwks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.oauthClients = {};

    /**
     * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
     * @param {string} params.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.oauthClients.exchangeDebugToken = (params) => this._makeRequest('v1/{+app}:exchangeDebugToken', 'POST', params);

    /**
     * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
     * @param {string} params.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.oauthClients.generateAppAttestChallenge = (params) => this._makeRequest('v1/{+app}:generateAppAttestChallenge', 'POST', params);

    /**
     * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
     * @param {string} params.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.oauthClients.exchangeAppAttestAttestation = (params) => this._makeRequest('v1/{+app}:exchangeAppAttestAttestation', 'POST', params);

    /**
     * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
     * @param {string} params.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.oauthClients.exchangeAppAttestAssertion = (params) => this._makeRequest('v1/{+app}:exchangeAppAttestAssertion', 'POST', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
