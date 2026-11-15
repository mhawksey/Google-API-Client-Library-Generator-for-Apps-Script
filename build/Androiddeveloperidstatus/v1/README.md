# Android Developer ID Status API - Apps Script Client Library

Auto-generated client library for using the **Android Developer ID Status API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:27:44 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:27:44 GMT
- **Created:** Sun, 15 Nov 2026 15:27:44 GMT



---

## API Reference

### `packages`

### `packages.packageRegistrationStatus`

#### `packages.packageRegistrationStatus.check()`

Retrieves the Android Developer ID registration status for a given package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the package registration status resource. Format: packages/{package}/packageRegistrationStatus `{package}` must follow the specific format: The fully-qualified Android package name with dots ('.') replaced by hyphens ('-') (e.g., `com-example-app` instead of `com.example.app`). |
| `params.certificateFingerprint` | `string` | No | Optional. The SHA-256 fingerprint of the public certificate represented as a 64-character lowercase hexadecimal string without any colons or separators (e.g., `d6ac89ed1d0a805aad4b087d06d5f41645b814480b133fbc867ef7498d069e06`). |