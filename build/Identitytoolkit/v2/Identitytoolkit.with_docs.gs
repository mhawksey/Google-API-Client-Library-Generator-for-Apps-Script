
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://identitytoolkit.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Retrieve an Identity Toolkit project configuration.
     * @param {string} params.name - (Required) The resource name of the config, for example: "projects/my-awesome-project/config"
     * @return {object} The API response object.
     */
    this.projects.getConfig = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Update an Identity Toolkit project configuration.
     * @param {string} params.name - (Required) Output only. The name of the Config resource. Example: "projects/my-awesome-project/config"
     * @param {string} params.updateMask - The update mask applies to the resource. Fields set in the config but not included in this update mask will be ignored. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateConfig = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.identityPlatform = {};

    /**
     * Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
     * @param {string} params.project - (Required) The resource name of the target project the developer wants to enable Identity Platform for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.identityPlatform.initializeAuth = (params) => this._makeRequest('v2/{+project}/identityPlatform:initializeAuth', 'POST', params);

    this.projects.defaultSupportedIdpConfigs = {};

    /**
     * Create a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.idpId - The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
     * @param {string} params.parent - (Required) The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.defaultSupportedIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'POST', params);

    /**
     * Delete a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     * @return {object} The API response object.
     */
    this.projects.defaultSupportedIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Retrieve a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     * @return {object} The API response object.
     */
    this.projects.defaultSupportedIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List all default supported Idp configurations for an Identity Toolkit project.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The parent resource name, for example, "projects/my-awesome-project".
     * @return {object} The API response object.
     */
    this.projects.defaultSupportedIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'GET', params);

    /**
     * Update a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.defaultSupportedIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.oauthIdpConfigs = {};

    /**
     * Create an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.oauthIdpConfigId - The id to use for this config.
     * @param {string} params.parent - (Required) The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.oauthIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'POST', params);

    /**
     * Delete an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     * @return {object} The API response object.
     */
    this.projects.oauthIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Retrieve an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     * @return {object} The API response object.
     */
    this.projects.oauthIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List all Oidc Idp configurations for an Identity Toolkit project.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The parent resource name, for example, "projects/my-awesome-project".
     * @return {object} The API response object.
     */
    this.projects.oauthIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'GET', params);

    /**
     * Update an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     * @param {string} params.updateMask - The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.oauthIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.inboundSamlConfigs = {};

    /**
     * Create an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.inboundSamlConfigId - The id to use for this config.
     * @param {string} params.parent - (Required) The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.inboundSamlConfigs.create = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'POST', params);

    /**
     * Delete an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     * @return {object} The API response object.
     */
    this.projects.inboundSamlConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Retrieve an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     * @return {object} The API response object.
     */
    this.projects.inboundSamlConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List all inbound SAML configurations for an Identity Toolkit project.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The parent resource name, for example, "projects/my-awesome-project".
     * @return {object} The API response object.
     */
    this.projects.inboundSamlConfigs.list = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'GET', params);

    /**
     * Update an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     * @param {string} params.updateMask - The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.inboundSamlConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants = {};

    /**
     * Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Create a tenant. Requires write permission on the Agent project.
     * @param {string} params.parent - (Required) The parent resource name where the tenant will be created. For example, "projects/project1".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.create = (params) => this._makeRequest('v2/{+parent}/tenants', 'POST', params);

    /**
     * Delete a tenant. Requires write permission on the Agent project.
     * @param {string} params.name - (Required) Resource name of the tenant to delete.
     * @return {object} The API response object.
     */
    this.projects.tenants.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Get a tenant. Requires read permission on the Tenant resource.
     * @param {string} params.name - (Required) Resource name of the tenant to retrieve.
     * @return {object} The API response object.
     */
    this.projects.tenants.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List tenants under the given agent project. Requires read permission on the Agent project.
     * @param {integer} params.pageSize - The maximum number of results to return, capped at 1000. If not specified, the default value is 20.
     * @param {string} params.pageToken - The pagination token from the response of a previous request.
     * @param {string} params.parent - (Required) Required. The parent resource name to list tenants for.
     * @return {object} The API response object.
     */
    this.projects.tenants.list = (params) => this._makeRequest('v2/{+parent}/tenants', 'GET', params);

    /**
     * Update a tenant. Requires write permission on the Tenant resource.
     * @param {string} params.name - (Required) Output only. Resource name of a tenant. For example: "projects/{project-id}/tenants/{tenant-id}"
     * @param {string} params.updateMask - If provided, only update fields set in the update mask. Otherwise, all settable fields will be updated. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants.defaultSupportedIdpConfigs = {};

    /**
     * Create a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.idpId - The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
     * @param {string} params.parent - (Required) The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.defaultSupportedIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'POST', params);

    /**
     * Delete a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     * @return {object} The API response object.
     */
    this.projects.tenants.defaultSupportedIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Retrieve a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     * @return {object} The API response object.
     */
    this.projects.tenants.defaultSupportedIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List all default supported Idp configurations for an Identity Toolkit project.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The parent resource name, for example, "projects/my-awesome-project".
     * @return {object} The API response object.
     */
    this.projects.tenants.defaultSupportedIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'GET', params);

    /**
     * Update a default supported Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.defaultSupportedIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants.oauthIdpConfigs = {};

    /**
     * Create an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.oauthIdpConfigId - The id to use for this config.
     * @param {string} params.parent - (Required) The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.oauthIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'POST', params);

    /**
     * Delete an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     * @return {object} The API response object.
     */
    this.projects.tenants.oauthIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Retrieve an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     * @return {object} The API response object.
     */
    this.projects.tenants.oauthIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List all Oidc Idp configurations for an Identity Toolkit project.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The parent resource name, for example, "projects/my-awesome-project".
     * @return {object} The API response object.
     */
    this.projects.tenants.oauthIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'GET', params);

    /**
     * Update an Oidc Idp configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     * @param {string} params.updateMask - The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.oauthIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants.inboundSamlConfigs = {};

    /**
     * Create an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.inboundSamlConfigId - The id to use for this config.
     * @param {string} params.parent - (Required) The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.inboundSamlConfigs.create = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'POST', params);

    /**
     * Delete an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     * @return {object} The API response object.
     */
    this.projects.tenants.inboundSamlConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Retrieve an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     * @return {object} The API response object.
     */
    this.projects.tenants.inboundSamlConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List all inbound SAML configurations for an Identity Toolkit project.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The parent resource name, for example, "projects/my-awesome-project".
     * @return {object} The API response object.
     */
    this.projects.tenants.inboundSamlConfigs.list = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'GET', params);

    /**
     * Update an inbound SAML configuration for an Identity Toolkit project.
     * @param {string} params.name - (Required) The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     * @param {string} params.updateMask - The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.tenants.inboundSamlConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.defaultSupportedIdps = {};

    /**
     * List all default supported Idps.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @return {object} The API response object.
     */
    this.defaultSupportedIdps.list = (params) => this._makeRequest('v2/defaultSupportedIdps', 'GET', params);

    this.v2 = {};

    /**
     * Gets parameters needed for reCAPTCHA analysis.
     * @param {string} params.clientType - reCAPTCHA Enterprise uses separate site keys for different client types. Specify the client type to get the corresponding key.
     * @param {string} params.tenantId - The id of a tenant.
     * @param {string} params.version - The reCAPTCHA version.
     * @return {object} The API response object.
     */
    this.v2.getRecaptchaConfig = (params) => this._makeRequest('v2/recaptchaConfig', 'GET', params);

    /**
     * Gets password policy config set on the project or tenant.
     * @param {string} params.tenantId - The id of a tenant.
     * @return {object} The API response object.
     */
    this.v2.getPasswordPolicy = (params) => this._makeRequest('v2/passwordPolicy', 'GET', params);

    this.accounts = {};

    /**
     * Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.revokeToken = (params) => this._makeRequest('v2/accounts:revokeToken', 'POST', params);

    this.accounts.mfaEnrollment = {};

    /**
     * Finishes enrolling a second factor for the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mfaEnrollment.finalize = (params) => this._makeRequest('v2/accounts/mfaEnrollment:finalize', 'POST', params);

    /**
     * Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mfaEnrollment.start = (params) => this._makeRequest('v2/accounts/mfaEnrollment:start', 'POST', params);

    /**
     * Revokes one second factor from the enrolled second factors for an account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mfaEnrollment.withdraw = (params) => this._makeRequest('v2/accounts/mfaEnrollment:withdraw', 'POST', params);

    this.accounts.mfaSignIn = {};

    /**
     * Verifies the MFA challenge and performs sign-in
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mfaSignIn.finalize = (params) => this._makeRequest('v2/accounts/mfaSignIn:finalize', 'POST', params);

    /**
     * Sends the MFA challenge
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mfaSignIn.start = (params) => this._makeRequest('v2/accounts/mfaSignIn:start', 'POST', params);
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
