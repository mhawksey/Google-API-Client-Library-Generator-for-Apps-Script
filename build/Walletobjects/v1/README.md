# Google Wallet API - Apps Script Client Library

Auto-generated client library for using the **Google Wallet API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 01 Sep 2025 00:02:59 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:55:26 GMT
- **Created:** Sun, 20 Jul 2025 17:02:55 GMT



---

## API Reference

### `issuer`

#### `issuer.get()`

Returns the issuer with the given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an issuer. |

#### `issuer.insert()`

Inserts an issuer with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `issuer.list()`

Returns a list of all issuers shared to the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `issuer.patch()`

Updates the issuer referenced by the given issuer ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an issuer. |
| `params.resource` | `object` | Yes | The request body. |

#### `issuer.update()`

Updates the issuer referenced by the given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an issuer. |
| `params.resource` | `object` | Yes | The request body. |

### `eventticketclass`

#### `eventticketclass.addmessage()`

Adds a message to the event ticket class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `eventticketclass.get()`

Returns the event ticket class with the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `eventticketclass.insert()`

Inserts an event ticket class with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `eventticketclass.list()`

Returns a list of all event ticket classes for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issuerId` | `string` | No | The ID of the issuer authorized to list classes. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `eventticketclass.patch()`

Updates the event ticket class referenced by the given class ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `eventticketclass.update()`

Updates the event ticket class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `eventticketobject`

#### `eventticketobject.addmessage()`

Adds a message to the event ticket object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `eventticketobject.get()`

Returns the event ticket object with the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `eventticketobject.insert()`

Inserts an event ticket object with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `eventticketobject.list()`

Returns a list of all event ticket objects for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.classId` | `string` | No | The ID of the class whose objects will be listed. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `eventticketobject.modifylinkedofferobjects()`

Modifies linked offer objects for the event ticket object with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `eventticketobject.patch()`

Updates the event ticket object referenced by the given object ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `eventticketobject.update()`

Updates the event ticket object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `flightclass`

#### `flightclass.addmessage()`

Adds a message to the flight class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `flightclass.get()`

Returns the flight class with the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `flightclass.insert()`

Inserts an flight class with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `flightclass.list()`

Returns a list of all flight classes for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issuerId` | `string` | No | The ID of the issuer authorized to list classes. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `flightclass.patch()`

Updates the flight class referenced by the given class ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `flightclass.update()`

Updates the flight class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `flightobject`

#### `flightobject.addmessage()`

Adds a message to the flight object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `flightobject.get()`

Returns the flight object with the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `flightobject.insert()`

Inserts an flight object with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `flightobject.list()`

Returns a list of all flight objects for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.classId` | `string` | No | The ID of the class whose objects will be listed. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `flightobject.patch()`

Updates the flight object referenced by the given object ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `flightobject.update()`

Updates the flight object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `genericclass`

#### `genericclass.addmessage()`

Adds a message to the generic class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `genericclass.get()`

Returns the generic class with the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. |

#### `genericclass.insert()`

Inserts a generic class with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `genericclass.list()`

Returns a list of all generic classes for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issuerId` | `string` | No | The ID of the issuer authorized to list classes. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `genericclass.patch()`

Updates the generic class referenced by the given class ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. |
| `params.resource` | `object` | Yes | The request body. |

#### `genericclass.update()`

Updates the Generic class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. |
| `params.resource` | `object` | Yes | The request body. |

### `genericobject`

#### `genericobject.addmessage()`

Adds a message to the generic object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `genericobject.get()`

Returns the generic object with the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. |

#### `genericobject.insert()`

Inserts a generic object with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `genericobject.list()`

Returns a list of all generic objects for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.classId` | `string` | No | The ID of the class whose objects will be listed. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `genericobject.patch()`

Updates the generic object referenced by the given object ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. |
| `params.resource` | `object` | Yes | The request body. |

#### `genericobject.update()`

Updates the generic object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. |
| `params.resource` | `object` | Yes | The request body. |

### `giftcardclass`

#### `giftcardclass.addmessage()`

Adds a message to the gift card class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `giftcardclass.get()`

Returns the gift card class with the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `giftcardclass.insert()`

Inserts an gift card class with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `giftcardclass.list()`

Returns a list of all gift card classes for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issuerId` | `string` | No | The ID of the issuer authorized to list classes. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `giftcardclass.patch()`

Updates the gift card class referenced by the given class ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `giftcardclass.update()`

Updates the gift card class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `giftcardobject`

#### `giftcardobject.addmessage()`

Adds a message to the gift card object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `giftcardobject.get()`

Returns the gift card object with the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `giftcardobject.insert()`

Inserts an gift card object with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `giftcardobject.list()`

Returns a list of all gift card objects for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.classId` | `string` | No | The ID of the class whose objects will be listed. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `giftcardobject.patch()`

Updates the gift card object referenced by the given object ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `giftcardobject.update()`

Updates the gift card object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `jwt`

#### `jwt.insert()`

Inserts the resources in the JWT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `loyaltyclass`

#### `loyaltyclass.addmessage()`

Adds a message to the loyalty class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `loyaltyclass.get()`

Returns the loyalty class with the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `loyaltyclass.insert()`

Inserts an loyalty class with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `loyaltyclass.list()`

Returns a list of all loyalty classes for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issuerId` | `string` | No | The ID of the issuer authorized to list classes. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `loyaltyclass.patch()`

Updates the loyalty class referenced by the given class ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `loyaltyclass.update()`

Updates the loyalty class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `loyaltyobject`

#### `loyaltyobject.addmessage()`

Adds a message to the loyalty object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `loyaltyobject.get()`

Returns the loyalty object with the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `loyaltyobject.insert()`

Inserts an loyalty object with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `loyaltyobject.list()`

Returns a list of all loyalty objects for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.classId` | `string` | No | The ID of the class whose objects will be listed. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `loyaltyobject.modifylinkedofferobjects()`

Modifies linked offer objects for the loyalty object with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `loyaltyobject.patch()`

Updates the loyalty object referenced by the given object ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `loyaltyobject.update()`

Updates the loyalty object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `offerclass`

#### `offerclass.addmessage()`

Adds a message to the offer class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `offerclass.get()`

Returns the offer class with the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `offerclass.insert()`

Inserts an offer class with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `offerclass.list()`

Returns a list of all offer classes for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issuerId` | `string` | No | The ID of the issuer authorized to list classes. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `offerclass.patch()`

Updates the offer class referenced by the given class ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `offerclass.update()`

Updates the offer class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `offerobject`

#### `offerobject.addmessage()`

Adds a message to the offer object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `offerobject.get()`

Returns the offer object with the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `offerobject.insert()`

Inserts an offer object with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `offerobject.list()`

Returns a list of all offer objects for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.classId` | `string` | No | The ID of the class whose objects will be listed. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `offerobject.patch()`

Updates the offer object referenced by the given object ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `offerobject.update()`

Updates the offer object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `permissions`

#### `permissions.get()`

Returns the permissions for the given issuer id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an issuer. This ID must be unique across all issuers. |

#### `permissions.update()`

Updates the permissions for the given issuer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an issuer. This ID must be unique across all issuers. |
| `params.resource` | `object` | Yes | The request body. |

### `media`

#### `media.upload()`

Uploads rotating barcode values for the transit object referenced by the given object ID. Note the max upload size is specified in google3/production/config/cdd/apps-upload/customers/payments-consumer-passes/config.gcl and enforced by Scotty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `media.download()`

Downloads rotating barcode values for the transit object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

### `walletobjects`

### `walletobjects.v1`

### `walletobjects.v1.privateContent`

#### `walletobjects.v1.privateContent.setPassUpdateNotice()`

Provide Google with information about awaiting private pass update. This will allow Google to provide the update notification to the device that currently holds this pass.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `smarttap`

#### `smarttap.insert()`

Inserts the smart tap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `transitclass`

#### `transitclass.addmessage()`

Adds a message to the transit class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `transitclass.get()`

Returns the transit class with the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `transitclass.insert()`

Inserts a transit class with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `transitclass.list()`

Returns a list of all transit classes for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issuerId` | `string` | No | The ID of the issuer authorized to list classes. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `transitclass.patch()`

Updates the transit class referenced by the given class ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `transitclass.update()`

Updates the transit class referenced by the given class ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

### `transitobject`

#### `transitobject.addmessage()`

Adds a message to the transit object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `transitobject.get()`

Returns the transit object with the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |

#### `transitobject.insert()`

Inserts an transit object with the given ID and properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `transitobject.list()`

Returns a list of all transit objects for a given issuer ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.classId` | `string` | No | The ID of the class whose objects will be listed. |
| `params.token` | `string` | No | Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects. |
| `params.maxResults` | `integer` | No | Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined. |

#### `transitobject.patch()`

Updates the transit object referenced by the given object ID. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |

#### `transitobject.update()`

Updates the transit object referenced by the given object ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceId` | `string` | Yes | The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. |
| `params.resource` | `object` | Yes | The request body. |