# Firebase App Check API - Apps Script Client Library

Auto-generated client library for using the **Firebase App Check API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:24:54 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:24:54 GMT
- **Created:** Sun, 20 Jul 2025 16:33:10 GMT



---

## API Reference

### `projects`

### `projects.services`

#### `projects.services.get()`

Gets the Service configuration for the specified service name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS) |

#### `projects.services.list()`

Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ``` |
| `params.pageSize` | `integer` | No | The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. |
| `params.pageToken` | `string` | No | Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined. |

#### `projects.services.patch()`

Updates the specified Service configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS) |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.services.batchUpdate()`

Atomically updates the specified Service configurations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.services.resourcePolicies`

#### `projects.services.resourcePolicies.get()`

Gets the requested ResourcePolicy configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) |

#### `projects.services.resourcePolicies.list()`

Lists all ResourcePolicy configurations for the specified project and service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative resource name of the parent Service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) |
| `params.pageSize` | `integer` | No | The maximum number of ResourcePolicy objects to return in the response. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. |
| `params.pageToken` | `string` | No | Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicy objects to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined. |
| `params.filter` | `string` | No | Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields `enforcement_mode` and `target_resource`, this method does not support the traversal operator (`.`) or the has operator (`:`). Here are some examples of valid filters: * `enforcement_mode = ENFORCED` * `target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` * `enforcement_mode = ENFORCED AND target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` |

#### `projects.services.resourcePolicies.create()`

Creates the specified ResourcePolicy configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative resource name of the parent Service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.services.resourcePolicies.patch()`

Updates the specified ResourcePolicy configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID. |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.services.resourcePolicies.delete()`

Deletes the specified ResourcePolicy configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` |
| `params.etag` | `string` | No | The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. This checksum is computed by the server based on the values of fields in the ResourcePolicy object, and can be obtained from the ResourcePolicy object received from the last CreateResourcePolicy, GetResourcePolicy, ListResourcePolicies, UpdateResourcePolicy, or BatchUpdateResourcePolicies call. This etag is strongly validated as defined by RFC 7232. |

#### `projects.services.resourcePolicies.batchUpdate()`

Atomically updates the specified ResourcePolicy configurations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent service name, in the format ``` projects/{project_number}/services/{service_id} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps`

#### `projects.apps.exchangeSafetyNetToken()`

Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.generatePlayIntegrityChallenge()`

Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangePlayIntegrityToken()`

Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangeDeviceCheckToken()`

Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangeRecaptchaV3Token()`

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangeRecaptchaEnterpriseToken()`

Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangeCustomToken()`

Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangeDebugToken()`

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.generateAppAttestChallenge()`

Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangeAppAttestAttestation()`

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.exchangeAppAttestAssertion()`

Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.appAttestConfig`

#### `projects.apps.appAttestConfig.get()`

Gets the AppAttestConfig for the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the AppAttestConfig, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` |

#### `projects.apps.appAttestConfig.batchGet()`

Atomically gets the AppAttestConfigs for the specified list of apps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. |
| `params.names` | `string` | No | Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch. |

#### `projects.apps.appAttestConfig.patch()`

Updates the AppAttestConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange AppAttest tokens for App Check tokens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the AppAttestConfig to update. Example: `token_ttl`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.deviceCheckConfig`

#### `projects.apps.deviceCheckConfig.get()`

Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the DeviceCheckConfig, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` |

#### `projects.apps.deviceCheckConfig.batchGet()`

Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. |
| `params.names` | `string` | No | Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch. |

#### `projects.apps.deviceCheckConfig.patch()`

Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the DeviceCheckConfig to update. Example: `key_id,private_key`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.recaptchaV3Config`

#### `projects.apps.recaptchaV3Config.get()`

Gets the RecaptchaV3Config for the specified app. For security reasons, the `site_secret` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the RecaptchaV3Config, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` |

#### `projects.apps.recaptchaV3Config.batchGet()`

Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. |
| `params.names` | `string` | No | Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch. |

#### `projects.apps.recaptchaV3Config.patch()`

Updates the RecaptchaV3Config for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA V3 tokens for App Check tokens. For security reasons, the `site_secret` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the RecaptchaV3Config to update. Example: `site_secret`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.recaptchaEnterpriseConfig`

#### `projects.apps.recaptchaEnterpriseConfig.get()`

Gets the RecaptchaEnterpriseConfig for the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the RecaptchaEnterpriseConfig, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` |

#### `projects.apps.recaptchaEnterpriseConfig.batchGet()`

Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. |
| `params.names` | `string` | No | Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch. |

#### `projects.apps.recaptchaEnterpriseConfig.patch()`

Updates the RecaptchaEnterpriseConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA Enterprise tokens for App Check tokens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the RecaptchaEnterpriseConfig to update. Example: `site_key`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.safetyNetConfig`

#### `projects.apps.safetyNetConfig.get()`

Gets the SafetyNetConfig for the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the SafetyNetConfig, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` |

#### `projects.apps.safetyNetConfig.batchGet()`

Atomically gets the SafetyNetConfigs for the specified list of apps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. |
| `params.names` | `string` | No | Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch. |

#### `projects.apps.safetyNetConfig.patch()`

Updates the SafetyNetConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange SafetyNet tokens for App Check tokens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the SafetyNetConfig to update. Example: `token_ttl`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.playIntegrityConfig`

#### `projects.apps.playIntegrityConfig.get()`

Gets the PlayIntegrityConfig for the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the PlayIntegrityConfig, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` |

#### `projects.apps.playIntegrityConfig.batchGet()`

Atomically gets the PlayIntegrityConfigs for the specified list of apps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. |
| `params.names` | `string` | No | Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch. |

#### `projects.apps.playIntegrityConfig.patch()`

Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the PlayIntegrityConfig to update. Example: `token_ttl`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.debugTokens`

#### `projects.apps.debugTokens.get()`

Gets the specified DebugToken. For security reasons, the `token` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` |

#### `projects.apps.debugTokens.list()`

Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ``` |
| `params.pageSize` | `integer` | No | The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. |
| `params.pageToken` | `string` | No | Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined. |

#### `projects.apps.debugTokens.create()`

Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ``` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.debugTokens.patch()`

Updates the specified DebugToken. For security reasons, the `token` field cannot be updated, nor will it be populated in the response, but you can revoke the debug token using DeleteDebugToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` |
| `params.updateMask` | `string` | No | Required. A comma-separated list of names of fields in the DebugToken to update. Example: `display_name`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.debugTokens.delete()`

Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` |

### `jwks`

#### `jwks.get()`

Returns a public JWK set as specified by [RFC 7517](https://tools.ietf.org/html/rfc7517) that can be used to verify App Check tokens. Exactly one of the public keys in the returned set will successfully validate any App Check token that is currently valid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name to the public JWK set. Must always be exactly the string `jwks`. |

### `oauthClients`

#### `oauthClients.exchangeDebugToken()`

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `oauthClients.generateAppAttestChallenge()`

Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `oauthClients.exchangeAppAttestAttestation()`

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `oauthClients.exchangeAppAttestAssertion()`

Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. |
| `params.requestBody` | `object` | Yes | The request body. |