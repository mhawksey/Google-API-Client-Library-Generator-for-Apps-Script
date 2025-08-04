
/**
 * Google Apps Script client library for the Application Integration API
 * Documentation URL: https://cloud.google.com/application-integration
 * @class
 */
class Integrations {
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
    this._rootUrl = 'https://integrations.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Gets the metadata info for the requested client
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @return {object} The API response object.
     */
    this.projects.getClientmetadata = (params) => this._makeRequest('v1/{+parent}/clientmetadata', 'GET', params);

    this.projects.locations = {};

    /**
     * Gets the client configuration for the given project and location resource name
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @return {object} The API response object.
     */
    this.projects.locations.getClients = (params) => this._makeRequest('v1/{+parent}/clients', 'GET', params);

    /**
     * Generate OpenAPI spec for the requested integrations and api triggers
     * @param {string} params.name - (Required) Required. Project and location from which the integrations should be fetched. Format: projects/{project}/location/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.generateOpenApiSpec = (params) => this._makeRequest('v1/{+name}:generateOpenApiSpec', 'POST', params);

    this.projects.locations.appsScriptProjects = {};

    /**
     * Links a existing Apps Script project.
     * @param {string} params.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appsScriptProjects.link = (params) => this._makeRequest('v1/{+parent}/appsScriptProjects:link', 'POST', params);

    /**
     * Creates an Apps Script project.
     * @param {string} params.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appsScriptProjects.create = (params) => this._makeRequest('v1/{+parent}/appsScriptProjects', 'POST', params);

    this.projects.locations.clients = {};

    /**
     * Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.provision = (params) => this._makeRequest('v1/{+parent}/clients:provision', 'POST', params);

    /**
     * Perform post provisioning steps after client is provisioned.
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.provisionClientPostProcessor = (params) => this._makeRequest('v1/{+parent}/clients:provisionClientPostProcessor', 'POST', params);

    /**
     * Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be deprovisioned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.deprovision = (params) => this._makeRequest('v1/{+parent}/clients:deprovision', 'POST', params);

    /**
     * Updates the client customer configuration for the given project and location resource name
     * @param {string} params.parent - (Required) Required. Required: Format - projects/{project}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.changeConfig = (params) => this._makeRequest('v1/{+parent}/clients:changeConfig', 'POST', params);

    /**
     * Update client from GMEK to CMEK
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.switch = (params) => this._makeRequest('v1/{+parent}/clients:switch', 'POST', params);

    /**
     * Update run-as service account for provisioned client
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.replace = (params) => this._makeRequest('v1/{+parent}/clients:replace', 'POST', params);

    /**
     * Update variable masking for provisioned client
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.switchVariableMasking = (params) => this._makeRequest('v1/{+parent}/clients:switchVariableMasking', 'POST', params);

    /**
     * Enable/Disable http call for provisioned client
     * @param {string} params.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clients.toggleHttp = (params) => this._makeRequest('v1/{+parent}/clients:toggleHttp', 'POST', params);

    this.projects.locations.products = {};

    this.projects.locations.products.cloudFunctions = {};

    /**
     * Creates a cloud function project.
     * @param {string} params.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.cloudFunctions.create = (params) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', params);

    this.projects.locations.products.certificates = {};

    /**
     * List all the certificates that match the filter. Restrict to certificate of current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of Certificates.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the Certificate's response.
     * @return {object} The API response object.
     */
    this.projects.locations.products.certificates.list = (params) => this._makeRequest('v1/{+parent}/certificates', 'GET', params);

    /**
     * Get a certificates in the specified project.
     * @param {string} params.name - (Required) Required. The certificate to retrieve. Format: projects/{project}/locations/{location}/certificates/{certificate}
     * @return {object} The API response object.
     */
    this.projects.locations.products.certificates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.certificates.create = (params) => this._makeRequest('v1/{+parent}/certificates', 'POST', params);

