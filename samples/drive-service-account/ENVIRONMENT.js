/**
 * ## **⚠️ Security Disclaimer**
 * Storing private keys directly in script files (ENVIRONMENT.js) is convenient for development 
 * but is **not a recommended security practice for production environments**. For production 
 * applications, consider using a more secure method for storing and accessing secrets.
 */

// Credentials from the service account's JSON key file.
var SERVICE_ACCOUNT_CRED = {
    "private_key": "-----BEGIN PRIVATE KEY-----\n...",
    "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
};