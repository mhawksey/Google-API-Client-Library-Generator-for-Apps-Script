// The email of the user to impersonate (for domain-wide delegation).
const USER_EMAIL = 'user-to-impersonate@yourdomain.com'; 

function getService_() {
  // Use a unique name for the service, like 'Drive' or 'BigQuery', to avoid
  // token collisions between different services.
  return OAuth2.createService('Drive:' + USER_EMAIL)
      .setTokenUrl('https://oauth2.googleapis.com/token')
      .setPrivateKey(SERVICE_ACCOUNT_CRED.private_key)
      .setIssuer(SERVICE_ACCOUNT_CRED.client_email)
      .setSubject(USER_EMAIL)
      .setCache(CacheService.getUserCache())
      .setScope('https://www.googleapis.com/auth/drive');
}

/**
 * Lists files using the configured service account.
 */
function listFilesWithServiceAccount() {
  const service = getService_();
  if (!service.hasAccess()) {
    console.log('Service Account authentication failed: ' + service.getLastError());
    return;
  }
  
  const token = service.getAccessToken();

  // This is where the generated library is used with the custom token.
  const drive = new Drive({
    token: token 
  });

  const files = drive.files.list({
    supportsAllDrives: true,
    pageSize: 10
  });
  
  console.log('Files found via service account:', JSON.stringify(files, null, 2));
}