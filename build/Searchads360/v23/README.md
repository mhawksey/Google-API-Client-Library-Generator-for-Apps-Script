# Search Ads 360 Reporting API - Apps Script Client Library

Auto-generated client library for using the **Search Ads 360 Reporting API (version: v23)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:27:27 GMT
- **Last Modified:** Fri, 01 May 2026 00:27:27 GMT
- **Created:** Fri, 01 May 2026 00:27:27 GMT



---

## API Reference

### `v23`

#### `v23.listPlannableUserLists()`

Returns the list of plannable user lists with their plannable status. User lists may not be plannable for a number of reasons, including: - They are less than 10 days old. - They have a membership lifespan that is less than 30 days - They have less than 10,000 or more than 700,000 users. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [ReachPlanError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.listBenchmarksLocations()`

Returns the list of locations that support benchmarks (for example, countries). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.listPlannableProducts()`

Returns the list of per-location plannable YouTube ad formats with allowed targeting. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.listBenchmarksAvailableDates()`

Returns a date range that supports benchmarks. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.listBenchmarksProducts()`

Returns the list of products that supports benchmarks. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.listBenchmarksSources()`

Returns the list of benchmarks sources (for example, Industry Verticals). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.listPlannableLocations()`

Returns the list of plannable locations (for example, countries). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.generateConversionRates()`

Returns a collection of conversion rate suggestions for supported plannable products. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v23.listPlannableUserInterests()`

Returns the list of plannable user interests. A plannable user interest is one that can be targeted in a reach forecast using ReachPlanService.GenerateReachForecast. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [ListOperationError]() [QuotaError]() [RequestError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `incentives`

#### `incentives.fetchIncentive()`

Returns incentives for a given user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.countryCode` | `string` | No | Optional. User's country code. If not provided, the server will default to "US". Possible country codes: https://developers.google.com/google-ads/api/data/codes-formats#country_codes |
| `params.type` | `string` | No | Optional. The type of incentive to get. Defaults to ACQUISITION. |
| `params.languageCode` | `string` | No | Optional. User's language code. If not provided, the server will default to "en". Possible language codes: https://developers.google.com/google-ads/api/data/codes-formats#languages |
| `params.email` | `string` | No | Optional. Email of the user that the requested incentive is meant for. Will be used for channel partners who do NOT use OAuth to authenticate on behalf of user. |

### `searchAds360Fields`

#### `searchAds360Fields.get()`

Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the field to get. |

#### `searchAds360Fields.search()`

Returns all fields that match the search [query](/search-ads/reporting/concepts/field-service#use_a_query_to_get_field_details). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `keywordThemeConstants`

#### `keywordThemeConstants.suggest()`

Returns KeywordThemeConstant suggestions by keyword themes. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `geoTargetConstants`

#### `geoTargetConstants.suggest()`

Returns GeoTargetConstant suggestions by location name or by resource name. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [GeoTargetConstantSuggestionError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `audienceInsights`

#### `audienceInsights.listInsightsEligibleDates()`

Lists date ranges for which audience insights data can be requested. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `customers`

#### `customers.generateKeywordHistoricalMetrics()`

Returns a list of keyword historical metrics. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The ID of the customer with the recommendation. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.startIdentityVerification()`

Starts Identity Verification for a given verification program type. Statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The Id of the customer for whom we are creating this verification. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.suggestSmartCampaignAd()`

Suggests a Smart campaign ad compatible with the Ad family of resources, based on data points such as targeting and the business to advertise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateAudienceCompositionInsights()`

Returns a collection of attributes that are represented in an audience of interest, with metrics that compare each attribute's share of the audience with its share of a baseline audience. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateKeywordForecastMetrics()`

Returns metrics (such as impressions, clicks, total cost) of a keyword forecast for the given campaign. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateAudienceDefinition()`

Returns a collection of audience attributes using generative AI based on the provided audience description. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateBenchmarksMetrics()`

Returns YouTube advertisement metrics for the given client against industry benchmarks. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BenchmarksError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. Supply a client customer ID to generate metrics for the customer. A manager account customer ID will not return customer metrics since it does not have any associated direct ad campaigns. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateReachForecast()`

Generates a reach forecast for a given targeting / product mix. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [ReachPlanError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.listAccessibleCustomers()`

Returns resource names of customers directly accessible by the user authenticating the call. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `customers.generateInsightsFinderReport()`

Creates a saved report that can be viewed in the Insights Finder tool. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.removeCampaignAutomaticallyCreatedAsset()`

Removes automatically created assets from a campaign. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ContextError]() [FieldError]() [InternalError]() [MutateError]() [PartialFailureError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose assets are being removed. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateAdGroupThemes()`

Returns a list of suggested AdGroups and suggested modifications (text, match type) for the given keywords. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.suggestKeywordThemes()`

Suggests keyword themes to advertise on.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.searchAudienceInsightsAttributes()`

Searches for audience attributes that can be used to generate insights. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateSuggestedTargetingInsights()`

Returns a collection of targeting insights (e.g. targetable audiences) that are relevant to the requested audience. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateAudienceOverlapInsights()`

Returns a collection of audience attributes along with estimates of the overlap between their potential YouTube reach and that of a given input attribute. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.suggestTravelAssets()`

Returns Travel Asset suggestions. Asset suggestions are returned on a best-effort basis. There are no guarantees that all possible asset types will be returned for any given hotel property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateKeywordIdeas()`

Returns a list of keyword ideas. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [KeywordPlanIdeaError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The ID of the customer with the recommendation. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.suggestSmartCampaignBudgetOptions()`

Returns BudgetOption suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose budget options are to be suggested. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.mutate()`

Updates a customer. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldMaskError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.generateTargetingSuggestionMetrics()`

Returns potential reach metrics for targetable audiences. This method helps answer questions like "How many Men aged 18+ interested in Camping can be reached on YouTube?" List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.createCustomerClient()`

Creates a new client under manager. The new client customer is returned. List of thrown errors: [AccessInvitationError]() [AuthenticationError]() [AuthorizationError]() [CurrencyCodeError]() [HeaderError]() [InternalError]() [ManagerLinkError]() [QuotaError]() [RequestError]() [StringLengthError]() [TimeZoneError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the Manager under whom client customer is being created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.getIdentityVerification()`

Returns Identity Verification information. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for whom we are requesting verification information. |

#### `customers.uploadUserData()`

Uploads the given user data. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]() [UserDataError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which to update the user data. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.remarketingActions`

#### `customers.remarketingActions.mutate()`

Creates or updates remarketing actions. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ConversionActionError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose remarketing actions are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.keywordPlanCampaigns`

#### `customers.keywordPlanCampaigns.mutate()`

Creates, updates, or removes Keyword Plan campaigns. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [KeywordPlanCampaignError]() [KeywordPlanError]() [ListOperationError]() [MutateError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose Keyword Plan campaigns are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.conversionActions`

#### `customers.conversionActions.mutate()`

Creates, updates or removes conversion actions. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ConversionActionError]() [CurrencyCodeError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose conversion actions are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.thirdPartyAppAnalyticsLinks`

#### `customers.thirdPartyAppAnalyticsLinks.regenerateShareableLinkId()`

Regenerate ThirdPartyAppAnalyticsLink.shareable_link_id that should be provided to the third party when setting up app analytics. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Resource name of the third party app analytics link. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupCriterionLabels`

#### `customers.adGroupCriterionLabels.mutate()`

Creates and removes ad group criterion labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose ad group criterion labels are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.localServices`

#### `customers.localServices.appendLeadConversation()`

RPC to append Local Services Lead Conversation resources to Local Services Lead resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The Id of the customer which owns the leads onto which the conversations will be appended. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.keywordPlans`

#### `customers.keywordPlans.mutate()`

Creates, updates, or removes keyword plans. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [KeywordPlanError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose keyword plans are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.sharedSets`

#### `customers.sharedSets.mutate()`

Creates, updates, or removes shared sets. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SharedSetError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose shared sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerLifecycleGoal`

#### `customers.customerLifecycleGoal.configureCustomerLifecycleGoals()`

Process the given customer lifecycle configurations. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CustomerLifecycleGoalConfigError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer performing the upload. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerLabels`

#### `customers.customerLabels.mutate()`

Creates and removes customer-label relationships. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose customer-label relationships are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adParameters`

#### `customers.adParameters.mutate()`

Creates, updates, or removes ad parameters. Operation statuses are returned. List of thrown errors: [AdParameterError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ad parameters are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.experimentArms`

#### `customers.experimentArms.mutate()`

Creates, updates, or removes experiment arms. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentArmError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose experiments are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupAssetSets`

#### `customers.adGroupAssetSets.mutate()`

Creates, or removes ad group asset sets. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ad group asset sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupCustomizers`

#### `customers.adGroupCustomizers.mutate()`

Creates, updates or removes ad group customizers. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ad group customizers are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.audiences`

#### `customers.audiences.mutate()`

Creates audiences. Operation statuses are returned. List of thrown errors: [AudienceError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose audiences are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customColumns`

#### `customers.customColumns.get()`

Returns the requested custom column in full detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the custom column to fetch. |

#### `customers.customColumns.list()`

Returns all the custom columns associated with the customer in full detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer to apply the CustomColumn list operation to. |

### `customers.keywordPlanAdGroups`

#### `customers.keywordPlanAdGroups.mutate()`

Creates, updates, or removes Keyword Plan ad groups. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [KeywordPlanAdGroupError]() [KeywordPlanError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose Keyword Plan ad groups are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.paymentsAccounts`

#### `customers.paymentsAccounts.list()`

Returns all payments accounts associated with all managers between the login customer ID and specified serving customer in the hierarchy, inclusive. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [PaymentsAccountError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer to apply the PaymentsAccount list operation to. |

### `customers.campaignBidModifiers`

#### `customers.campaignBidModifiers.mutate()`

Creates, updates, or removes campaign bid modifiers. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ContextError]() [CriterionError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose campaign bid modifiers are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.Goals`

#### `customers.Goals.mutate()`

Create or update goals. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [GoalError]() [GoalServicesError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose goals are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.searchAds360`

#### `customers.searchAds360.search()`

Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ChangeEventError]() [ChangeStatusError]() [ClickViewError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being queried. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.searchAds360.mutate()`

This method is essentially a wrapper around a series of mutate methods. The only features it offers over calling those methods directly are: - Atomic transactions - Temp resource names (described below) - Somewhat reduced latency over making a series of mutate calls Note: Only resources that support atomic transactions are included, so this method can't replace all calls to individual services. ## Atomic Transaction Benefits Atomicity makes error handling much easier. If you're making a series of changes and one fails, it can leave your account in an inconsistent state. With atomicity, you either reach the chosen state directly, or the request fails and you can retry. ## Temp Resource Names Temp resource names are a special type of resource name used to create a resource and reference that resource in the same request. For example, if a is created with `resource_name` equal to ``, that resource name can be reused in the `` field in the same request. That way, the two resources are created and linked atomically. To create a temp resource name, put a negative number in the part of the name that the server would normally allocate. Note: - Resources must be created with a temp name before the name can be reused. For example, the previous example would fail if the mutate order was reversed. - Temp names are not remembered across requests. - There's no limit to the number of temp names in a request. - Each temp name must use a unique negative number, even if the resource types differ. ## Latency It's important to group mutates by resource type or the request may time out and fail. Latency is roughly equal to a series of calls to individual mutate methods, where each change in resource type is a new call. For example, mutating is like 2 calls, while mutating is like 4 calls. List of thrown errors: [AdCustomizerError]() [AdError]() [AdGroupAdError]() [AdGroupCriterionError]() [AdGroupError]() [AssetError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [CampaignBudgetError]() [CampaignCriterionError]() [CampaignError]() [CampaignExperimentError]() [CampaignSharedSetError]() [CollectionSizeError]() [ContextError]() [ConversionActionError]() [CriterionError]() [CustomerFeedError]() [DatabaseError]() [DateError]() [DateRangeError]() [DistinctError]() [ExtensionFeedItemError]() [ExtensionSettingError]() [FeedAttributeReferenceError]() [FeedError]() [FeedItemError]() [FeedItemSetError]() [FieldError]() [FieldMaskError]() [FunctionParsingError]() [HeaderError]() [ImageError]() [InternalError]() [KeywordPlanAdGroupKeywordError]() [KeywordPlanCampaignError]() [KeywordPlanError]() [LabelError]() [ListOperationError]() [MediaUploadError]() [MutateError]() [NewResourceCreationError]() [NullError]() [OperationAccessDeniedError]() [PolicyFindingError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SettingError]() [SharedSetError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]() [UserListError]() [YoutubeVideoRegistrationError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose resources are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.incentives`

#### `customers.incentives.applyIncentive()`

Applies the incentive for the ads customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The customer ID of the account that the incentive is being applied to. |
| `params.selectedIncentiveId` | `string` | Yes | The incentive ID of this incentive. This is used to identify which incentive is selected by the user in the CYO flow. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignCustomizers`

#### `customers.campaignCustomizers.mutate()`

Creates, updates or removes campaign customizers. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign customizers are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customInterests`

#### `customers.customInterests.mutate()`

Creates or updates custom interests. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CriterionError]() [CustomInterestError]() [HeaderError]() [InternalError]() [MutateError]() [PolicyViolationError]() [QuotaError]() [RequestError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose custom interests are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignCriteria`

#### `customers.campaignCriteria.mutate()`

Creates, updates, or removes criteria. Operation statuses are returned. List of thrown errors: [AdxError]() [AuthenticationError]() [AuthorizationError]() [CampaignCriterionError]() [CollectionSizeError]() [ContextError]() [CriterionError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [FunctionError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RegionCodeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose criteria are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroups`

#### `customers.adGroups.mutate()`

Creates, updates, or removes ad groups. Operation statuses are returned. List of thrown errors: [AdGroupError]() [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [ListOperationError]() [MultiplierError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SettingError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ad groups are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.conversionCustomVariables`

#### `customers.conversionCustomVariables.mutate()`

Creates or updates conversion custom variables. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ConversionCustomVariableError]() [DatabaseError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose conversion custom variables are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.smartCampaignSettings`

#### `customers.smartCampaignSettings.getSmartCampaignStatus()`

Returns the status of the requested Smart campaign.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the Smart campaign setting belonging to the Smart campaign to fetch the status of. |

#### `customers.smartCampaignSettings.mutate()`

Updates Smart campaign settings for campaigns.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose Smart campaign settings are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupAds`

#### `customers.adGroupAds.mutate()`

Creates, updates, or removes ads. Operation statuses are returned. List of thrown errors: [AdCustomizerError]() [AdError]() [AdGroupAdError]() [AdSharingError]() [AdxError]() [AssetError]() [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [ContextError]() [DatabaseError]() [DateError]() [DistinctError]() [FeedAttributeReferenceError]() [FieldError]() [FieldMaskError]() [FunctionError]() [FunctionParsingError]() [HeaderError]() [IdError]() [ImageError]() [InternalError]() [ListOperationError]() [MediaBundleError]() [MediaFileError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [PolicyFindingError]() [PolicyValidationParameterError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ads are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.adGroupAds.removeAutomaticallyCreatedAssets()`

Remove automatically created assets from an ad. List of thrown errors: [AdError]() [AuthenticationError]() [AuthorizationError]() [AutomaticallyCreatedAssetRemovalError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.adGroupAd` | `string` | Yes | Required. The resource name of the AdGroupAd from which to remove automatically created assets. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.assetGroupSignals`

#### `customers.assetGroupSignals.mutate()`

Creates or removes asset group signals. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose asset group signals are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerUserAccesses`

#### `customers.customerUserAccesses.mutate()`

Updates, removes permission of a user on a given customer. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CustomerUserAccessError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignSharedSets`

#### `customers.campaignSharedSets.mutate()`

Creates or removes campaign shared sets. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignSharedSetError]() [ContextError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign shared sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.labels`

#### `customers.labels.mutate()`

Creates, updates, or removes labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose labels are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.keywordPlanCampaignKeywords`

#### `customers.keywordPlanCampaignKeywords.mutate()`

Creates, updates, or removes Keyword Plan campaign keywords. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [KeywordPlanAdGroupKeywordError]() [KeywordPlanCampaignKeywordError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign keywords are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customizerAttributes`

#### `customers.customizerAttributes.mutate()`

Creates, updates or removes customizer attributes. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose customizer attributes are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaigns`

#### `customers.campaigns.mutate()`

Creates, updates, or removes campaigns. Operation statuses are returned. List of thrown errors: [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [CampaignBudgetError]() [CampaignError]() [ContextError]() [DatabaseError]() [DateError]() [DateRangeError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [ListOperationError]() [MutateError]() [NewResourceCreationError]() [NotAllowlistedError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RegionCodeError]() [RequestError]() [ResourceCountLimitExceededError]() [SettingError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaigns are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.campaigns.enablePMaxBrandGuidelines()`

Enables Brand Guidelines for Performance Max campaigns. List of thrown errors: [AuthenticationError]() [AssetError]() [AssetLinkError]() [AuthorizationError]() [BrandGuidelinesMigrationError]() [CampaignError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaigns are being enabled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.biddingDataExclusions`

#### `customers.biddingDataExclusions.mutate()`

Creates, updates, or removes data exclusions. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose data exclusions are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerAssetSets`

#### `customers.customerAssetSets.mutate()`

Creates, or removes customer asset sets. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose customer asset sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.assetSetAssets`

#### `customers.assetSetAssets.mutate()`

Creates, updates or removes asset set assets. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose asset set assets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.userListCustomerTypes`

#### `customers.userListCustomerTypes.mutate()`

Attach or remove user list customer types. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [UserListCustomerTypeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose user list customer types are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.productLinkInvitations`

#### `customers.productLinkInvitations.create()`

Creates a product link invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.productLinkInvitations.update()`

Update a product link invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.productLinkInvitations.remove()`

Remove a product link invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the product link invitation being removed. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupBidModifiers`

#### `customers.adGroupBidModifiers.mutate()`

Creates, updates, or removes ad group bid modifiers. Operation statuses are returned. List of thrown errors: [AdGroupBidModifierError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [CriterionError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose ad group bid modifiers are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.assets`

#### `customers.assets.mutate()`

Creates assets. Operation statuses are returned. List of thrown errors: [AssetError]() [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [CurrencyCodeError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [ListOperationError]() [MediaUploadError]() [MutateError]() [NotAllowlistedError]() [NotEmptyError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]() [YoutubeVideoRegistrationError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose assets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.CustomerCustomizers`

#### `customers.CustomerCustomizers.mutate()`

Creates, updates or removes customer customizers. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose customer customizers are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerManagerLinks`

#### `customers.customerManagerLinks.mutate()`

Updates customer manager links. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [ManagerLinkError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose customer manager links are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.customerManagerLinks.moveManagerLink()`

Moves a client customer to a new manager customer. This simplifies the complex request that requires two operations to move a client customer to a new manager, for example: 1. Update operation with Status INACTIVE (previous manager) and, 2. Update operation with Status ACTIVE (new manager). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the client customer that is being moved. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.experiments`

#### `customers.experiments.mutate()`

Creates, updates, or removes experiments. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose experiments are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.experiments.promoteExperiment()`

Promotes the trial campaign thus applying changes in the trial campaign to the base campaign. This method returns a long running operation that tracks the promotion of the experiment campaign. If it fails, a list of errors can be retrieved using the ListExperimentAsyncErrors method. The operation's metadata will be a string containing the resource name of the created experiment. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the experiment to promote. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.experiments.endExperiment()`

Immediately ends an experiment, changing the experiment's scheduled end date and without waiting for end of day. End date is updated to be the time of the request. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.experiment` | `string` | Yes | Required. The resource name of the campaign experiment to end. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.experiments.listExperimentAsyncErrors()`

Returns all errors that occurred during the last Experiment update (either scheduling or promotion). Supports standard list paging. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The name of the experiment from which to retrieve the async errors. |
| `params.pageToken` | `string` | No | Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. |
| `params.pageSize` | `integer` | No | Number of elements to retrieve in a single page. When a page request is too large, the server may decide to further limit the number of returned resources. The maximum page size is 1000. |

#### `customers.experiments.graduateExperiment()`

Graduates an experiment to a full campaign. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.experiment` | `string` | Yes | Required. The experiment to be graduated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.experiments.scheduleExperiment()`

Schedule an experiment. The in design campaign will be converted into a real campaign (called the experiment campaign) that will begin serving ads if successfully created. The experiment is scheduled immediately with status INITIALIZING. This method returns a long running operation that tracks the forking of the in design campaign. If the forking fails, a list of errors can be retrieved using the ListExperimentAsyncErrors method. The operation's metadata will be a string containing the resource name of the created experiment. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [DatabaseError]() [DateError]() [DateRangeError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The scheduled experiment. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignConversionGoals`

#### `customers.campaignConversionGoals.mutate()`

Creates, updates or removes campaign conversion goals. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign conversion goals are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignDrafts`

#### `customers.campaignDrafts.listAsyncErrors()`

Returns all errors that occurred during CampaignDraft promote. Throws an error if called before campaign draft is promoted. Supports standard list paging. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The name of the campaign draft from which to retrieve the async errors. |
| `params.pageToken` | `string` | No | Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. |
| `params.pageSize` | `integer` | No | Number of elements to retrieve in a single page. When a page request is too large, the server may decide to further limit the number of returned resources. |

#### `customers.campaignDrafts.mutate()`

Creates, updates, or removes campaign drafts. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignDraftError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign drafts are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.campaignDrafts.promote()`

Promotes the changes in a draft back to the base campaign. This method returns a Long Running Operation (LRO) indicating if the Promote is done. Use google.longrunning.Operations.GetOperation to poll the LRO until it is done. Only a done status is returned in the response. See the status in the Campaign Draft resource to determine if the promotion was successful. If the LRO failed, use CampaignDraftService.ListCampaignDraftAsyncErrors to view the list of error reasons. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignDraftError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.campaignDraft` | `string` | Yes | Required. The resource name of the campaign draft to promote. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.sharedCriteria`

#### `customers.sharedCriteria.mutate()`

Creates or removes shared criteria. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CriterionError]() [DatabaseError]() [DistinctError]() [FieldError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose shared criteria are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customAudiences`

#### `customers.customAudiences.mutate()`

Creates or updates custom audiences. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CustomAudienceError]() [CustomInterestError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [OperationAccessDeniedError]() [PolicyViolationError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose custom audiences are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupAssets`

#### `customers.adGroupAssets.mutate()`

Creates, updates, or removes ad group assets. Operation statuses are returned. List of thrown errors: [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [NotAllowlistedError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ad group assets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.billingSetups`

#### `customers.billingSetups.mutate()`

Creates a billing setup, or cancels an existing billing setup. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BillingSetupError]() [DateError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. Id of the customer to apply the billing setup mutate operation to. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignAssetSets`

#### `customers.campaignAssetSets.mutate()`

Creates, updates or removes campaign asset sets. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign asset sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.conversionValueRuleSets`

#### `customers.conversionValueRuleSets.mutate()`

Creates, updates or removes conversion value rule sets. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose conversion value rule sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.dataLinks`

#### `customers.dataLinks.remove()`

Remove a data link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DataLinkError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which the data link is updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.dataLinks.update()`

Update a data link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DataLinkError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which the data link is created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.dataLinks.create()`

Creates a data link. The requesting Google Ads account name and account ID will be shared with the third party (such as YouTube creators for video links) to whom you are creating the link with. Only customers on the allow-list can create data links. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DataLinkError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which the data link is created. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customConversionGoals`

#### `customers.customConversionGoals.mutate()`

Creates, updates or removes custom conversion goals. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose custom conversion goals are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.biddingStrategies`

#### `customers.biddingStrategies.mutate()`

Creates, updates, or removes bidding strategies. Operation statuses are returned. List of thrown errors: [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [ContextError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose bidding strategies are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.CampaignGoalConfigs`

#### `customers.CampaignGoalConfigs.mutate()`

Create or update campaign goal configs. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [CampaignGoalConfigError]() [GoalServicesError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign goal configs are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignLifecycleGoal`

#### `customers.campaignLifecycleGoal.configureCampaignLifecycleGoals()`

Process the given campaign lifecycle configurations. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignLifecycleGoalConfigError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer performing the upload. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.offlineUserDataJobs`

#### `customers.offlineUserDataJobs.run()`

Runs the offline user data job. When finished, the long running operation will contain the processing result or failure information, if any. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [HeaderError]() [InternalError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the OfflineUserDataJob to run. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.offlineUserDataJobs.create()`

Creates an offline user data job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [NotAllowlistedError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which to create an offline user data job. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.offlineUserDataJobs.addOperations()`

Adds operations to the offline user data job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the OfflineUserDataJob. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupAdLabels`

#### `customers.adGroupAdLabels.mutate()`

Creates and removes ad group ad labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose ad group ad labels are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.recommendationSubscriptions`

#### `customers.recommendationSubscriptions.mutateRecommendationSubscription()`

Mutates given subscription with corresponding apply parameters. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RecommendationError]() [RecommendationSubscriptionError]() [RequestError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the subscribing customer. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerClientLinks`

#### `customers.customerClientLinks.mutate()`

Creates or updates a customer client link. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [ManagerLinkError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose customer link are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.keywordPlanAdGroupKeywords`

#### `customers.keywordPlanAdGroupKeywords.mutate()`

Creates, updates, or removes Keyword Plan ad group keywords. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [KeywordPlanAdGroupKeywordError]() [KeywordPlanError]() [MutateError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose Keyword Plan ad group keywords are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.assetGroups`

#### `customers.assetGroups.mutate()`

Creates, updates or removes asset groups. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose asset groups are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.assetGroupListingGroupFilters`

#### `customers.assetGroupListingGroupFilters.mutate()`

Creates, updates or removes asset group listing group filters. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose asset group listing group filters are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.conversionValueRules`

#### `customers.conversionValueRules.mutate()`

Creates, updates, or removes conversion value rules. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose conversion value rules are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignGroups`

#### `customers.campaignGroups.mutate()`

Creates, updates, or removes campaign groups. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign groups are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerNegativeCriteria`

#### `customers.customerNegativeCriteria.mutate()`

Creates or removes criteria. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CriterionError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose criteria are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.accountBudgetProposals`

#### `customers.accountBudgetProposals.mutate()`

Creates, updates, or removes account budget proposals. Operation statuses are returned. List of thrown errors: [AccountBudgetProposalError]() [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DateError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignLabels`

#### `customers.campaignLabels.mutate()`

Creates and removes campaign-label relationships. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose campaign-label relationships are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.recommendations`

#### `customers.recommendations.apply()`

Applies given recommendations with corresponding apply parameters. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RecommendationError]() [RequestError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer with the recommendation. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.recommendations.dismiss()`

Dismisses given recommendations. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RecommendationError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer with the recommendation. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.recommendations.generate()`

Generates Recommendations based off the requested recommendation_types. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RecommendationError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer generating recommendations. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.ads`

#### `customers.ads.mutate()`

Updates ads. Operation statuses are returned. Updating ads is not supported for TextAd, ExpandedDynamicSearchAd, GmailAd and ImageAd. List of thrown errors: [AdCustomizerError]() [AdError]() [AdSharingError]() [AdxError]() [AssetError]() [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [DatabaseError]() [DateError]() [DistinctError]() [FeedAttributeReferenceError]() [FieldError]() [FieldMaskError]() [FunctionError]() [FunctionParsingError]() [HeaderError]() [IdError]() [ImageError]() [InternalError]() [ListOperationError]() [MediaBundleError]() [MediaFileError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [PolicyFindingError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ads are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.assetGroupAssets`

#### `customers.assetGroupAssets.mutate()`

Creates, updates or removes asset group assets. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose asset group assets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.userLists`

#### `customers.userLists.mutate()`

Creates or updates user lists. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotAllowlistedError]() [NotEmptyError]() [OperationAccessDeniedError]() [QuotaError]() [RangeError]() [RequestError]() [StringFormatError]() [StringLengthError]() [UserListError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose user lists are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignBudgets`

#### `customers.campaignBudgets.mutate()`

Creates, updates, or removes campaign budgets. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignBudgetError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [OperationAccessDeniedError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [StringLengthError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign budgets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerConversionGoals`

#### `customers.customerConversionGoals.mutate()`

Creates, updates or removes customer conversion goals. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose customer conversion goals are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerSkAdNetworkConversionValueSchemas`

#### `customers.customerSkAdNetworkConversionValueSchemas.mutate()`

Creates or updates the CustomerSkAdNetworkConversionValueSchema. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [InternalError]() [MutateError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The ID of the customer whose shared sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupLabels`

#### `customers.adGroupLabels.mutate()`

Creates and removes ad group labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose ad group labels are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.campaignAssets`

#### `customers.campaignAssets.mutate()`

Creates or removes campaign assets. Operation statuses are returned. List of thrown errors: [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [NotAllowlistedError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose campaign assets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.conversionGoalCampaignConfigs`

#### `customers.conversionGoalCampaignConfigs.mutate()`

Creates, updates or removes conversion goal campaign config. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose custom conversion goals are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.accountLinks`

#### `customers.accountLinks.create()`

Creates an account link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]() [ThirdPartyAppAnalyticsLinkError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which the account link is created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.accountLinks.mutate()`

Creates or removes an account link. From V5, create is not supported through AccountLinkService.MutateAccountLink. Use AccountLinkService.CreateAccountLink instead. List of thrown errors: [AccountLinkError]() [AuthenticationError]() [AuthorizationError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.AdGroupCriterionCustomizers`

#### `customers.AdGroupCriterionCustomizers.mutate()`

Creates, updates or removes ad group criterion customizers. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose ad group criterion customizers are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.batchJobs`

#### `customers.batchJobs.listResults()`

Returns the results of the batch job. The job must be done. Supports standard list paging. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BatchJobError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the batch job whose results are being listed. |
| `params.pageToken` | `string` | No | Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. |
| `params.pageSize` | `integer` | No |  |
| `params.responseContentType` | `string` | No | The response content type setting. Determines whether the mutable resource or just the resource name should be returned. |

#### `customers.batchJobs.run()`

Runs the batch job. The Operation.metadata field type is BatchJobMetadata. When finished, the long running operation will not contain errors or a response. Instead, use ListBatchJobResults to get the results of the job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BatchJobError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the BatchJob to run. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.batchJobs.mutate()`

Mutates a batch job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which to create a batch job. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.batchJobs.addOperations()`

Add operations to the batch job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BatchJobError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the batch job. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.invoices`

#### `customers.invoices.list()`

Returns all invoices associated with a billing setup, for a given month. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [InvoiceError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.billingSetup` | `string` | No | Required. The billing setup resource name of the requested invoices. `customers/{customer_id}/billingSetups/{billing_setup_id}` |
| `params.issueYear` | `string` | No | Required. The issue year to retrieve invoices, in yyyy format. Only invoices issued in 2019 or later can be retrieved. |
| `params.customerId` | `string` | Yes | Required. The ID of the customer to fetch invoices for. |
| `params.issueMonth` | `string` | No | Required. The issue month to retrieve invoices. |
| `params.includeGranularLevelInvoiceDetails` | `boolean` | No | Optional. When true, the response will include more granular level invoice details such as campaign level cost breakdown, itemized regulatory costs and adjustments. The default value is false. |

### `customers.assetSets`

#### `customers.assetSets.mutate()`

Creates, updates or removes asset sets. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose asset sets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerUserAccessInvitations`

#### `customers.customerUserAccessInvitations.mutate()`

Creates or removes an access invitation. List of thrown errors: [AccessInvitationError]() [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose access invitation is being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.productLinks`

#### `customers.productLinks.create()`

Creates a product link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer for which the product link is created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.productLinks.remove()`

Removes a product link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.biddingSeasonalityAdjustments`

#### `customers.biddingSeasonalityAdjustments.mutate()`

Creates, updates, or removes seasonality adjustments. Operation statuses are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose seasonality adjustments are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.customerAssets`

#### `customers.customerAssets.mutate()`

Creates, updates, or removes customer assets. Operation statuses are returned. List of thrown errors: [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer whose customer assets are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.adGroupCriteria`

#### `customers.adGroupCriteria.mutate()`

Creates, updates, or removes criteria. Operation statuses are returned. List of thrown errors: [AdGroupCriterionError]() [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [CollectionSizeError]() [ContextError]() [CriterionError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MultiplierError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. ID of the customer whose criteria are being modified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.localServicesLeads`

#### `customers.localServicesLeads.provideLeadFeedback()`

RPC to provide feedback on Local Services Lead resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the local services lead that for which the feedback is being provided. |
| `params.requestBody` | `object` | Yes | The request body. |