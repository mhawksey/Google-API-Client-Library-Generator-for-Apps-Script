
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebaseappcheck.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.services = {};

    /**
     * Gets the Service configuration for the specified service name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     * @param {string} apiParams.pageToken - Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/services', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified Service configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Atomically updates the specified Service configurations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/services:batchUpdate', 'POST', apiParams, clientConfig);

    this.projects.services.resourcePolicies = {};

    /**
     * Gets the requested ResourcePolicy configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.resourcePolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all ResourcePolicy configurations for the specified project and service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields `enforcement_mode` and `target_resource`, this method does not support the traversal operator (`.`) or the has operator (`:`). Here are some examples of valid filters: * `enforcement_mode = ENFORCED` * `target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` * `enforcement_mode = ENFORCED AND target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"`
     * @param {integer} apiParams.pageSize - The maximum number of ResourcePolicy objects to return in the response. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     * @param {string} apiParams.pageToken - Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicy objects to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the parent Service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.resourcePolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcePolicies', 'GET', apiParams, clientConfig);

    /**
     * Creates the specified ResourcePolicy configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the parent Service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.resourcePolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcePolicies', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified ResourcePolicy configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.resourcePolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified ResourcePolicy configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. This checksum is computed by the server based on the values of fields in the ResourcePolicy object, and can be obtained from the ResourcePolicy object received from the last CreateResourcePolicy, GetResourcePolicy, ListResourcePolicies, UpdateResourcePolicy, or BatchUpdateResourcePolicies call. This etag is strongly validated as defined by RFC 7232.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.resourcePolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Atomically updates the specified ResourcePolicy configurations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent service name, in the format ``` projects/{project_number}/services/{service_id} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.services.resourcePolicies.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcePolicies:batchUpdate', 'POST', apiParams, clientConfig);

    this.projects.apps = {};

    /**
     * Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeSafetyNetToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeSafetyNetToken', 'POST', apiParams, clientConfig);

    /**
     * Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.generatePlayIntegrityChallenge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:generatePlayIntegrityChallenge', 'POST', apiParams, clientConfig);

    /**
     * Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangePlayIntegrityToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangePlayIntegrityToken', 'POST', apiParams, clientConfig);

    /**
     * Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeDeviceCheckToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeDeviceCheckToken', 'POST', apiParams, clientConfig);

    /**
     * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeRecaptchaV3Token = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeRecaptchaV3Token', 'POST', apiParams, clientConfig);

    /**
     * Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeRecaptchaEnterpriseToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeRecaptchaEnterpriseToken', 'POST', apiParams, clientConfig);

    /**
     * Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeCustomToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeCustomToken', 'POST', apiParams, clientConfig);

    /**
     * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeDebugToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeDebugToken', 'POST', apiParams, clientConfig);

    /**
     * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.generateAppAttestChallenge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:generateAppAttestChallenge', 'POST', apiParams, clientConfig);

    /**
     * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeAppAttestAttestation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAttestation', 'POST', apiParams, clientConfig);

    /**
     * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.exchangeAppAttestAssertion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAssertion', 'POST', apiParams, clientConfig);

    this.projects.apps.appAttestConfig = {};

    /**
     * Gets the AppAttestConfig for the specified app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the AppAttestConfig, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.appAttestConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Atomically gets the AppAttestConfigs for the specified list of apps.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} apiParams.parent - (Required) Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.appAttestConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/appAttestConfig:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates the AppAttestConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange AppAttest tokens for App Check tokens.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ```
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the AppAttestConfig to update. Example: `token_ttl`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.appAttestConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.deviceCheckConfig = {};

    /**
     * Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the DeviceCheckConfig, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.deviceCheckConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} apiParams.parent - (Required) Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.deviceCheckConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/deviceCheckConfig:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ```
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the DeviceCheckConfig to update. Example: `key_id,private_key`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.deviceCheckConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.recaptchaV3Config = {};

    /**
     * Gets the RecaptchaV3Config for the specified app. For security reasons, the `site_secret` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the RecaptchaV3Config, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.recaptchaV3Config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} apiParams.parent - (Required) Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.recaptchaV3Config.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/recaptchaV3Config:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates the RecaptchaV3Config for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA V3 tokens for App Check tokens. For security reasons, the `site_secret` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ```
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the RecaptchaV3Config to update. Example: `site_secret`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.recaptchaV3Config.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.recaptchaEnterpriseConfig = {};

    /**
     * Gets the RecaptchaEnterpriseConfig for the specified app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the RecaptchaEnterpriseConfig, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.recaptchaEnterpriseConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} apiParams.parent - (Required) Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.recaptchaEnterpriseConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/recaptchaEnterpriseConfig:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates the RecaptchaEnterpriseConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA Enterprise tokens for App Check tokens.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ```
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the RecaptchaEnterpriseConfig to update. Example: `site_key`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.recaptchaEnterpriseConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.safetyNetConfig = {};

    /**
     * Gets the SafetyNetConfig for the specified app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the SafetyNetConfig, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.safetyNetConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Atomically gets the SafetyNetConfigs for the specified list of apps.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} apiParams.parent - (Required) Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.safetyNetConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/safetyNetConfig:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates the SafetyNetConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange SafetyNet tokens for App Check tokens.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ```
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the SafetyNetConfig to update. Example: `token_ttl`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.safetyNetConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.playIntegrityConfig = {};

    /**
     * Gets the PlayIntegrityConfig for the specified app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the PlayIntegrityConfig, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.playIntegrityConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Atomically gets the PlayIntegrityConfigs for the specified list of apps.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.
     * @param {string} apiParams.parent - (Required) Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.playIntegrityConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/playIntegrityConfig:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ```
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the PlayIntegrityConfig to update. Example: `token_ttl`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.playIntegrityConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.debugTokens = {};

    /**
     * Gets the specified DebugToken. For security reasons, the `token` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.debugTokens.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     * @param {string} apiParams.pageToken - Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.debugTokens.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/debugTokens', 'GET', apiParams, clientConfig);

    /**
     * Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ```
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.debugTokens.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/debugTokens', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified DebugToken. For security reasons, the `token` field cannot be updated, nor will it be populated in the response, but you can revoke the debug token using DeleteDebugToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
     * @param {string} apiParams.updateMask - Required. A comma-separated list of names of fields in the DebugToken to update. Example: `display_name`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.debugTokens.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.apps.debugTokens.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.jwks = {};

    /**
     * Returns a public JWK set as specified by [RFC 7517](https://tools.ietf.org/html/rfc7517) that can be used to verify App Check tokens. Exactly one of the public keys in the returned set will successfully validate any App Check token that is currently valid.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The relative resource name to the public JWK set. Must always be exactly the string `jwks`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jwks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.oauthClients = {};

    /**
     * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.oauthClients.exchangeDebugToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeDebugToken', 'POST', apiParams, clientConfig);

    /**
     * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.oauthClients.generateAppAttestChallenge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:generateAppAttestChallenge', 'POST', apiParams, clientConfig);

    /**
     * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.oauthClients.exchangeAppAttestAttestation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAttestation', 'POST', apiParams, clientConfig);

    /**
     * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.app - (Required) Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.oauthClients.exchangeAppAttestAssertion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAssertion', 'POST', apiParams, clientConfig);
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