    /**
     * Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.
     * @param {string} params.name - (Required) Output only. Auto generated primary key
     * @param {string} params.updateMask - Field mask specifying the fields in the above Certificate that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.certificates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a certificate
     * @param {string} params.name - (Required) Required. The name that is associated with the Certificate.
     * @return {object} The API response object.
     */
    this.projects.locations.products.certificates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.products.authConfigs = {};

    /**
     * Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
     * @param {string} params.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} params.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.authConfigs.create = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', params);

    /**
     * Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.
     * @param {string} params.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} params.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.name - (Required) Resource name of the auth config. For more information, see Manage authentication profiles. projects/{project}/locations/{location}/authConfigs/{authConfig}.
     * @param {string} params.updateMask - Field mask specifying the fields in the above AuthConfig that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.authConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an auth config.
     * @param {string} params.name - (Required) Required. The name that is associated with the AuthConfig.
     * @return {object} The API response object.
     */
    this.projects.locations.products.authConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.
     * @param {string} params.name - (Required) Required. The name that is associated with the AuthConfig.
     * @return {object} The API response object.
     */
    this.projects.locations.products.authConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of AuthConfigs.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the AuthConfig's response.
     * @return {object} The API response object.
     */
    this.projects.locations.products.authConfigs.list = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', params);

    this.projects.locations.products.integrations = {};

    /**
     * Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
     * @param {string} params.name - (Required) Required. The integration resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.execute = (params) => this._makeRequest('v1/{+name}:execute', 'POST', params);

    /**
     * Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
     * @param {string} params.name - (Required) The integration resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.schedule = (params) => this._makeRequest('v1/{+name}:schedule', 'POST', params);

    /**
     * Execute the integration in draft state
     * @param {string} params.name - (Required) Output only. Auto-generated primary key.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.test = (params) => this._makeRequest('v1/{+name}:test', 'POST', params);

    /**
     * Returns the list of all integrations in the specified project.
     * @param {string} params.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} params.orderBy - The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name.
     * @param {integer} params.pageSize - The page size for the resquest.
     * @param {string} params.pageToken - The page token for the resquest.
     * @param {string} params.parent - (Required) Required. Project and location from which the integrations should be listed. Format: projects/{project}
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.list = (params) => this._makeRequest('v1/{+parent}/integrations', 'GET', params);

    this.projects.locations.products.integrations.versions = {};

    /**
     * Returns the list of all integration versions in the specified project.
     * @param {string} params.fieldMask - The field mask which specifies the particular data to be returned.
     * @param {string} params.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} params.orderBy - The results would be returned in order you specified here. Currently supported sort keys are: Descending sort order for "last\_modified\_time", "created\_time", and "snapshot\_number". Ascending sort order for `name`.
     * @param {integer} params.pageSize - The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListIntegrationVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationVersions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} Specifically, when parent equals: 1. projects//locations//integrations/, Meaning: "List versions (with filter) for a particular integration". 2. projects//locations//integrations/- Meaning: "List versions (with filter) for a client within a particular region".
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Create a integration with a draft version in the specified project.
     * @param {boolean} params.createSampleIntegrations - Optional. Optional. Indicates if sample workflow should be created.
     * @param {boolean} params.newIntegration - Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created.
     * @param {string} params.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Update a integration with a draft version in the specified project.
     * @param {string} params.name - (Required) Output only. Auto-generated primary key.
     * @param {string} params.updateMask - Field mask specifying the fields in the above integration that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Get a integration in the specified project.
     * @param {string} params.name - (Required) Required. The version to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
     * @param {string} params.name - (Required) Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);

    /**
     * Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.
     * @param {string} params.name - (Required) Required. The version to delete. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
     * @param {string} params.parent - (Required) Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.upload = (params) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', params);

    /**
     * Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
     * @param {string} params.fileFormat - File format for download request.
     * @param {string} params.files - Optional. Integration related file to download like Integration Json, Config variable, testcase etc.
     * @param {string} params.name - (Required) Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    /**
     * Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
     * @param {string} params.integrationVersion - (Required) Required. The version to take over edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.takeoverEditLock = (params) => this._makeRequest('v1/{+integrationVersion}:takeoverEditLock', 'POST', params);

    /**
     * Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
     * @param {string} params.name - (Required) Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.versions.unpublish = (params) => this._makeRequest('v1/{+name}:unpublish', 'POST', params);

    this.projects.locations.products.integrations.executions = {};

    /**
     * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
     * @param {string} params.filter - Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\"
     * @param {string} params.filterParams.customFilter - Optional user-provided custom filter.
     * @param {string} params.filterParams.endTime - End timestamp.
     * @param {string} params.filterParams.eventStatuses - List of possible event statuses.
     * @param {string} params.filterParams.executionId - Execution id.
     * @param {string} params.filterParams.parameterKey - Param key. DEPRECATED. User parameter_pair_key instead.
     * @param {string} params.filterParams.parameterPairKey - Param key in the key value pair filter.
     * @param {string} params.filterParams.parameterPairValue - Param value in the key value pair filter.
     * @param {string} params.filterParams.parameterType - Param type.
     * @param {string} params.filterParams.parameterValue - Param value. DEPRECATED. User parameter_pair_value instead.
     * @param {string} params.filterParams.startTime - Start timestamp.
     * @param {string} params.filterParams.taskStatuses - List of possible task statuses.
     * @param {string} params.filterParams.workflowName - Workflow name.
     * @param {string} params.orderBy - Optional. The results would be returned in order you specified here. Currently supporting "create_time".
     * @param {integer} params.pageSize - Optional. The size of entries in the response.
     * @param {string} params.pageToken - Optional. The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The parent resource name of the integration execution.
     * @param {string} params.readMask - Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in Execution will be filled and returned. Supported fields: trigger_id execution_method create_time update_time execution_details execution_details.state execution_details.execution_snapshots execution_details.attempt_stats execution_details.event_execution_snapshots_size request_parameters cloud_logging_details snapshot_number replay_info
     * @param {boolean} params.refreshAcl - Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.
     * @param {boolean} params.snapshotMetadataWithoutParams - Optional. If true, the service will provide execution info with snapshot metadata only i.e. without event parameters.
     * @param {boolean} params.truncateParams - Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);

    /**
     * Get an execution in the specified project.
     * @param {string} params.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Download the execution.
     * @param {string} params.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.executions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    this.projects.locations.products.integrations.executions.suspensions = {};

    /**
     * * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
     * @param {string} params.name - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.executions.suspensions.resolve = (params) => this._makeRequest('v1/{+name}:resolve', 'POST', params);

    /**
     * * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
     * @param {string} params.filter - Standard filter field.
     * @param {string} params.orderBy - Field name to order by.
     * @param {integer} params.pageSize - Maximum number of entries in the response.
     * @param {string} params.pageToken - Token to retrieve a specific page.
     * @param {string} params.parent - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.executions.suspensions.list = (params) => this._makeRequest('v1/{+parent}/suspensions', 'GET', params);

    /**
     * * Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
     * @param {string} params.name - (Required) Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.integrations.executions.suspensions.lift = (params) => this._makeRequest('v1/{+name}:lift', 'POST', params);

    this.projects.locations.products.sfdcInstances = {};

    /**
     * Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.create = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', params);

    /**
     * Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.
     * @param {string} params.name - (Required) Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.
     * @param {string} params.updateMask - Field mask specifying the fields in the above SfdcInstance that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an sfdc instance.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of SfdcInstances.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the SfdcInstance's response.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.list = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', params);

    this.projects.locations.products.sfdcInstances.sfdcChannels = {};

    /**
     * Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.create = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', params);

    /**
     * Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
     * @param {string} params.name - (Required) Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
     * @param {string} params.updateMask - Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an sfdc channel.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of SfdcChannels.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the SfdcChannel's response.
     * @return {object} The API response object.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.list = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', params);

    this.projects.locations.cloudFunctions = {};

    /**
     * Creates a cloud function project.
     * @param {string} params.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.cloudFunctions.create = (params) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', params);

    this.projects.locations.certificates = {};

    /**
     * List all the certificates that match the filter. Restrict to certificate of current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of Certificates.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the Certificate's response.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.list = (params) => this._makeRequest('v1/{+parent}/certificates', 'GET', params);

    /**
     * Get a certificates in the specified project.
     * @param {string} params.name - (Required) Required. The certificate to retrieve. Format: projects/{project}/locations/{location}/certificates/{certificate}
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.create = (params) => this._makeRequest('v1/{+parent}/certificates', 'POST', params);

    /**
     * Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.
     * @param {string} params.name - (Required) Output only. Auto generated primary key
     * @param {string} params.updateMask - Field mask specifying the fields in the above Certificate that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a certificate
     * @param {string} params.name - (Required) Required. The name that is associated with the Certificate.
     * @return {object} The API response object.
     */
    this.projects.locations.certificates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authConfigs = {};

