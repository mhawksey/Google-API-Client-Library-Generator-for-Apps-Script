# Travel Impact Model API - Apps Script Client Library

Auto-generated client library for using the **Travel Impact Model API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:14:38 GMT
- **Last Modified:** Mon, 01 Dec 2025 01:18:01 GMT
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
| `params.requestBody` | `object` | Yes | The request body. |

#### `flights.computeTypicalFlightEmissions()`

Retrieves typical flight emissions estimates between two airports, also known as a market. If there are no estimates available for a certain market, the response will return the market object with empty emission fields. The request will still be considered successful. Details on how the typical emissions estimates are computed are on [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md). The request can contain up to 1000 markets. If the request has more than 1000 markets, it will fail with an INVALID_ARGUMENT error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `flights.computeScope3FlightEmissions()`

Stateless method to retrieve GHG emissions estimates for a set of flight segments for Scope 3 reporting. The response will contain all entries that match the input Scope3FlightSegment flight segments, in the same order provided. The estimates will be computed using the following cascading logic (using the first one that is available): 1. TIM-based emissions given origin, destination, carrier, flightNumber, departureDate, and cabinClass. 2. Typical flight emissions given origin, destination, year in departureDate, and cabinClass. 3. Distance-based emissions calculated using distanceKm, year in departureDate, and cabinClass. If there is a future flight requested in this calendar year, we do not support Tier 1 emissions and will fallback to Tier 2 or 3 emissions. If the requested future flight is in not in this calendar year, we will return an empty response. We recommend that for future flights, computeFlightEmissions API is used instead. If there are no estimates available for a certain flight with any of the three methods, the response will return a Scope3FlightEmissions object with empty emission fields. The request will still be considered successful. Generally, missing emissions estimates occur when the flight is unknown to the server (e.g. no specific flight exists, or typical flight emissions are not available for the requested pair). The request will fail with an `INVALID_ARGUMENT` error if:

* The request contains more than 1,000 flight legs.

* The input flight leg is missing one or more identifiers. For example, missing origin/destination without a valid distance for TIM_EMISSIONS or TYPICAL_FLIGHT_EMISSIONS type matching, or missing distance for a DISTANCE_BASED_EMISSIONS type matching (if you want to fallback to distance-based emissions or want a distance-based emissions estimate, you need to specify a distance).

* The flight date is before 2019 (Scope 3 data is only available for 2019 and after).

* The flight distance is 0 or lower.

* Missing cabin class. Because the request is processed with fallback logic, it is possible that misconfigured requests return valid emissions estimates using fallback methods. For example, if a request has the wrong flight number but specifies the origin and destination, the request will still succeed, but the returned emissions will be based solely on the typical flight emissions. Similarly, if a request is missing the origin for a typical flight emissions request, but specifies a valid distance, the request could succeed based solely on the distance-based emissions. Consequently, one should check the source of the returned emissions (source) to confirm the results are as expected.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |