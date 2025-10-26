// Template file - copy to environment.ts
// Update with your actual values from .env file
export const environment = {
  production: false, // Change to true for production
  apiBaseUrl: 'http://localhost:8080', // Update for production
  auth0: {
    domain: 'your-tenant.auth0.com',
    clientId: 'your_client_id_here',
    audience: 'http://localhost:8080',
  },
};
