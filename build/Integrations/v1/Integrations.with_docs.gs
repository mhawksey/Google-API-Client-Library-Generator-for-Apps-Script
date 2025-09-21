
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://integrations.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * Gets the metadata info for the requested client
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getClientmetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clientmetadata', 'GET', apiParams, clientConfig);

    this.projects.locations = {};

    /**
     * Gets the client configuration for the given project and location resource name
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getClients = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients', 'GET', apiParams, clientConfig);

    /**
     * Generate OpenAPI spec for the requested integrations and api triggers
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Project and location from which the integrations should be fetched. Format: projects/{project}/location/{location}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.generateOpenApiSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateOpenApiSpec', 'POST', apiParams, clientConfig);

    this.projects.locations.appsScriptProjects = {};

    /**
     * Links a existing Apps Script project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.appsScriptProjects.link = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/appsScriptProjects:link', 'POST', apiParams, clientConfig);

    /**
     * Creates an Apps Script project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.appsScriptProjects.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/appsScriptProjects', 'POST', apiParams, clientConfig);

    this.projects.locations.clients = {};

    /**
     * Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.provision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:provision', 'POST', apiParams, clientConfig);

    /**
     * Perform post provisioning steps after client is provisioned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.provisionClientPostProcessor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:provisionClientPostProcessor', 'POST', apiParams, clientConfig);

    /**
     * Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be deprovisioned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.deprovision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:deprovision', 'POST', apiParams, clientConfig);

    /**
     * Updates the client customer configuration for the given project and location resource name
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: Format - projects/{project}/locations/{location}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.changeConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:changeConfig', 'POST', apiParams, clientConfig);

    /**
     * Update client from GMEK to CMEK
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.switch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:switch', 'POST', apiParams, clientConfig);

    /**
     * Update run-as service account for provisioned client
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:replace', 'POST', apiParams, clientConfig);

    /**
     * Update variable masking for provisioned client
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.switchVariableMasking = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:switchVariableMasking', 'POST', apiParams, clientConfig);

    /**
     * Enable/Disable http call for provisioned client
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Required: The ID of the GCP Project to be provisioned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clients.toggleHttp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:toggleHttp', 'POST', apiParams, clientConfig);

    this.projects.locations.products = {};

    this.projects.locations.products.cloudFunctions = {};

    /**
     * Creates a cloud function project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.cloudFunctions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', apiParams, clientConfig);

    this.projects.locations.products.certificates = {};

    /**
     * List all the certificates that match the filter. Restrict to certificate of current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of Certificates.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the Certificate's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.certificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'GET', apiParams, clientConfig);

    /**
     * Get a certificates in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The certificate to retrieve. Format: projects/{project}/locations/{location}/certificates/{certificate}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.certificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.certificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'POST', apiParams, clientConfig);

    /**
     * Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Auto generated primary key
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above Certificate that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.certificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a certificate
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the Certificate.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.certificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.products.authConfigs = {};

    /**
     * Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} apiParams.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.authConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', apiParams, clientConfig);

    /**
     * Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} apiParams.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.name - (Required) Resource name of the auth config. For more information, see Manage authentication profiles. projects/{project}/locations/{location}/authConfigs/{authConfig}.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above AuthConfig that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.authConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the AuthConfig.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.authConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the AuthConfig.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.authConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of AuthConfigs.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the AuthConfig's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.authConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', apiParams, clientConfig);

    this.projects.locations.products.integrations = {};

    /**
     * Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The integration resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:execute', 'POST', apiParams, clientConfig);

    /**
     * Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The integration resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.schedule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:schedule', 'POST', apiParams, clientConfig);

    /**
     * Execute the integration in draft state
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Auto-generated primary key.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.test = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:test', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of all integrations in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} apiParams.orderBy - The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name.
     * @param {integer} apiParams.pageSize - The page size for the resquest.
     * @param {string} apiParams.pageToken - The page token for the resquest.
     * @param {string} apiParams.parent - (Required) Required. Project and location from which the integrations should be listed. Format: projects/{project}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/integrations', 'GET', apiParams, clientConfig);

    this.projects.locations.products.integrations.versions = {};

    /**
     * Returns the list of all integration versions in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fieldMask - The field mask which specifies the particular data to be returned.
     * @param {string} apiParams.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} apiParams.orderBy - The results would be returned in order you specified here. Currently supported sort keys are: Descending sort order for "last\_modified\_time", "created\_time", and "snapshot\_number". Ascending sort order for `name`.
     * @param {integer} apiParams.pageSize - The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListIntegrationVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationVersions` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} Specifically, when parent equals: 1. projects//locations//integrations/, Meaning: "List versions (with filter) for a particular integration". 2. projects//locations//integrations/- Meaning: "List versions (with filter) for a client within a particular region".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Create a integration with a draft version in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.createSampleIntegrations - Optional. Optional. Indicates if sample workflow should be created.
     * @param {boolean} apiParams.newIntegration - Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Update a integration with a draft version in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Auto-generated primary key.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above integration that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get a integration in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);

    /**
     * Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to delete. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', apiParams, clientConfig);

    /**
     * Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileFormat - File format for download request.
     * @param {string} apiParams.files - Optional. Integration related file to download like Integration Json, Config variable, testcase etc.
     * @param {string} apiParams.name - (Required) Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    /**
     * Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.integrationVersion - (Required) Required. The version to take over edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.takeoverEditLock = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+integrationVersion}:takeoverEditLock', 'POST', apiParams, clientConfig);

    /**
     * Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.versions.unpublish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unpublish', 'POST', apiParams, clientConfig);

    this.projects.locations.products.integrations.executions = {};

    /**
     * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\"
     * @param {string} apiParams.filterParams.customFilter - Optional user-provided custom filter.
     * @param {string} apiParams.filterParams.endTime - End timestamp.
     * @param {string} apiParams.filterParams.eventStatuses - List of possible event statuses.
     * @param {string} apiParams.filterParams.executionId - Execution id.
     * @param {string} apiParams.filterParams.parameterKey - Param key. DEPRECATED. User parameter_pair_key instead.
     * @param {string} apiParams.filterParams.parameterPairKey - Param key in the key value pair filter.
     * @param {string} apiParams.filterParams.parameterPairValue - Param value in the key value pair filter.
     * @param {string} apiParams.filterParams.parameterType - Param type.
     * @param {string} apiParams.filterParams.parameterValue - Param value. DEPRECATED. User parameter_pair_value instead.
     * @param {string} apiParams.filterParams.startTime - Start timestamp.
     * @param {string} apiParams.filterParams.taskStatuses - List of possible task statuses.
     * @param {string} apiParams.filterParams.workflowName - Workflow name.
     * @param {string} apiParams.orderBy - Optional. The results would be returned in order you specified here. Currently supporting "create_time".
     * @param {integer} apiParams.pageSize - Optional. The size of entries in the response.
     * @param {string} apiParams.pageToken - Optional. The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name of the integration execution.
     * @param {string} apiParams.readMask - Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in Execution will be filled and returned. Supported fields: trigger_id execution_method create_time update_time execution_details execution_details.state execution_details.execution_snapshots execution_details.attempt_stats execution_details.event_execution_snapshots_size request_parameters cloud_logging_details snapshot_number replay_info
     * @param {boolean} apiParams.refreshAcl - Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.
     * @param {boolean} apiParams.snapshotMetadataWithoutParams - Optional. If true, the service will provide execution info with snapshot metadata only i.e. without event parameters.
     * @param {boolean} apiParams.truncateParams - Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/executions', 'GET', apiParams, clientConfig);

    /**
     * Get an execution in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Download the execution.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.executions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    this.projects.locations.products.integrations.executions.suspensions = {};

    /**
     * * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.executions.suspensions.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resolve', 'POST', apiParams, clientConfig);

    /**
     * * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Standard filter field.
     * @param {string} apiParams.orderBy - Field name to order by.
     * @param {integer} apiParams.pageSize - Maximum number of entries in the response.
     * @param {string} apiParams.pageToken - Token to retrieve a specific page.
     * @param {string} apiParams.parent - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.executions.suspensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/suspensions', 'GET', apiParams, clientConfig);

    /**
     * * Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.integrations.executions.suspensions.lift = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lift', 'POST', apiParams, clientConfig);

    this.projects.locations.products.sfdcInstances = {};

    /**
     * Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', apiParams, clientConfig);

    /**
     * Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above SfdcInstance that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an sfdc instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of SfdcInstances.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the SfdcInstance's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', apiParams, clientConfig);

    this.projects.locations.products.sfdcInstances.sfdcChannels = {};

    /**
     * Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', apiParams, clientConfig);

    /**
     * Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an sfdc channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of SfdcChannels.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the SfdcChannel's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.products.sfdcInstances.sfdcChannels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', apiParams, clientConfig);

    this.projects.locations.cloudFunctions = {};

    /**
     * Creates a cloud function project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the executed integration belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.cloudFunctions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', apiParams, clientConfig);

    this.projects.locations.certificates = {};

    /**
     * List all the certificates that match the filter. Restrict to certificate of current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of Certificates.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the Certificate's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.certificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'GET', apiParams, clientConfig);

    /**
     * Get a certificates in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The certificate to retrieve. Format: projects/{project}/locations/{location}/certificates/{certificate}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.certificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.certificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'POST', apiParams, clientConfig);

    /**
     * Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Auto generated primary key
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above Certificate that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.certificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a certificate
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the Certificate.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.certificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.authConfigs = {};

    /**
     * Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} apiParams.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', apiParams, clientConfig);

    /**
     * Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientCertificate.encryptedPrivateKey - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.clientCertificate.passphrase - 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * @param {string} apiParams.clientCertificate.sslCertificate - The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * @param {string} apiParams.name - (Required) Resource name of the auth config. For more information, see Manage authentication profiles. projects/{project}/locations/{location}/authConfigs/{authConfig}.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above AuthConfig that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the AuthConfig.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the AuthConfig.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of AuthConfigs.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the AuthConfig's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', apiParams, clientConfig);

    this.projects.locations.connections = {};

    /**
     * Lists Connections in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter.
     * @param {string} apiParams.orderBy - Order by parameters.
     * @param {integer} apiParams.pageSize - Page size.
     * @param {string} apiParams.pageToken - Page token.
     * @param {string} apiParams.parent - (Required) Required. Parent resource of the Connection, of the form: `projects/*\/locations/*`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connections', 'GET', apiParams, clientConfig);

    /**
     * Lists the available entities and actions associated with a Connection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. ConnectionSchemaMetadata name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connections.getConnectionSchemaMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.connections.runtimeEntitySchemas = {};

    /**
     * Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter. Only the entity field with literal equality operator is supported.
     * @param {integer} apiParams.pageSize - Page size.
     * @param {string} apiParams.pageToken - Page token.
     * @param {string} apiParams.parent - (Required) Required. Parent resource of RuntimeEntitySchema. Format: projects/{project}/locations/{location}/connections/{connection}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connections.runtimeEntitySchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeEntitySchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.connections.runtimeActionSchemas = {};

    /**
     * Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter. Only the action field with literal equality operator is supported.
     * @param {integer} apiParams.pageSize - Page size.
     * @param {string} apiParams.pageToken - Page token.
     * @param {string} apiParams.parent - (Required) Required. Parent resource of RuntimeActionSchema. Format: projects/{project}/locations/{location}/connections/{connection}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.connections.runtimeActionSchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeActionSchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.integrations = {};

    /**
     * Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The integration resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:execute', 'POST', apiParams, clientConfig);

    /**
     * Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The integration resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.schedule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:schedule', 'POST', apiParams, clientConfig);

    /**
     * Executes an integration on receiving events from Integration Connector triggers, Eventarc or CPS Trigger. Input data to integration is received in body in json format
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The integration resource name. Format: projects/{gcp_project_id}/locations/{location}/integrations/{integration_id}
     * @param {string} apiParams.triggerId - Required. Id of the integration trigger config. The trigger_id is in the format: `integration_connector_trigger/projects/{gcp_project_id}/location/{location}/connections/{connection_name}/subscriptions/{subscription_name}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executeEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:executeEvent', 'POST', apiParams, clientConfig);

    /**
     * Execute the integration in draft state
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Auto-generated primary key.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.test = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:test', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of all integrations in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} apiParams.orderBy - The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name.
     * @param {integer} apiParams.pageSize - The page size for the resquest.
     * @param {string} apiParams.pageToken - The page token for the resquest.
     * @param {string} apiParams.parent - (Required) Required. Project and location from which the integrations should be listed. Format: projects/{project}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/integrations', 'GET', apiParams, clientConfig);

    /**
     * Searches and returns the list of integrations in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enableNaturalLanguageQueryUnderstanding - Optional. Whether to enable natural language query understanding.
     * @param {string} apiParams.filter - Optional. The pre-filter to be applied to the search. This should follow the expressions defined in https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. For example, "status:ANY("ACTIVE")" will return all the resources whose status contains the "ACTIVE".
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return. The service may return fewer than this value. If unspecified, at most 10 results will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `SearchIntegrations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchIntegrations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Project and location from which the integrations should be listed. Format: projects/*\/locations/*\/resources/integrations
     * @param {string} apiParams.query - Required. The user query
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/integrations:search', 'GET', apiParams, clientConfig);

    /**
     * Delete the selected integration and all versions inside
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The location resource of the request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.integrations.versions = {};

    /**
     * Returns the list of all integration versions in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fieldMask - The field mask which specifies the particular data to be returned.
     * @param {string} apiParams.filter - Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
     * @param {string} apiParams.orderBy - The results would be returned in order you specified here. Currently supported sort keys are: Descending sort order for "last\_modified\_time", "created\_time", and "snapshot\_number". Ascending sort order for `name`.
     * @param {integer} apiParams.pageSize - The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListIntegrationVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationVersions` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} Specifically, when parent equals: 1. projects//locations//integrations/, Meaning: "List versions (with filter) for a particular integration". 2. projects//locations//integrations/- Meaning: "List versions (with filter) for a client within a particular region".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Create a integration with a draft version in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.createSampleIntegrations - Optional. Optional. Indicates if sample workflow should be created.
     * @param {boolean} apiParams.newIntegration - Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Update a integration with a draft version in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Auto-generated primary key.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above integration that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get a integration in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);

    /**
     * Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to delete. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', apiParams, clientConfig);

    /**
     * Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileFormat - File format for download request.
     * @param {string} apiParams.files - Optional. Integration related file to download like Integration Json, Config variable, testcase etc.
     * @param {string} apiParams.name - (Required) Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    /**
     * Downloads an Integration version package like IntegrationVersion,Integration Config etc. Retrieves the IntegrationVersion package for a given `integration_id` and returns the response as a JSON.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.files - Optional. Integration related file to download like Integration Version, Config variable, testcase etc.
     * @param {string} apiParams.name - (Required) Required. Integration version name Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.downloadJsonPackage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:downloadJsonPackage', 'GET', apiParams, clientConfig);

    /**
     * Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.unpublish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unpublish', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations.versions.testCases = {};

    /**
     * Creates a new test case
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this test case will be created. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}
     * @param {string} apiParams.testCaseId - Required. Required
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases', 'POST', apiParams, clientConfig);

    /**
     * Get a test case
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The ID of the test case to retrieve
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a test case
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Auto-generated primary key.
     * @param {string} apiParams.updateMask - Optional. Field mask specifying the fields in the above integration that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a test case
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. ID for the test case to be deleted
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all the test cases that satisfy the filters.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Standard filter field. Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {string} apiParams.orderBy - Optional. The results would be returned in order specified here. Currently supported sort keys are: Descending sort order for "last_modified_time", "created_time". Ascending sort order for "name".
     * @param {integer} apiParams.pageSize - Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 100 test cases will be returned.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this TestCase was created.
     * @param {string} apiParams.readMask - Optional. The mask which specifies fields that need to be returned in the TestCases's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases', 'GET', apiParams, clientConfig);

    /**
     * Executes functional test
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.testCaseName - (Required) Required. Test case resource name
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.executeTest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+testCaseName}:executeTest', 'POST', apiParams, clientConfig);

    /**
     * Uploads a test case. The content can be a previously downloaded test case. Performs the same function as CreateTestCase, but accepts input in a string format, which holds the complete representation of the TestCase content.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The test case to upload. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases:upload', 'POST', apiParams, clientConfig);

    /**
     * Downloads a test case. Retrieves the `TestCase` for a given `test_case_id` and returns the response as a string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileFormat - File format for download request.
     * @param {string} apiParams.name - (Required) Required. The test case to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}/testCases/{test_case_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    /**
     * Clear the lock fields and assign them to current user
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The ID of test case to takeover edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}/testCases/{test_case_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.takeoverEditLock = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:takeoverEditLock', 'POST', apiParams, clientConfig);

    /**
     * Executes all test cases in an integration version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource whose test cases are executed. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.versions.testCases.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases:execute', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations.executions = {};

    /**
     * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\"
     * @param {string} apiParams.filterParams.customFilter - Optional user-provided custom filter.
     * @param {string} apiParams.filterParams.endTime - End timestamp.
     * @param {string} apiParams.filterParams.eventStatuses - List of possible event statuses.
     * @param {string} apiParams.filterParams.executionId - Execution id.
     * @param {string} apiParams.filterParams.parameterKey - Param key. DEPRECATED. User parameter_pair_key instead.
     * @param {string} apiParams.filterParams.parameterPairKey - Param key in the key value pair filter.
     * @param {string} apiParams.filterParams.parameterPairValue - Param value in the key value pair filter.
     * @param {string} apiParams.filterParams.parameterType - Param type.
     * @param {string} apiParams.filterParams.parameterValue - Param value. DEPRECATED. User parameter_pair_value instead.
     * @param {string} apiParams.filterParams.startTime - Start timestamp.
     * @param {string} apiParams.filterParams.taskStatuses - List of possible task statuses.
     * @param {string} apiParams.filterParams.workflowName - Workflow name.
     * @param {string} apiParams.orderBy - Optional. The results would be returned in order you specified here. Currently supporting "create_time".
     * @param {integer} apiParams.pageSize - Optional. The size of entries in the response.
     * @param {string} apiParams.pageToken - Optional. The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name of the integration execution.
     * @param {string} apiParams.readMask - Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in Execution will be filled and returned. Supported fields: trigger_id execution_method create_time update_time execution_details execution_details.state execution_details.execution_snapshots execution_details.attempt_stats execution_details.event_execution_snapshots_size request_parameters cloud_logging_details snapshot_number replay_info
     * @param {boolean} apiParams.refreshAcl - Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.
     * @param {boolean} apiParams.snapshotMetadataWithoutParams - Optional. If true, the service will provide execution info with snapshot metadata only i.e. without event parameters.
     * @param {boolean} apiParams.truncateParams - Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/executions', 'GET', apiParams, clientConfig);

    /**
     * Get an execution in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Cancellation of an execution and associated sub-executions. This will not cancel an IN_PROCESS or completed(SUCCESSFUL, FAILED or CANCELLED) executions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    /**
     * Download the execution.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    /**
     * Re-execute an existing execution, with same request parameters and execution strategy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Next ID: 6 The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/integrations/{integration}/executions/{execution_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.replay = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:replay', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations.executions.suspensions = {};

    /**
     * * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.suspensions.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resolve', 'POST', apiParams, clientConfig);

    /**
     * * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Standard filter field.
     * @param {string} apiParams.orderBy - Field name to order by.
     * @param {integer} apiParams.pageSize - Maximum number of entries in the response.
     * @param {string} apiParams.pageToken - Token to retrieve a specific page.
     * @param {string} apiParams.parent - (Required) Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.suspensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/suspensions', 'GET', apiParams, clientConfig);

    /**
     * * Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.suspensions.lift = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lift', 'POST', apiParams, clientConfig);

    this.projects.locations.sfdcInstances = {};

    /**
     * Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', apiParams, clientConfig);

    /**
     * Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above SfdcInstance that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an sfdc instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcInstance.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of SfdcInstances.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the SfdcInstance's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', apiParams, clientConfig);

    this.projects.locations.sfdcInstances.sfdcChannels = {};

    /**
     * Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', apiParams, clientConfig);

    /**
     * Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
     * @param {string} apiParams.updateMask - Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an sfdc channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the SfdcChannel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
     * @param {integer} apiParams.pageSize - The size of entries in the response. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of SfdcChannels.
     * @param {string} apiParams.readMask - The mask which specifies fields that need to be returned in the SfdcChannel's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sfdcInstances.sfdcChannels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', apiParams, clientConfig);

    this.projects.locations.templates = {};

    /**
     * Lists all templates matching the filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Standard filter field to filter templates. client_id filter won't be supported and will restrict to templates belonging to the current client only. Return all templates of the current client if the filter is empty. Also supports operators like AND, OR, NOT For example, "status=\"ACTIVE\"
     * @param {string} apiParams.orderBy - Optional. The results would be returned in the order you specified here.
     * @param {integer} apiParams.pageSize - Optional. The size of the response entries. If unspecified, defaults to 100. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of Templates.
     * @param {string} apiParams.readMask - Optional. The mask which specifies fields that need to be returned in the template's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates', 'GET', apiParams, clientConfig);

    /**
     * Get a template in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The template to retrieve. Format: projects/{project}/locations/{location}/templates/{template}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new template
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. "projects/{project}/locations/{location}" format.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates', 'POST', apiParams, clientConfig);

    /**
     * Updates the template by given id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Resource name of the template.
     * @param {string} apiParams.updateMask - Required. Field mask specifying the fields in the above template that have been modified and must be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a template
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the Template.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Search templates based on user query and filters. This api would query the templates and return a list of templates based on the user filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enableNaturalLanguageQueryUnderstanding - Optional. Whether to enable natural language query understanding.
     * @param {string} apiParams.filter - Optional. Standard filter field to filter templates. client_id filter won't be supported and will restrict to templates belonging to the current client only. Return all templates of the current client if the filter is empty. Also supports operators like AND, OR, NOT For example, "status=\"ACTIVE\"
     * @param {string} apiParams.orderBy - Optional. The results would be returned in the order you specified here.
     * @param {integer} apiParams.pageSize - Optional. The size of the response entries. If unspecified, defaults to 100. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. The client, which owns this collection of Templates.
     * @param {string} apiParams.query - Optional. The search query that will be passed to Vertex search service.
     * @param {string} apiParams.readMask - Optional. The mask which specifies fields that need to be returned in the template's response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates:search', 'GET', apiParams, clientConfig);

    /**
     * Use the template to create integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the Template.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.use = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:use', 'POST', apiParams, clientConfig);

    /**
     * Import the template to an existing integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the Template.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:import', 'POST', apiParams, clientConfig);

    /**
     * Share a template with other clients. Only the template owner can share the templates with other projects. PERMISSION_DENIED would be thrown if the request is not from the owner.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the Template.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.share = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:share', 'POST', apiParams, clientConfig);

    /**
     * Unshare a template from given clients. Owner of the template can unshare template with clients. Shared client can only unshare the template from itself. PERMISSION_DENIED would be thrown if request is not from owner or for unsharing itself.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name that is associated with the Template.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.unshare = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unshare', 'POST', apiParams, clientConfig);

    /**
     * Uploads a template. The content can be a previously downloaded template. Performs the same function as CreateTemplate, but accepts input in a string format, which holds the complete representation of the Template content.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The template to upload. Format: projects/{project}/locations/{location}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates:upload', 'POST', apiParams, clientConfig);

    /**
     * Downloads a template. Retrieves the `Template` and returns the response as a string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileFormat - Required. File format for download request.
     * @param {string} apiParams.name - (Required) Required. The template to download. Format: projects/{project}/locations/{location}/template/{template_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    this.connectorPlatformRegions = {};

    /**
     * Enumerates the regions for which Connector Platform is provisioned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.connectorPlatformRegions.enumerate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/connectorPlatformRegions:enumerate', 'GET', apiParams, clientConfig);

    this.callback = {};

    /**
     * Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.code - The auth code for the given request
     * @param {string} apiParams.gcpProjectId - The gcp project id of the request
     * @param {string} apiParams.product - Which product sends the request
     * @param {string} apiParams.redirectUri - Redirect uri of the auth code request
     * @param {string} apiParams.state - The auth config id for the given request
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.callback.generateToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/callback:generateToken', 'GET', apiParams, clientConfig);
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
