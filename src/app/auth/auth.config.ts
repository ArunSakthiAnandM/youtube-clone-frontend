import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://dev-8f2841v46pgbmzmn.us.auth0.com',
    redirectUrl: window.location.origin,
    clientId: 'IN7lZeJDIPGyMBf0u65LuEEVAISunqOv',
    scope: 'openid profile offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    secureRoutes: ['http://localhost:8080/'],
    customParamsAuthRequest: {
      audience: 'http://localhost:8080/',
    },
  },
};
