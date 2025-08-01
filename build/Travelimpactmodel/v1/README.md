# Travel Impact Model API - Apps Script Client Library

Auto-generated client library for using the **Travel Impact Model API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:56:18 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:47:45 GMT
- **Created:** Sun, 20 Jul 2025 16:56:25 GMT



---

## API Reference

### `flights`

#### `flights.computeFlightEmissions()`

Stateless method to retrieve emission estimates. Details on how emission estimates are computed are in [GitHub](https://github.com/google/travel-impact-model) The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include:

* The flight is unknown to the server.

* The input flight leg is missing one or more identifiers.

* The flight date is in the past.

* The aircraft type is not supported by the model.

* Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `flights.computeTypicalFlightEmissions()`

Retrieves typical flight emissions estimates between two airports, also known as a market. If there are no estimates available for a certain market, the response will return the market object with empty emission fields. The request will still be considered successful. Details on how the typical emissions estimates are computed are on [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md). The request can contain up to 1000 markets. If the request has more than 1000 markets, it will fail with an INVALID_ARGUMENT error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |