# Data Manager API - Apps Script Client Library

Auto-generated client library for using the **Data Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:59:45 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:59:45 GMT
- **Created:** Sat, 01 Nov 2025 00:35:17 GMT



---

## API Reference

### `adEvents`

#### `adEvents.ingest()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `accountTypes`

### `accountTypes.accounts`

### `accountTypes.accounts.partnerLinks`

#### `accountTypes.accounts.partnerLinks.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.partnerLinks.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `accountTypes.accounts.partnerLinks.search()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No |  |
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

### `accountTypes.accounts.userListGlobalLicenses`

#### `accountTypes.accounts.userListGlobalLicenses.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `accountTypes.accounts.userListGlobalLicenses.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `accountTypes.accounts.userListGlobalLicenses.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.userListGlobalLicenses.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `accountTypes.accounts.userListGlobalLicenses.userListGlobalLicenseCustomerInfos`

#### `accountTypes.accounts.userListGlobalLicenses.userListGlobalLicenseCustomerInfos.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.filter` | `string` | No |  |
| `params.parent` | `string` | Yes |  |

### `accountTypes.accounts.insights`

#### `accountTypes.accounts.insights.retrieve()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `accountTypes.accounts.userLists`

#### `accountTypes.accounts.userLists.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No |  |
| `params.updateMask` | `string` | No |  |
| `params.name` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.userLists.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |
| `params.parent` | `string` | Yes |  |

#### `accountTypes.accounts.userLists.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.validateOnly` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.userLists.delete()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.validateOnly` | `boolean` | No |  |

#### `accountTypes.accounts.userLists.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `accountTypes.accounts.reports`

#### `accountTypes.accounts.reports.retrievePartnerMatchReport()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No |  |
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.startDate` | `string` | No |  |
| `params.currencyCode` | `string` | No |  |
| `params.endDate` | `string` | No |  |
| `params.filter` | `string` | No |  |

### `accountTypes.accounts.userListDirectLicenses`

#### `accountTypes.accounts.userListDirectLicenses.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `accountTypes.accounts.userListDirectLicenses.create()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.userListDirectLicenses.list()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageToken` | `string` | No |  |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No |  |

#### `accountTypes.accounts.userListDirectLicenses.patch()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.updateMask` | `string` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `requestStatus`

#### `requestStatus.retrieve()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No |  |

### `events`

#### `events.ingest()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `users`

#### `users.remove()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.ingest()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `audienceMembers`

#### `audienceMembers.ingest()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `audienceMembers.remove()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `audienceMembers.removeAll()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |