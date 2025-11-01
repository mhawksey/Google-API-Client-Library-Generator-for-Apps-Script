# Books API - Apps Script Client Library

Auto-generated client library for using the **Books API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:25:05 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:25:05 GMT
- **Created:** Sun, 20 Jul 2025 16:14:49 GMT



---

## API Reference

### `promooffer`

#### `promooffer.accept()`

Accepts the promo offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.offerId` | `string` | No |  |
| `params.volumeId` | `string` | No | Volume id to exercise the offer |
| `params.serial` | `string` | No | device serial |
| `params.manufacturer` | `string` | No | device manufacturer |
| `params.model` | `string` | No | device model |
| `params.product` | `string` | No | device product |
| `params.androidId` | `string` | No | device android_id |
| `params.device` | `string` | No | device device |

#### `promooffer.dismiss()`

Marks the promo offer as dismissed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.offerId` | `string` | No | Offer to dimiss |
| `params.product` | `string` | No | device product |
| `params.model` | `string` | No | device model |
| `params.device` | `string` | No | device device |
| `params.serial` | `string` | No | device serial |
| `params.manufacturer` | `string` | No | device manufacturer |
| `params.androidId` | `string` | No | device android_id |

#### `promooffer.get()`

Returns a list of promo offers available to the user

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | No | device model |
| `params.manufacturer` | `string` | No | device manufacturer |
| `params.product` | `string` | No | device product |
| `params.device` | `string` | No | device device |
| `params.androidId` | `string` | No | device android_id |
| `params.serial` | `string` | No | device serial |

### `onboarding`

#### `onboarding.listCategoryVolumes()`

List available volumes under categories for onboarding experience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out. |
| `params.categoryId` | `string` | No | List of category ids requested. |
| `params.pageSize` | `integer` | No | Number of maximum results per page to be included in the response. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset. |

#### `onboarding.listCategories()`

List categories for onboarding experience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset. |

### `bookshelves`

#### `bookshelves.list()`

Retrieves a list of public bookshelves for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | ID of user for whom to retrieve bookshelves. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `bookshelves.get()`

Retrieves metadata for a specific bookshelf for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | ID of user for whom to retrieve bookshelves. |
| `params.shelf` | `string` | Yes | ID of bookshelf to retrieve. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `bookshelves.volumes`

#### `bookshelves.volumes.list()`

Retrieves volumes in a specific bookshelf for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startIndex` | `integer` | No | Index of the first element to return (starts at 0) |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.shelf` | `string` | Yes | ID of bookshelf to retrieve volumes. |
| `params.userId` | `string` | Yes | ID of user for whom to retrieve bookshelf volumes. |
| `params.showPreorders` | `boolean` | No | Set to true to show pre-ordered books. Defaults to false. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |

### `dictionary`

#### `dictionary.listOfflineMetadata()`

Returns a list of offline dictionary metadata available

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cpksver` | `string` | Yes | The device/version ID from which to request the data. |

### `volumes`

#### `volumes.get()`

Gets volume information for a single volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.includeNonComicsSeries` | `boolean` | No | Set to true to include non-comics series. Defaults to false. |
| `params.partner` | `string` | No | Brand results for partner ID. |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.volumeId` | `string` | Yes | ID of volume to retrieve. |
| `params.source` | `string` | No | string to identify the originator of this request. |
| `params.user_library_consistent_read` | `boolean` | No |  |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |

#### `volumes.list()`

Performs a book search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.showPreorders` | `boolean` | No | Set to true to show books available for preorder. Defaults to false. |
| `params.orderBy` | `string` | No | Sort search results. |
| `params.partner` | `string` | No | Restrict and brand results for partner ID. |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |
| `params.libraryRestrict` | `string` | No | Restrict search to this user's library. |
| `params.printType` | `string` | No | Restrict to books or magazines. |
| `params.startIndex` | `integer` | No | Index of the first result to return (starts at 0) |
| `params.download` | `string` | No | Restrict to volumes by download availability. |
| `params.filter` | `string` | No | Filter search results. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.langRestrict` | `string` | No | Restrict results to books with this language code. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.q` | `string` | Yes | Full-text search query string. |

### `volumes.mybooks`

#### `volumes.mybooks.list()`

Return a list of books in My Library.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.acquireMethod` | `string` | No | How the book was acquired |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.startIndex` | `integer` | No | Index of the first result to return (starts at 0) |
| `params.processingState` | `string` | No | The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |

### `volumes.recommended`

#### `volumes.recommended.list()`

Return a list of recommended books for the current user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `volumes.recommended.rate()`

Rate a recommended book for the current user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.rating` | `string` | Yes | Rating to be given to the volume. |
| `params.volumeId` | `string` | Yes | ID of the source volume. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |

### `volumes.useruploaded`

#### `volumes.useruploaded.list()`

Return a list of books uploaded by the current user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | No | The ids of the volumes to be returned. If not specified all that match the processingState are returned. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.processingState` | `string` | No | The processing state of the user uploaded volumes to be returned. |
| `params.startIndex` | `integer` | No | Index of the first result to return (starts at 0) |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `volumes.associated`

#### `volumes.associated.list()`

Return a list of associated books.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.association` | `string` | No | Association type. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. |
| `params.volumeId` | `string` | Yes | ID of the source volume. |

### `personalizedstream`

#### `personalizedstream.get()`

Returns a stream of personalized book clusters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `layers`

#### `layers.list()`

List the layer summaries for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | Yes | The volume to retrieve layers for. |
| `params.contentVersion` | `string` | No | The content version for the requested volume. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |

#### `layers.get()`

Gets the layer summary for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.summaryId` | `string` | Yes | The ID for the layer to get the summary for. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.contentVersion` | `string` | No | The content version for the requested volume. |
| `params.volumeId` | `string` | Yes | The volume to retrieve layers for. |

### `layers.volumeAnnotations`

#### `layers.volumeAnnotations.list()`

Gets the volume annotations for a volume and layer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endPosition` | `string` | No | The end position to end retrieving data from. |
| `params.endOffset` | `string` | No | The end offset to end retrieving data from. |
| `params.updatedMin` | `string` | No | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). |
| `params.startPosition` | `string` | No | The start position to start retrieving data from. |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.updatedMax` | `string` | No | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). |
| `params.volumeAnnotationsVersion` | `string` | No | The version of the volume annotations that you are requesting. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.contentVersion` | `string` | Yes | The content version for the requested volume. |
| `params.showDeleted` | `boolean` | No | Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotations. |
| `params.volumeId` | `string` | Yes | The volume to retrieve annotations for. |
| `params.startOffset` | `string` | No | The start offset to start retrieving data from. |

#### `layers.volumeAnnotations.get()`

Gets the volume annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.annotationId` | `string` | Yes | The ID of the volume annotation to retrieve. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotations. |
| `params.volumeId` | `string` | Yes | The volume to retrieve annotations for. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `layers.annotationData`

#### `layers.annotationData.get()`

Gets the annotation data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.h` | `integer` | No | The requested pixel height for any images. If height is provided width must also be provided. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.contentVersion` | `string` | Yes | The content version for the volume you are trying to retrieve. |
| `params.scale` | `integer` | No | The requested scale for the image. |
| `params.allowWebDefinitions` | `boolean` | No | For the dictionary layer. Whether or not to allow web definitions. |
| `params.w` | `integer` | No | The requested pixel width for any images. If width is provided height must also be provided. |
| `params.volumeId` | `string` | Yes | The volume to retrieve annotations for. |
| `params.annotationDataId` | `string` | Yes | The ID of the annotation data to retrieve. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotations. |

#### `layers.annotationData.list()`

Gets the annotation data for a volume and layer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.updatedMin` | `string` | No | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). |
| `params.contentVersion` | `string` | Yes | The content version for the requested volume. |
| `params.scale` | `integer` | No | The requested scale for the image. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotation data. |
| `params.annotationDataId` | `string` | No | The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set. |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.updatedMax` | `string` | No | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). |
| `params.h` | `integer` | No | The requested pixel height for any images. If height is provided width must also be provided. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.w` | `integer` | No | The requested pixel width for any images. If width is provided height must also be provided. |
| `params.volumeId` | `string` | Yes | The volume to retrieve annotation data for. |