    /**
     * Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
     * @param {string} params.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} params.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authConfigs.create = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', params);

    /**
     * Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.
     * @param {string} params.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} params.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} params.name - (Required) Resource name of the auth config. For more information, see Manage authentication profiles. projects/{project}/locations/{location}/authConfigs/{authConfig}.
     * @param {string} params.updateMask - Field mask specifying the fields in the above AuthConfig that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an auth config.
     * @param {string} params.name - (Required) Required. The name that is associated with the AuthConfig.
     * @return {object} The API response object.
     */
    this.projects.locations.authConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.
     * @param {string} params.name - (Required) Required. The name that is associated with the AuthConfig.
     * @return {object} The API response object.
     */
    this.projects.locations.authConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of AuthConfigs.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the AuthConfig's response.
     * @return {object} The API response object.
     */
    this.projects.locations.authConfigs.list = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', params);

    this.projects.locations.connections = {};

    /**
     * Lists Connections in a given project and location.
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the Connection, of the form: `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);

    /**
     * Lists the available entities and actions associated with a Connection.
     * @param {string} params.name - (Required) Required. ConnectionSchemaMetadata name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @return {object} The API response object.
     */
    this.projects.locations.connections.getConnectionSchemaMetadata = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.connections.runtimeEntitySchemas = {};

    /**
     * Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
     * @param {string} params.filter - Filter. Only the entity field with literal equality operator is supported.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of RuntimeEntitySchema. Format: projects/{project}/locations/{location}/connections/{connection}
     * @return {object} The API response object.
     */
    this.projects.locations.connections.runtimeEntitySchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeEntitySchemas', 'GET', params);

    this.projects.locations.connections.runtimeActionSchemas = {};

    /**
     * Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
     * @param {string} params.filter - Filter. Only the action field with literal equality operator is supported.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of RuntimeActionSchema. Format: projects/{project}/locations/{location}/connections/{connection}
     * @return {object} The API response object.
     */
    this.projects.locations.connections.runtimeActionSchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeActionSchemas', 'GET', params);

    this.projects.locations.integrations = {};

    /**
     * Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
     * @param {string} params.name - (Required) Required. The integration resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.execute = (params) => this._makeRequest('v1/{+name}:execute', 'POST', params);

    /**
     * Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
     * @param {string} params.name - (Required) The integration resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.schedule = (params) => this._makeRequest('v1/{+name}:schedule', 'POST', params);

    /**
     * Executes an integration on receiving events from Integration Connector triggers, Eventarc or CPS Trigger. Input data to integration is received in body in json format
     * @param {string} params.name - (Required) Required. The integration resource name. Format: projects/{gcp_project_id}/locations/{location}/integrations/{integration_id}
     * @param {string} params.triggerId - Required. Id of the integration trigger config. The trigger_id is in the format: `integration_connector_trigger/projects/{gcp_project_id}/location/{location}/connections/{connection_name}/subscriptions/{subscription_name}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executeEvent = (params) => this._makeRequest('v1/{+name}:executeEvent', 'POST', params);

    /**
     * Execute the integration in draft state
     * @param {string} params.name - (Required) Output only. Auto-generated primary key.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.test = (params) => this._makeRequest('v1/{+name}:test', 'POST', params);

    /**
     * Returns the list of all integrations in the specified project.
     * @param {string} params.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} params.orderBy - The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name.
     * @param {integer} params.pageSize - The page size for the resquest.
     * @param {string} params.pageToken - The page token for the resquest.
     * @param {string} params.parent - (Required) Required. Project and location from which the integrations should be listed. Format: projects/{project}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.list = (params) => this._makeRequest('v1/{+parent}/integrations', 'GET', params);

    /**
     * Searches and returns the list of integrations in the specified project.
     * @param {boolean} params.enableNaturalLanguageQueryUnderstanding - Optional. Whether to enable natural language query understanding.
     * @param {string} params.filter - Optional. The pre-filter to be applied to the search. This should follow the expressions defined in https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. For example, "status:ANY("ACTIVE")" will return all the resources whose status contains the "ACTIVE".
     * @param {integer} params.pageSize - Optional. The maximum number of results to return. The service may return fewer than this value. If unspecified, at most 10 results will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `SearchIntegrations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchIntegrations` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Project and location from which the integrations should be listed. Format: projects/*\/locations/*\/resources/integrations
     * @param {string} params.query - Required. The user query
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.search = (params) => this._makeRequest('v1/{+parent}/integrations:search', 'GET', params);

    /**
     * Delete the selected integration and all versions inside
     * @param {string} params.name - (Required) Required. The location resource of the request.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.integrations.versions = {};

    /**
     * Returns the list of all integration versions in the specified project.
     * @param {string} params.fieldMask - The field mask which specifies the particular data to be returned.
     * @param {string} params.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} params.orderBy - The results would be returned in order you specified here. Currently supported sort keys are: Descending sort order for "last\_modified\_time", "created\_time", and "snapshot\_number". Ascending sort order for `name`.
     * @param {integer} params.pageSize - The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListIntegrationVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationVersions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} Specifically, when parent equals: 1. projects//locations//integrations/, Meaning: "List versions (with filter) for a particular integration". 2. projects//locations//integrations/- Meaning: "List versions (with filter) for a client within a particular region".
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Create a integration with a draft version in the specified project.
     * @param {boolean} params.createSampleIntegrations - Optional. Optional. Indicates if sample workflow should be created.
     * @param {boolean} params.newIntegration - Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created.
     * @param {string} params.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Update a integration with a draft version in the specified project.
     * @param {string} params.name - (Required) Output only. Auto-generated primary key.
     * @param {string} params.updateMask - Field mask specifying the fields in the above integration that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Get a integration in the specified project.
     * @param {string} params.name - (Required) Required. The version to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
     * @param {string} params.name - (Required) Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);

    /**
     * Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.
     * @param {string} params.name - (Required) Required. The version to delete. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
     * @param {string} params.parent - (Required) Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.upload = (params) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', params);

    /**
     * Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
     * @param {string} params.fileFormat - File format for download request.
     * @param {string} params.files - Optional. Integration related file to download like Integration Json, Config variable, testcase etc.
     * @param {string} params.name - (Required) Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    /**
     * Downloads an Integration version package like IntegrationVersion,Integration Config etc. Retrieves the IntegrationVersion package for a given `integration_id` and returns the response as a JSON.
     * @param {string} params.files - Optional. Integration related file to download like Integration Version, Config variable, testcase etc.
     * @param {string} params.name - (Required) Required. Integration version name Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.downloadJsonPackage = (params) => this._makeRequest('v1/{+name}:downloadJsonPackage', 'GET', params);

    /**
     * Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
     * @param {string} params.name - (Required) Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.unpublish = (params) => this._makeRequest('v1/{+name}:unpublish', 'POST', params);

    this.projects.locations.integrations.versions.testCases = {};

    /**
     * Creates a new test case
     * @param {string} params.parent - (Required) Required. The parent resource where this test case will be created. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}
     * @param {string} params.testCaseId - Required. Required
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.create = (params) => this._makeRequest('v1/{+parent}/testCases', 'POST', params);

    /**
     * Get a test case
     * @param {string} params.name - (Required) Required. The ID of the test case to retrieve
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a test case
     * @param {string} params.name - (Required) Output only. Auto-generated primary key.
     * @param {string} params.updateMask - Optional. Field mask specifying the fields in the above integration that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a test case
     * @param {string} params.name - (Required) Required. ID for the test case to be deleted
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all the test cases that satisfy the filters.
     * @param {string} params.filter - Optional. Standard filter field. Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {string} params.orderBy - Optional. The results would be returned in order specified here. Currently supported sort keys are: Descending sort order for "last_modified_time", "created_time". Ascending sort order for "name".
     * @param {integer} params.pageSize - Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 100 test cases will be returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent resource where this TestCase was created.
     * @param {string} params.readMask - Optional. The mask which specifies fields that need to be returned in the TestCases's response.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.list = (params) => this._makeRequest('v1/{+parent}/testCases', 'GET', params);

    /**
     * Executes functional test
     * @param {string} params.testCaseName - (Required) Required. Test case resource name
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.executeTest = (params) => this._makeRequest('v1/{+testCaseName}:executeTest', 'POST', params);

    /**
     * Uploads a test case. The content can be a previously downloaded test case. Performs the same function as CreateTestCase, but accepts input in a string format, which holds the complete representation of the TestCase content.
     * @param {string} params.parent - (Required) Required. The test case to upload. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.upload = (params) => this._makeRequest('v1/{+parent}/testCases:upload', 'POST', params);

    /**
     * Downloads a test case. Retrieves the `TestCase` for a given `test_case_id` and returns the response as a string.
     * @param {string} params.fileFormat - File format for download request.
     * @param {string} params.name - (Required) Required. The test case to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}/testCases/{test_case_id}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    /**
     * Clear the lock fields and assign them to current user
     * @param {string} params.name - (Required) Required. The ID of test case to takeover edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}/testCases/{test_case_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.takeoverEditLock = (params) => this._makeRequest('v1/{+name}:takeoverEditLock', 'POST', params);

    /**
     * Executes all test cases in an integration version.
     * @param {string} params.parent - (Required) Required. The parent resource whose test cases are executed. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.versions.testCases.execute = (params) => this._makeRequest('v1/{+parent}/testCases:execute', 'POST', params);

    this.projects.locations.integrations.executions = {};

    /**
     * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
     * @param {string} params.filter - Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\"
     * @param {string} params.filterParams.customFilter - Optional user-provided custom filter.
     * @param {string} params.filterParams.endTime - End timestamp.
     * @param {string} params.filterParams.eventStatuses - List of possible event statuses.
     * @param {string} params.filterParams.executionId - Execution id.
     * @param {string} params.filterParams.parameterKey - Param key. DEPRECATED. User parameter_pair_key instead.
     * @param {string} params.filterParams.parameterPairKey - Param key in the key value pair filter.
     * @param {string} params.filterParams.parameterPairValue - Param value in the key value pair filter.
     * @param {string} params.filterParams.parameterType - Param type.
     * @param {string} params.filterParams.parameterValue - Param value. DEPRECATED. User parameter_pair_value instead.
     * @param {string} params.filterParams.startTime - Start timestamp.
     * @param {string} params.filterParams.taskStatuses - List of possible task statuses.
     * @param {string} params.filterParams.workflowName - Workflow name.
     * @param {string} params.orderBy - Optional. The results would be returned in order you specified here. Currently supporting "create_time".
     * @param {integer} params.pageSize - Optional. The size of entries in the response.
     * @param {string} params.pageToken - Optional. The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The parent resource name of the integration execution.
     * @param {string} params.readMask - Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in Execution will be filled and returned. Supported fields: trigger_id execution_method create_time update_time execution_details execution_details.state execution_details.execution_snapshots execution_details.attempt_stats execution_details.event_execution_snapshots_size request_parameters cloud_logging_details snapshot_number replay_info
     * @param {boolean} params.refreshAcl - Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.
     * @param {boolean} params.snapshotMetadataWithoutParams - Optional. If true, the service will provide execution info with snapshot metadata only i.e. without event parameters.
     * @param {boolean} params.truncateParams - Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);

    /**
     * Get an execution in the specified project.
     * @param {string} params.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Cancellation of an execution and associated sub-executions. This will not cancel an IN_PROCESS or completed(SUCCESSFUL, FAILED or CANCELLED) executions.
     * @param {string} params.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Download the execution.
     * @param {string} params.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    /**
     * Re-execute an existing execution, with same request parameters and execution strategy.
     * @param {string} params.name - (Required) Required. Next ID: 6 The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/integrations/{integration}/executions/{execution_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.replay = (params) => this._makeRequest('v1/{+name}:replay', 'POST', params);

    this.projects.locations.integrations.executions.suspensions = {};

    /**
     * * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
     * @param {string} params.name - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.suspensions.resolve = (params) => this._makeRequest('v1/{+name}:resolve', 'POST', params);

    /**
     * * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
     * @param {string} params.filter - Standard filter field.
     * @param {string} params.orderBy - Field name to order by.
     * @param {integer} params.pageSize - Maximum number of entries in the response.
     * @param {string} params.pageToken - Token to retrieve a specific page.
     * @param {string} params.parent - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.suspensions.list = (params) => this._makeRequest('v1/{+parent}/suspensions', 'GET', params);

    /**
     * * Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
     * @param {string} params.name - (Required) Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.integrations.executions.suspensions.lift = (params) => this._makeRequest('v1/{+name}:lift', 'POST', params);

    this.projects.locations.sfdcInstances = {};

    /**
     * Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.create = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', params);

    /**
     * Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.
     * @param {string} params.name - (Required) Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.
     * @param {string} params.updateMask - Field mask specifying the fields in the above SfdcInstance that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an sfdc instance.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of SfdcInstances.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the SfdcInstance's response.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.list = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', params);

    this.projects.locations.sfdcInstances.sfdcChannels = {};

    /**
     * Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.create = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', params);

    /**
     * Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
     * @param {string} params.name - (Required) Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
     * @param {string} params.updateMask - Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an sfdc channel.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {string} params.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
     * @param {string} params.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} params.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} params.pageToken - The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of SfdcChannels.
     * @param {string} params.readMask - The mask which specifies fields that need to be returned in the SfdcChannel's response.
     * @return {object} The API response object.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.list = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', params);

    this.projects.locations.templates = {};

    /**
     * Lists all templates matching the filter.
     * @param {string} params.filter - Optional. Standard filter field to filter templates. client_id filter won't be supported and will restrict to templates belonging to the current client only. Return all templates of the current client if the filter is empty. Also supports operators like AND, OR, NOT For example, "status=\"ACTIVE\"
     * @param {string} params.orderBy - Optional. The results would be returned in the order you specified here.
     * @param {integer} params.pageSize - Optional. The size of the response entries. If unspecified, defaults to 100. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of Templates.
     * @param {string} params.readMask - Optional. The mask which specifies fields that need to be returned in the template's response.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.list = (params) => this._makeRequest('v1/{+parent}/templates', 'GET', params);

    /**
     * Get a template in the specified project.
     * @param {string} params.name - (Required) Required. The template to retrieve. Format: projects/{project}/locations/{location}/templates/{template}
     * @return {object} The API response object.
     */
    this.projects.locations.templates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new template
     * @param {string} params.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.create = (params) => this._makeRequest('v1/{+parent}/templates', 'POST', params);

    /**
     * Updates the template by given id.
     * @param {string} params.name - (Required) Identifier. Resource name of the template.
     * @param {string} params.updateMask - Required. Field mask specifying the fields in the above template that have been modified and must be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a template
     * @param {string} params.name - (Required) Required. The name that is associated with the Template.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Search templates based on user query and filters. This api would query the templates and return a list of templates based on the user filter.
     * @param {boolean} params.enableNaturalLanguageQueryUnderstanding - Optional. Whether to enable natural language query understanding.
     * @param {string} params.filter - Optional. Standard filter field to filter templates. client_id filter won't be supported and will restrict to templates belonging to the current client only. Return all templates of the current client if the filter is empty. Also supports operators like AND, OR, NOT For example, "status=\"ACTIVE\"
     * @param {string} params.orderBy - Optional. The results would be returned in the order you specified here.
     * @param {integer} params.pageSize - Optional. The size of the response entries. If unspecified, defaults to 100. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. The token returned in the previous response.
     * @param {string} params.parent - (Required) Required. The client, which owns this collection of Templates.
     * @param {string} params.query - Optional. The search query that will be passed to Vertex search service.
     * @param {string} params.readMask - Optional. The mask which specifies fields that need to be returned in the template's response.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.search = (params) => this._makeRequest('v1/{+parent}/templates:search', 'GET', params);

    /**
     * Use the template to create integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.
     * @param {string} params.name - (Required) Required. The name that is associated with the Template.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.use = (params) => this._makeRequest('v1/{+name}:use', 'POST', params);

    /**
     * Import the template to an existing integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.
     * @param {string} params.name - (Required) Required. The name that is associated with the Template.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.import = (params) => this._makeRequest('v1/{+name}:import', 'POST', params);

    /**
     * Share a template with other clients. Only the template owner can share the templates with other projects. PERMISSION_DENIED would be thrown if the request is not from the owner.
     * @param {string} params.name - (Required) Required. The name that is associated with the Template.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.share = (params) => this._makeRequest('v1/{+name}:share', 'POST', params);

    /**
     * Unshare a template from given clients. Owner of the template can unshare template with clients. Shared client can only unshare the template from itself. PERMISSION_DENIED would be thrown if request is not from owner or for unsharing itself.
     * @param {string} params.name - (Required) Required. The name that is associated with the Template.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.unshare = (params) => this._makeRequest('v1/{+name}:unshare', 'POST', params);

    /**
     * Uploads a template. The content can be a previously downloaded template. Performs the same function as CreateTemplate, but accepts input in a string format, which holds the complete representation of the Template content.
     * @param {string} params.parent - (Required) Required. The template to upload. Format: projects/{project}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.upload = (params) => this._makeRequest('v1/{+parent}/templates:upload', 'POST', params);

    /**
     * Downloads a template. Retrieves the `Template` and returns the response as a string.
     * @param {string} params.fileFormat - Required. File format for download request.
     * @param {string} params.name - (Required) Required. The template to download. Format: projects/{project}/locations/{location}/template/{template_id}
     * @return {object} The API response object.
     */
    this.projects.locations.templates.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    this.connectorPlatformRegions = {};

    /**
     * Enumerates the regions for which Connector Platform is provisioned.
     * @return {object} The API response object.
     */
    this.connectorPlatformRegions.enumerate = (params) => this._makeRequest('v1/connectorPlatformRegions:enumerate', 'GET', params);

    this.callback = {};

    /**
     * Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.
     * @param {string} params.code - The auth code for the given request
     * @param {string} params.gcpProjectId - The gcp project id of the request
     * @param {string} params.product - Which product sends the request
     * @param {string} params.redirectUri - Redirect uri of the auth code request
     * @param {string} params.state - The auth config id for the given request
     * @return {object} The API response object.
     */
    this.callback.generateToken = (params) => this._makeRequest('v1/callback:generateToken', 'GET', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
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
