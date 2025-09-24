# Books API - Apps Script Client Library

Auto-generated client library for using the **Books API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:06:21 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:06:21 GMT
- **Created:** Sun, 20 Jul 2025 16:14:49 GMT



---

## API Reference

### `bookshelves`

#### `bookshelves.get()`

Retrieves metadata for a specific bookshelf for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | ID of user for whom to retrieve bookshelves. |
| `params.shelf` | `string` | Yes | ID of bookshelf to retrieve. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `bookshelves.list()`

Retrieves a list of public bookshelves for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | ID of user for whom to retrieve bookshelves. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `bookshelves.volumes`

#### `bookshelves.volumes.list()`

Retrieves volumes in a specific bookshelf for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | ID of user for whom to retrieve bookshelf volumes. |
| `params.shelf` | `string` | Yes | ID of bookshelf to retrieve volumes. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.showPreorders` | `boolean` | No | Set to true to show pre-ordered books. Defaults to false. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.startIndex` | `integer` | No | Index of the first element to return (starts at 0) |

### `cloudloading`

#### `cloudloading.addBook()`

Add a user-upload volume and triggers processing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.drive_document_id` | `string` | No | A drive document id. The upload_client_token must not be set. |
| `params.mime_type` | `string` | No | The document MIME type. It can be set only if the drive_document_id is set. |
| `params.name` | `string` | No | The document name. It can be set only if the drive_document_id is set. |
| `params.upload_client_token` | `string` | No | Scotty upload token. |

#### `cloudloading.deleteBook()`

Remove the book and its contents

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The id of the book to be removed. |

#### `cloudloading.updateBook()`

Updates a user-upload volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `dictionary`

#### `dictionary.listOfflineMetadata()`

Returns a list of offline dictionary metadata available

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cpksver` | `string` | Yes | The device/version ID from which to request the data. |

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
| `params.docId` | `string` | No | The docid to share. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | No | The volume to share. |

#### `familysharing.unshare()`

Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.docId` | `string` | No | The docid to unshare. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | No | The volume to unshare. |

### `layers`

#### `layers.get()`

Gets the layer summary for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The volume to retrieve layers for. |
| `params.summaryId` | `string` | Yes | The ID for the layer to get the summary for. |
| `params.contentVersion` | `string` | No | The content version for the requested volume. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `layers.list()`

List the layer summaries for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The volume to retrieve layers for. |
| `params.contentVersion` | `string` | No | The content version for the requested volume. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `layers.annotationData`

#### `layers.annotationData.get()`

Gets the annotation data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The volume to retrieve annotations for. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotations. |
| `params.annotationDataId` | `string` | Yes | The ID of the annotation data to retrieve. |
| `params.allowWebDefinitions` | `boolean` | No | For the dictionary layer. Whether or not to allow web definitions. |
| `params.contentVersion` | `string` | Yes | The content version for the volume you are trying to retrieve. |
| `params.h` | `integer` | No | The requested pixel height for any images. If height is provided width must also be provided. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.scale` | `integer` | No | The requested scale for the image. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.w` | `integer` | No | The requested pixel width for any images. If width is provided height must also be provided. |

#### `layers.annotationData.list()`

Gets the annotation data for a volume and layer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The volume to retrieve annotation data for. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotation data. |
| `params.annotationDataId` | `string` | No | The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set. |
| `params.contentVersion` | `string` | Yes | The content version for the requested volume. |
| `params.h` | `integer` | No | The requested pixel height for any images. If height is provided width must also be provided. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.scale` | `integer` | No | The requested scale for the image. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.updatedMax` | `string` | No | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). |
| `params.updatedMin` | `string` | No | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). |
| `params.w` | `integer` | No | The requested pixel width for any images. If width is provided height must also be provided. |

### `layers.volumeAnnotations`

#### `layers.volumeAnnotations.get()`

Gets the volume annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The volume to retrieve annotations for. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotations. |
| `params.annotationId` | `string` | Yes | The ID of the volume annotation to retrieve. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `layers.volumeAnnotations.list()`

Gets the volume annotations for a volume and layer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | The volume to retrieve annotations for. |
| `params.layerId` | `string` | Yes | The ID for the layer to get the annotations. |
| `params.contentVersion` | `string` | Yes | The content version for the requested volume. |
| `params.endOffset` | `string` | No | The end offset to end retrieving data from. |
| `params.endPosition` | `string` | No | The end position to end retrieving data from. |
| `params.locale` | `string` | No | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.showDeleted` | `boolean` | No | Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.startOffset` | `string` | No | The start offset to start retrieving data from. |
| `params.startPosition` | `string` | No | The start position to start retrieving data from. |
| `params.updatedMax` | `string` | No | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). |
| `params.updatedMin` | `string` | No | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). |
| `params.volumeAnnotationsVersion` | `string` | No | The version of the volume annotations that you are requesting. |

### `myconfig`

#### `myconfig.getUserSettings()`

Gets the current settings for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.country` | `string` | No | Unused. Added only to workaround TEX mandatory request template requirement |

#### `myconfig.releaseDownloadAccess()`

Release downloaded content access restriction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cpksver` | `string` | Yes | The device/version ID from which to release the restriction. |
| `params.locale` | `string` | No | ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeIds` | `string` | Yes | The volume(s) to release restrictions for. |

#### `myconfig.requestAccess()`

Request concurrent and download access restrictions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cpksver` | `string` | Yes | The device/version ID from which to request the restrictions. |
| `params.licenseTypes` | `string` | No | The type of access license to request. If not specified, the default is BOTH. |
| `params.locale` | `string` | No | ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. |
| `params.nonce` | `string` | Yes | The client nonce value. |
| `params.source` | `string` | Yes | String to identify the originator of this request. |
| `params.volumeId` | `string` | Yes | The volume to request concurrent/download restrictions for. |

#### `myconfig.syncVolumeLicenses()`

Request downloaded content access for specified volumes on the My eBooks shelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cpksver` | `string` | Yes | The device/version ID from which to release the restriction. |
| `params.features` | `string` | No | List of features supported by the client, i.e., 'RENTALS' |
| `params.includeNonComicsSeries` | `boolean` | No | Set to true to include non-comics series. Defaults to false. |
| `params.locale` | `string` | No | ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. |
| `params.nonce` | `string` | Yes | The client nonce value. |
| `params.showPreorders` | `boolean` | No | Set to true to show pre-ordered books. Defaults to false. |
| `params.source` | `string` | Yes | String to identify the originator of this request. |
| `params.volumeIds` | `string` | No | The volume(s) to request download restrictions for. |

#### `myconfig.updateUserSettings()`

Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `mylibrary`

### `mylibrary.annotations`

#### `mylibrary.annotations.delete()`

Deletes an annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.annotationId` | `string` | Yes | The ID for the annotation to delete. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.annotations.insert()`

Inserts a new annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.annotationId` | `string` | No | The ID for the annotation to insert. |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.showOnlySummaryInResponse` | `boolean` | No | Requests that only the summary of the specified layer be provided in the response. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `mylibrary.annotations.list()`

Retrieves a list of annotations, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.contentVersion` | `string` | No | The content version for the requested volume. |
| `params.layerId` | `string` | No | The layer ID to limit annotation by. |
| `params.layerIds` | `string` | No | The layer ID(s) to limit annotation by. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |
| `params.showDeleted` | `boolean` | No | Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.updatedMax` | `string` | No | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). |
| `params.updatedMin` | `string` | No | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). |
| `params.volumeId` | `string` | No | The volume to restrict annotations to. |

#### `mylibrary.annotations.summary()`

Gets the summary of specified layers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.layerIds` | `string` | Yes | Array of layer IDs to get the summary for. |
| `params.volumeId` | `string` | Yes | Volume id to get the summary for. |
| `params.source` | `string` | No | Optional. String to identify the originator of this request. |

#### `mylibrary.annotations.update()`

Updates an existing annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.annotationId` | `string` | Yes | The ID for the annotation to update. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.requestBody` | `object` | Yes | The request body. |

### `mylibrary.bookshelves`

#### `mylibrary.bookshelves.addVolume()`

Adds a volume to a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | ID of bookshelf to which to add a volume. |
| `params.reason` | `string` | No | The reason for which the book is added to the library. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | Yes | ID of volume to add. |

#### `mylibrary.bookshelves.clearVolumes()`

Clears all volumes from a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | ID of bookshelf from which to remove a volume. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.bookshelves.get()`

Retrieves metadata for a specific bookshelf belonging to the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | ID of bookshelf to retrieve. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.bookshelves.list()`

Retrieves a list of bookshelves belonging to the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.bookshelves.moveVolume()`

Moves a volume within a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | ID of bookshelf with the volume. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | Yes | ID of volume to move. |
| `params.volumePosition` | `integer` | Yes | Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.) |

#### `mylibrary.bookshelves.removeVolume()`

Removes a volume from a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | ID of bookshelf from which to remove a volume. |
| `params.reason` | `string` | No | The reason for which the book is removed from the library. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | Yes | ID of volume to remove. |

### `mylibrary.bookshelves.volumes`

#### `mylibrary.bookshelves.volumes.list()`

Gets volume information for volumes on a bookshelf.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.shelf` | `string` | Yes | The bookshelf ID or name retrieve volumes for. |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.maxResults` | `integer` | No | Maximum number of results to return |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |
| `params.q` | `string` | No | Full-text search query string in this bookshelf. |
| `params.showPreorders` | `boolean` | No | Set to true to show pre-ordered books. Defaults to false. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.startIndex` | `integer` | No | Index of the first element to return (starts at 0) |

### `mylibrary.readingpositions`

#### `mylibrary.readingpositions.get()`

Retrieves my reading position information for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | ID of volume for which to retrieve a reading position. |
| `params.contentVersion` | `string` | No | Volume content version for which this reading position is requested. |
| `params.source` | `string` | No | String to identify the originator of this request. |

#### `mylibrary.readingpositions.setPosition()`

Sets my reading position information for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | ID of volume for which to update the reading position. |
| `params.action` | `string` | No | Action that caused this reading position to be set. |
| `params.contentVersion` | `string` | No | Volume content version for which this reading position applies. |
| `params.deviceCookie` | `string` | No | Random persistent device cookie optional on set position. |
| `params.position` | `string` | Yes | Position string for the new volume reading position. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.timestamp` | `string` | Yes | RFC 3339 UTC format timestamp associated with this reading position. |

