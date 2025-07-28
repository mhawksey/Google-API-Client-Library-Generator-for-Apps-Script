
/**
 * Google Apps Script client library for the Vertex AI Search for commerce API
 * Documentation URL: https://cloud.google.com/recommendations
 * @class
 */
class Retail {
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
    this._rootUrl = 'https://retail.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.catalogs = {};

    /**
     * Exports analytics metrics. `Operation.response` is of type `ExportAnalyticsMetricsResponse`. `Operation.metadata` is of type `ExportMetadata`.
     * @param {string} params.catalog - (Required) Required. Full resource name of the parent catalog. Expected format: `projects/*\/locations/*\/catalogs/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.exportAnalyticsMetrics = (params) => this._makeRequest('v2/{+catalog}:exportAnalyticsMetrics', 'POST', params);

    /**
     * Lists all the Catalogs associated with the project.
     * @param {integer} params.pageSize - Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned.
     * @param {string} params.pageToken - A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {string} params.parent - (Required) Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.list = (params) => this._makeRequest('v2/{+parent}/catalogs', 'GET', params);

    /**
     * Updates the Catalogs.
     * @param {string} params.name - (Required) Required. Immutable. The fully qualified resource name of the catalog.
     * @param {string} params.updateMask - Indicates which fields in the provided Catalog to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*\/locations/*\/catalogs/*\/branches/1` is set as default, setting SearchRequest.branch to `projects/*\/locations/*\/catalogs/*\/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*\/locations/*\/catalogs/*\/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*\/locations/*\/catalogs/*\/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
     * @param {string} params.catalog - (Required) Full resource name of the catalog, such as `projects/*\/locations/global/catalogs/default_catalog`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.setDefaultBranch = (params) => this._makeRequest('v2/{+catalog}:setDefaultBranch', 'POST', params);

    /**
     * Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
     * @param {string} params.catalog - (Required) The parent catalog resource name, such as `projects/*\/locations/global/catalogs/default_catalog`.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.getDefaultBranch = (params) => this._makeRequest('v2/{+catalog}:getDefaultBranch', 'GET', params);

    /**
     * Gets a CompletionConfig.
     * @param {string} params.name - (Required) Required. Full CompletionConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/completionConfig`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.getCompletionConfig = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates the CompletionConfigs.
     * @param {string} params.name - (Required) Required. Immutable. Fully qualified name `projects/*\/locations/*\/catalogs/*\/completionConfig`
     * @param {string} params.updateMask - Indicates which fields in the provided CompletionConfig to update. The following are the only supported fields: * CompletionConfig.matching_order * CompletionConfig.max_suggestions * CompletionConfig.min_prefix_length * CompletionConfig.auto_learning If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.updateCompletionConfig = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets an AttributesConfig.
     * @param {string} params.name - (Required) Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.getAttributesConfig = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates the AttributesConfig. The catalog attributes in the request will be updated in the catalog, or inserted if they do not exist. Existing catalog attributes not included in the request will remain unchanged. Attributes that are assigned to products, but do not exist at the catalog level, are always included in the response. The product attribute is assigned default values for missing catalog attribute fields, e.g., searchable and dynamic facetable options.
     * @param {string} params.name - (Required) Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/*\/locations/*\/catalogs/*\/attributesConfig`
     * @param {string} params.updateMask - Indicates which fields in the provided AttributesConfig to update. The following is the only supported field: * AttributesConfig.catalog_attributes If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.updateAttributesConfig = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
     * @param {string} params.catalog - (Required) Required. Catalog for which the completion is performed. Full resource name of catalog, such as `projects/*\/locations/global/catalogs/default_catalog`.
     * @param {string} params.dataset - Determines which dataset to use for fetching completion. "user-data" will use the dataset imported through CompletionService.ImportCompletionData. `cloud-retail` will use the dataset generated by Cloud Retail based on user events. If left empty, completions will be fetched from the `user-data` dataset. Current supported values: * user-data * cloud-retail: This option requires enabling auto-learning function first. See [guidelines](https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset).
     * @param {string} params.deviceType - The device type context for completion suggestions. We recommend that you leave this field empty. It can apply different suggestions on different device types, e.g. `DESKTOP`, `MOBILE`. If it is empty, the suggestions are across all device types. Supported formats: * `UNKNOWN_DEVICE_TYPE` * `DESKTOP` * `MOBILE` * A customized string starts with `OTHER_`, e.g. `OTHER_IPHONE`.
     * @param {boolean} params.enableAttributeSuggestions - If true, attribute suggestions are enabled and provided in the response. This field is only available for the `cloud-retail` dataset.
     * @param {string} params.entity - The entity for customers who run multiple entities, domains, sites, or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it must be an exact match with UserEvent.entity to get per-entity autocomplete results. This field will be applied to `completion_results` only. It has no effect on the `attribute_results`. Also, this entity should be limited to 256 characters, if too long, it will be truncated to 256 characters in both generation and serving time, and may lead to mis-match. To ensure it works, please set the entity with string within 256 characters.
     * @param {string} params.languageCodes - Note that this field applies for `user-data` dataset only. For requests with `cloud-retail` dataset, setting this field has no effect. The language filters applied to the output suggestions. If set, it should contain the language of the query. If not set, suggestions are returned without considering language restrictions. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of language codes is 3.
     * @param {integer} params.maxSuggestions - Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20.
     * @param {string} params.query - Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
     * @param {string} params.visitorId - Recommended field. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.completeQuery = (params) => this._makeRequest('v2/{+catalog}:completeQuery', 'GET', params);

    /**
     * Manages overal generative question feature state -- enables toggling feature on and off.
     * @param {string} params.catalog - (Required) Required. Resource name of the affected catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided GenerativeQuestionsFeatureConfig to update. If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.updateGenerativeQuestionFeature = (params) => this._makeRequest('v2/{+catalog}/generativeQuestionFeature', 'PATCH', params);

    /**
     * Manages overal generative question feature state -- enables toggling feature on and off.
     * @param {string} params.catalog - (Required) Required. Resource name of the parent catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.getGenerativeQuestionFeature = (params) => this._makeRequest('v2/{+catalog}/generativeQuestionFeature', 'GET', params);

    /**
     * Allows management of individual questions.
     * @param {string} params.catalog - (Required) Required. Resource name of the catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided GenerativeQuestionConfig to update. The following are NOT supported: * GenerativeQuestionConfig.frequency If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.updateGenerativeQuestion = (params) => this._makeRequest('v2/{+catalog}/generativeQuestion', 'PATCH', params);

    /**
     * Returns the conversational search customization config for a given catalog.
     * @param {string} params.name - (Required) Required. Resource name of the parent catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.getConversationalSearchCustomizationConfig = (params) => this._makeRequest('v2/{+name}/conversationalSearchCustomizationConfig', 'GET', params);

    /**
     * Updates the conversational search customization config for a given catalog.
     * @param {string} params.catalog - (Required) Required. Resource name of the catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided ConversationalSearchCustomizationConfig to update. If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.updateConversationalSearchCustomizationConfig = (params) => this._makeRequest('v2/{+catalog}/conversationalSearchCustomizationConfig', 'PATCH', params);

    this.projects.locations.catalogs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.catalogs.branches = {};

    this.projects.locations.catalogs.branches.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.catalogs.branches.products = {};

    /**
     * Creates a Product.
     * @param {string} params.parent - (Required) Required. The parent catalog resource name, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch`.
     * @param {string} params.productId - Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.create = (params) => this._makeRequest('v2/{+parent}/products', 'POST', params);

    /**
     * Gets a Product.
     * @param {string} params.name - (Required) Required. Full resource name of Product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Product does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Gets a list of Products.
     * @param {string} params.filter - A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"` * List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"` * List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"` If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned.
     * @param {integer} params.pageSize - Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     * @param {string} params.pageToken - A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/*\/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     * @param {string} params.readMask - The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If "*" is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.list = (params) => this._makeRequest('v2/{+parent}/products', 'GET', params);

    /**
     * Updates a Product.
     * @param {boolean} params.allowMissing - If set to true, and the Product is not found, a new Product will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Immutable. Full resource name of the product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
     * @param {string} params.updateMask - Indicates which fields in the provided Product to update. The immutable and output only fields are NOT supported. If not set, all supported fields (the fields that are neither immutable nor output only) are updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned. The attribute key can be updated by setting the mask path as "attributes.${key_name}". If a key name is present in the mask but not in the patching product from the request, this key will be deleted after the update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a Product.
     * @param {string} params.name - (Required) Required. Full resource name of Product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to delete the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Product to delete does not exist, a NOT_FOUND error is returned. The Product to delete can neither be a Product.Type.COLLECTION Product member nor a Product.Type.PRIMARY Product with more than one variants. Otherwise, an INVALID_ARGUMENT error is returned. All inventory information for the named Product will be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.
     * @param {string} params.parent - (Required) Required. The resource name of the branch under which the products are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/branches/${branchId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.purge = (params) => this._makeRequest('v2/{+parent}/products:purge', 'POST', params);

    /**
     * Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
     * @param {string} params.parent - (Required) Required. `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch` If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.import = (params) => this._makeRequest('v2/{+parent}/products:import', 'POST', params);

    /**
     * Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
     * @param {string} params.name - (Required) Immutable. Full resource name of the product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.setInventory = (params) => this._makeRequest('v2/{+name}:setInventory', 'POST', params);

    /**
     * We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     * @param {string} params.product - (Required) Required. Full resource name of Product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.addFulfillmentPlaces = (params) => this._makeRequest('v2/{+product}:addFulfillmentPlaces', 'POST', params);

    /**
     * We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     * @param {string} params.product - (Required) Required. Full resource name of Product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.removeFulfillmentPlaces = (params) => this._makeRequest('v2/{+product}:removeFulfillmentPlaces', 'POST', params);

    /**
     * Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     * @param {string} params.product - (Required) Required. Full resource name of Product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.addLocalInventories = (params) => this._makeRequest('v2/{+product}:addLocalInventories', 'POST', params);

    /**
     * Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     * @param {string} params.product - (Required) Required. Full resource name of Product, such as `projects/*\/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.branches.products.removeLocalInventories = (params) => this._makeRequest('v2/{+product}:removeLocalInventories', 'POST', params);

    this.projects.locations.catalogs.attributesConfig = {};

    /**
     * Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.attributesConfig - (Required) Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.attributesConfig.addCatalogAttribute = (params) => this._makeRequest('v2/{+attributesConfig}:addCatalogAttribute', 'POST', params);

    /**
     * Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
     * @param {string} params.attributesConfig - (Required) Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.attributesConfig.removeCatalogAttribute = (params) => this._makeRequest('v2/{+attributesConfig}:removeCatalogAttribute', 'POST', params);

    /**
     * Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
     * @param {string} params.attributesConfig - (Required) Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.attributesConfig.replaceCatalogAttribute = (params) => this._makeRequest('v2/{+attributesConfig}:replaceCatalogAttribute', 'POST', params);

    this.projects.locations.catalogs.placements = {};

    /**
     * Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
     * @param {string} params.placement - (Required) Required. The resource name of the Retail Search serving config, such as `projects/*\/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*\/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that are used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.placements.search = (params) => this._makeRequest('v2/{+placement}:search', 'POST', params);

    /**
     * Makes a recommendation prediction.
     * @param {string} params.placement - (Required) Required. Full resource name of the format: `{placement=projects/*\/locations/global/catalogs/default_catalog/servingConfigs/*}` or `{placement=projects/*\/locations/global/catalogs/default_catalog/placements/*}`. We recommend using the `servingConfigs` resource. `placements` is a legacy resource. The ID of the Recommendations AI serving config or placement. Before you can request predictions from your model, you must create at least one serving config or placement for it. For more information, see [Manage serving configs] (https://cloud.google.com/retail/docs/manage-configs). The full list of available serving configs can be seen at https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.placements.predict = (params) => this._makeRequest('v2/{+placement}:predict', 'POST', params);

    this.projects.locations.catalogs.servingConfigs = {};

    /**
     * Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
     * @param {string} params.placement - (Required) Required. The resource name of the Retail Search serving config, such as `projects/*\/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*\/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that are used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.search = (params) => this._makeRequest('v2/{+placement}:search', 'POST', params);

    /**
     * Makes a recommendation prediction.
     * @param {string} params.placement - (Required) Required. Full resource name of the format: `{placement=projects/*\/locations/global/catalogs/default_catalog/servingConfigs/*}` or `{placement=projects/*\/locations/global/catalogs/default_catalog/placements/*}`. We recommend using the `servingConfigs` resource. `placements` is a legacy resource. The ID of the Recommendations AI serving config or placement. Before you can request predictions from your model, you must create at least one serving config or placement for it. For more information, see [Manage serving configs] (https://cloud.google.com/retail/docs/manage-configs). The full list of available serving configs can be seen at https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.predict = (params) => this._makeRequest('v2/{+placement}:predict', 'POST', params);

    /**
     * Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
     * @param {string} params.parent - (Required) Required. Full resource name of parent. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
     * @param {string} params.servingConfigId - Required. The ID to use for the ServingConfig, which will become the final component of the ServingConfig's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.create = (params) => this._makeRequest('v2/{+parent}/servingConfigs', 'POST', params);

    /**
     * Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Required. The resource name of the ServingConfig to delete. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates a ServingConfig.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/*\/locations/global/catalogs/*\/servingConfig/*`
     * @param {string} params.updateMask - Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Required. The resource name of the ServingConfig to get. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all ServingConfigs linked to this catalog.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.list = (params) => this._makeRequest('v2/{+parent}/servingConfigs', 'GET', params);

    /**
     * Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
     * @param {string} params.servingConfig - (Required) Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.addControl = (params) => this._makeRequest('v2/{+servingConfig}:addControl', 'POST', params);

    /**
     * Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
     * @param {string} params.servingConfig - (Required) Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.servingConfigs.removeControl = (params) => this._makeRequest('v2/{+servingConfig}:removeControl', 'POST', params);

    this.projects.locations.catalogs.completionData = {};

    /**
     * Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
     * @param {string} params.parent - (Required) Required. The catalog which the suggestions dataset belongs to. Format: `projects/1234/locations/global/catalogs/default_catalog`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.completionData.import = (params) => this._makeRequest('v2/{+parent}/completionData:import', 'POST', params);

    this.projects.locations.catalogs.controls = {};

    /**
     * Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.controlId - Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.
     * @param {string} params.parent - (Required) Required. Full resource name of parent catalog. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.controls.create = (params) => this._makeRequest('v2/{+parent}/controls', 'POST', params);

    /**
     * Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Control to delete. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.controls.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates a Control. Control cannot be set to a different oneof field, if so an INVALID_ARGUMENT is returned. If the Control to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/*\/locations/global/catalogs/*\/controls/*`
     * @param {string} params.updateMask - Indicates which fields in the provided Control to update. The following are NOT supported: * Control.name If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.controls.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a Control.
     * @param {string} params.name - (Required) Required. The resource name of the Control to get. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.controls.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all Controls by their parent Catalog.
     * @param {string} params.filter - Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List controls that are used in a single ServingConfig: 'serving_config = "boosted_home_page_cvr"'
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.controls.list = (params) => this._makeRequest('v2/{+parent}/controls', 'GET', params);

    this.projects.locations.catalogs.generativeQuestions = {};

    /**
     * Returns all questions for a given catalog.
     * @param {string} params.parent - (Required) Required. Resource name of the parent catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.generativeQuestions.list = (params) => this._makeRequest('v2/{+parent}/generativeQuestions', 'GET', params);

    this.projects.locations.catalogs.generativeQuestion = {};

    /**
     * Allows management of multiple questions.
     * @param {string} params.parent - (Required) Optional. Resource name of the parent catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.generativeQuestion.batchUpdate = (params) => this._makeRequest('v2/{+parent}/generativeQuestion:batchUpdate', 'POST', params);

    this.projects.locations.catalogs.models = {};

    /**
     * Creates a new model.
     * @param {boolean} params.dryRun - Optional. Whether to run a dry run to validate the request (without actually creating the model).
     * @param {string} params.parent - (Required) Required. The parent resource under which to create the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.create = (params) => this._makeRequest('v2/{+parent}/models', 'POST', params);

    /**
     * Gets a model.
     * @param {string} params.name - (Required) Required. The resource name of the Model to get. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog}/models/{model_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Pauses the training of an existing model.
     * @param {string} params.name - (Required) Required. The name of the model to pause. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.pause = (params) => this._makeRequest('v2/{+name}:pause', 'POST', params);

    /**
     * Resumes the training of an existing model.
     * @param {string} params.name - (Required) Required. The name of the model to resume. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.resume = (params) => this._makeRequest('v2/{+name}:resume', 'POST', params);

    /**
     * Deletes an existing model.
     * @param {string} params.name - (Required) Required. The resource name of the Model to delete. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Lists all the models linked to this event store.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListModels` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent for which to list models. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.list = (params) => this._makeRequest('v2/{+parent}/models', 'GET', params);

    /**
     * Update of model metadata. Only fields that currently can be updated are: `filtering_option` and `periodic_tuning_state`. If other values are provided, this API method ignores them.
     * @param {string} params.name - (Required) Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided 'model' to update. If not set, by default updates all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Tunes an existing model.
     * @param {string} params.name - (Required) Required. The resource name of the model to tune. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.models.tune = (params) => this._makeRequest('v2/{+name}:tune', 'POST', params);

    this.projects.locations.catalogs.userEvents = {};

    /**
     * Writes a single user event.
     * @param {string} params.parent - (Required) Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     * @param {boolean} params.writeAsync - If set to true, the user event will be written asynchronously after validation, and the API will respond without waiting for the write. Therefore, silent failures can occur even if the API returns success. In case of silent failures, error messages can be found in Stackdriver logs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.userEvents.write = (params) => this._makeRequest('v2/{+parent}/userEvents:write', 'POST', params);

    /**
     * Writes a single user event from the browser. For larger user event payload over 16 KB, the POST method should be used instead, otherwise a 400 Bad Request error is returned. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     * @param {string} params.parent - (Required) Required. The parent catalog name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.userEvents.collect = (params) => this._makeRequest('v2/{+parent}/userEvents:collect', 'POST', params);

    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     * @param {string} params.parent - (Required) Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.userEvents.purge = (params) => this._makeRequest('v2/{+parent}/userEvents:purge', 'POST', params);

    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
     * @param {string} params.parent - (Required) Required. `projects/1234/locations/global/catalogs/default_catalog`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.userEvents.import = (params) => this._makeRequest('v2/{+parent}/userEvents:import', 'POST', params);

    /**
     * Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
     * @param {string} params.parent - (Required) Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.userEvents.rejoin = (params) => this._makeRequest('v2/{+parent}/userEvents:rejoin', 'POST', params);

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
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
