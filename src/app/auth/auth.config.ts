export const authConfig: any = {
  domain: 'dev-8f2841v46pgbmzmn.us.auth0.com',
  clientId: 'IN7lZeJDIPGyMBf0u65LuEEVAISunqOv',
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: 'http://localhost:8080',
    scope: 'read:current_user openid profile offline_access email',
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: 'http://localhost:8080/api/*',
        tokenOptions: {
          authorizationParams: {
            audience: 'http://localhost:8080',
            scope: 'read:current_user openid profile offline_access email',
          },
        },
      },
    ],
  },
};