### `notification`

#### `notification.get()`

Returns notification details for a given notification id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body. |
| `params.notification_id` | `string` | Yes | String to identify the notification. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `onboarding`

#### `onboarding.listCategories()`

List categories for onboarding experience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset. |

#### `onboarding.listCategoryVolumes()`

List available volumes under categories for onboarding experience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.categoryId` | `string` | No | List of category ids requested. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out. |
| `params.pageSize` | `integer` | No | Number of maximum results per page to be included in the response. |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous page. |

### `personalizedstream`

#### `personalizedstream.get()`

Returns a stream of personalized book clusters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `promooffer`

#### `promooffer.accept()`

Accepts the promo offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.androidId` | `string` | No | device android_id |
| `params.device` | `string` | No | device device |
| `params.manufacturer` | `string` | No | device manufacturer |
| `params.model` | `string` | No | device model |
| `params.offerId` | `string` | No |  |
| `params.product` | `string` | No | device product |
| `params.serial` | `string` | No | device serial |
| `params.volumeId` | `string` | No | Volume id to exercise the offer |

#### `promooffer.dismiss()`

Marks the promo offer as dismissed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.androidId` | `string` | No | device android_id |
| `params.device` | `string` | No | device device |
| `params.manufacturer` | `string` | No | device manufacturer |
| `params.model` | `string` | No | device model |
| `params.offerId` | `string` | No | Offer to dimiss |
| `params.product` | `string` | No | device product |
| `params.serial` | `string` | No | device serial |

#### `promooffer.get()`

Returns a list of promo offers available to the user

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.androidId` | `string` | No | device android_id |
| `params.device` | `string` | No | device device |
| `params.manufacturer` | `string` | No | device manufacturer |
| `params.model` | `string` | No | device model |
| `params.product` | `string` | No | device product |
| `params.serial` | `string` | No | device serial |

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

### `volumes`

#### `volumes.get()`

Gets volume information for a single volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | ID of volume to retrieve. |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.includeNonComicsSeries` | `boolean` | No | Set to true to include non-comics series. Defaults to false. |
| `params.partner` | `string` | No | Brand results for partner ID. |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |
| `params.source` | `string` | No | string to identify the originator of this request. |
| `params.user_library_consistent_read` | `boolean` | No |  |

#### `volumes.list()`

Performs a book search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.download` | `string` | No | Restrict to volumes by download availability. |
| `params.filter` | `string` | No | Filter search results. |
| `params.langRestrict` | `string` | No | Restrict results to books with this language code. |
| `params.libraryRestrict` | `string` | No | Restrict search to this user's library. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.orderBy` | `string` | No | Sort search results. |
| `params.partner` | `string` | No | Restrict and brand results for partner ID. |
| `params.printType` | `string` | No | Restrict to books or magazines. |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |
| `params.q` | `string` | Yes | Full-text search query string. |
| `params.showPreorders` | `boolean` | No | Set to true to show books available for preorder. Defaults to false. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.startIndex` | `integer` | No | Index of the first result to return (starts at 0) |

### `volumes.associated`

#### `volumes.associated.list()`

Return a list of associated books.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.volumeId` | `string` | Yes | ID of the source volume. |
| `params.association` | `string` | No | Association type. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.maxAllowedMaturityRating` | `string` | No | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. |
| `params.source` | `string` | No | String to identify the originator of this request. |

### `volumes.mybooks`

#### `volumes.mybooks.list()`

Return a list of books in My Library.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.acquireMethod` | `string` | No | How the book was acquired |
| `params.country` | `string` | No | ISO-3166-1 code to override the IP-based location. |
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.processingState` | `string` | No | The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.startIndex` | `integer` | No | Index of the first result to return (starts at 0) |

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
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.rating` | `string` | Yes | Rating to be given to the volume. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.volumeId` | `string` | Yes | ID of the source volume. |

### `volumes.useruploaded`

#### `volumes.useruploaded.list()`

Return a list of books uploaded by the current user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locale` | `string` | No | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.processingState` | `string` | No | The processing state of the user uploaded volumes to be returned. |
| `params.source` | `string` | No | String to identify the originator of this request. |
| `params.startIndex` | `integer` | No | Index of the first result to return (starts at 0) |
| `params.volumeId` | `string` | No | The ids of the volumes to be returned. If not specified all that match the processingState are returned. |