### `familysharing`

#### `familysharing.getFamilyInfo()`

Gets information regarding the family that the user is part of.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `familysharing.share()`

Initiates sharing of the content with the user's family. Empty response indicates success.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | No | The volume to share. |
| `params.docId` | `string` | No | The docid to share. |

#### `familysharing.unshare()`

Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.docId` | `string` | No | The docid to unshare. |
| `params.volumeId` | `string` | No | The volume to unshare. |

### `notification`

#### `notification.get()`

Returns notification details for a given notification id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.notification_id` | `string` | Yes | String to identify the notification. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `myconfig`

#### `myconfig.updateUserSettings()`

Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `myconfig.syncVolumeLicenses()`

Request downloaded content access for specified volumes on the My eBooks shelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.nonce` | `string` | Yes | The client nonce value. |
| `params.features` | `string` | No | List of features supported by the client, i.e., 'RENTALS' |
| `params.showPreorders` | `boolean` | No | Set to true to show pre-ordered books. Defaults to false. |
| `params.source` | `string` | Yes | String to identify the originator of this request. |
| `params.volumeIds` | `string` | No | The volume(s) to request download restrictions for. |
| `params.includeNonComicsSeries` | `boolean` | No | Set to true to include non-comics series. Defaults to false. |
| `params.locale` | `string` | No | ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. |
| `params.cpksver` | `string` | Yes | The device/version ID from which to release the restriction. |

#### `myconfig.requestAccess()`

Request concurrent and download access restrictions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. |
| `params.volumeId` | `string` | Yes | The volume to request concurrent/download restrictions for. |
| `params.nonce` | `string` | Yes | The client nonce value. |
| `params.licenseTypes` | `string` | No | The type of access license to request. If not specified, the default is BOTH. |
| `params.source` | `string` | Yes | String to identify the originator of this request. |
| `params.cpksver` | `string` | Yes | The device/version ID from which to request the restrictions. |

#### `myconfig.getUserSettings()`

Gets the current settings for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.country` | `string` | No | Unused. Added only to workaround TEX mandatory request template requirement |

#### `myconfig.releaseDownloadAccess()`

Release downloaded content access restriction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. |
| `params.cpksver` | `string` | Yes | The device/version ID from which to release the restriction. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeIds` | `string` | Yes | The volume(s) to release restrictions for. |

### `mylibrary`

### `mylibrary.bookshelves`

#### `mylibrary.bookshelves.addVolume()`

Adds a volume to a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | ID of volume to add. |
| `params.reason` | `string` | No | The reason for which the book is added to the library. |
| `params.shelf` | `string` | Yes | ID of bookshelf to which to add a volume. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.bookshelves.removeVolume()`

Removes a volume from a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.reason` | `string` | No | The reason for which the book is removed from the library. |
| `params.volumeId` | `string` | Yes | ID of volume to remove. |
| `params.shelf` | `string` | Yes | ID of bookshelf from which to remove a volume. |

#### `mylibrary.bookshelves.list()`

Retrieves a list of bookshelves belonging to the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.bookshelves.get()`

Retrieves metadata for a specific bookshelf belonging to the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | ID of bookshelf to retrieve. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.bookshelves.moveVolume()`

Moves a volume within a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | ID of volume to move. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumePosition` | `integer` | Yes | Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.) |
| `params.shelf` | `string` | Yes | ID of bookshelf with the volume. |

