# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: loyaltycustomers_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:31:19 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:31:19 GMT
- **Created:** Sun, 15 Nov 2026 16:31:19 GMT



---

## API Reference

### `accounts`

### `accounts.loyaltyCustomers`

#### `accounts.loyaltyCustomers.manage()`

Manages (inserts, updates, or removes) a customer's loyalty tier information. This method serves as a single interface for all changes to a customer's loyalty status. The specific action (insert, update, or remove) is determined by the current state of the merchant-to-customer association and the `loyalty_tier` value provided in the request. For more information on how to use this method, see [Overview of the loyalty customer match service](https://developers.google.com/merchant/api/guides/loyalty/customer-match-service). **Operation Logic:**

* **Upsert (Insert/Update):** Providing any valid tier other than `NON_MEMBER` will associate the customer with that tier. If an association already exists, it will be updated; otherwise, a new one will be created.

* **Removal:** Setting `loyalty_tier` to `NON_MEMBER` will remove any existing loyalty association for the customer. **Privacy Note:** To protect user privacy, this method consistently returns a `200 OK` status with a default `LoyaltyCustomer` response if the customer's identifier cannot be matched to a Google account or if the user has not opted into loyalty personalization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account where this loyalty customer will be handled. Format: `accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |