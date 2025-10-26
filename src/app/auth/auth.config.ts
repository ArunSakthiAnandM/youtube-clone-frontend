import { environment } from '../../environments/environment';

export const authConfig: any = {
  domain: environment.auth0?.domain || 'your-tenant.auth0.com',
  clientId: environment.auth0?.clientId || 'your_client_id',
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: environment.auth0?.audience || environment.apiBaseUrl,
    scope: 'read:current_user openid profile offline_access email',
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: `${environment.apiBaseUrl}/api/*`,
        tokenOptions: {
          authorizationParams: {
            audience: environment.auth0?.audience || environment.apiBaseUrl,
            scope: 'read:current_user openid profile offline_access email',
          },
        },
      },
    ],
  },
};