#### `mylibrary.bookshelves.clearVolumes()`

Clears all volumes from a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | ID of bookshelf from which to remove a volume. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `mylibrary.bookshelves.volumes`

#### `mylibrary.bookshelves.volumes.list()`

Gets volume information for volumes on a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.q` | `string` | No | Full-text search query string in this bookshelf. |
| `params.startIndex` | `integer` | No | Index of the first element to return (starts at 0) |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.showPreorders` | `boolean` | No | Set to true to show pre-ordered books. Defaults to false. |
| `params.shelf` | `string` | Yes | The bookshelf ID or name retrieve volumes for. |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `mylibrary.annotations`

#### `mylibrary.annotations.update()`

Updates an existing annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.annotationId` | `string` | Yes | The ID for the annotation to update. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `mylibrary.annotations.insert()`

Inserts a new annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.showOnlySummaryInResponse` | `boolean` | No | Requests that only the summary of the specified layer be provided in the response. |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.annotationId` | `string` | No | The ID for the annotation to insert. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `mylibrary.annotations.delete()`

Deletes an annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.annotationId` | `string` | Yes | The ID for the annotation to delete. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.annotations.summary()`

Gets the summary of specified layers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.layerIds` | `string` | Yes | Array of layer IDs to get the summary for. |
| `params.volumeId` | `string` | Yes | Volume id to get the summary for. |
| `params.source` | `string` | No | Optional. String to identify the originator of this request. |

#### `mylibrary.annotations.list()`

Retrieves a list of annotations, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.contentVersion` | `string` | No | The content version for the requested volume. |
| `params.showDeleted` | `boolean` | No | Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. |
| `params.updatedMin` | `string` | No | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). |
| `params.layerId` | `string` | No | The layer ID to limit annotation by. |
| `params.layerIds` | `string` | No | The layer ID(s) to limit annotation by. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | No | The volume to restrict annotations to. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.updatedMax` | `string` | No | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |

### `mylibrary.readingpositions`

#### `mylibrary.readingpositions.get()`

Retrieves my reading position information for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.contentVersion` | `string` | No | Volume content version for which this reading position is requested. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | Yes | ID of volume for which to retrieve a reading position. |

#### `mylibrary.readingpositions.setPosition()`

Sets my reading position information for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.action` | `string` | No | Action that caused this reading position to be set. |
| `params.timestamp` | `string` | Yes | RFC 3339 UTC format timestamp associated with this reading position. |
| `params.deviceCookie` | `string` | No | Random persistent device cookie optional on set position. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.contentVersion` | `string` | No | Volume content version for which this reading position applies. |
| `params.position` | `string` | Yes | Position string for the new volume reading position. |
| `params.volumeId` | `string` | Yes | ID of volume for which to update the reading position. |

### `series`

#### `series.get()`

Returns Series metadata for the given series ids.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.series_id` | `string` | Yes | String that identifies the series |

### `series.membership`

#### `series.membership.get()`

Returns Series membership data given the series id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.page_size` | `integer` | No | Number of maximum results per page to be included in the response. |
| `params.page_token` | `string` | No | The value of the nextToken from the previous page. |
| `params.series_id` | `string` | Yes | String that identifies the series |

### `cloudloading`

#### `cloudloading.deleteBook()`

Remove the book and its contents

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The id of the book to be removed. |

#### `cloudloading.addBook()`

Add a user-upload volume and triggers processing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | The document name. It can be set only if the drive_document_id is set. |
| `params.upload_client_token` | `string` | No | Scotty upload token. |
| `params.mime_type` | `string` | No | The document MIME type. It can be set only if the drive_document_id is set. |
| `params.drive_document_id` | `string` | No | A drive document id. The upload_client_token must not be set. |

#### `cloudloading.updateBook()`

Updates a user-upload volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |