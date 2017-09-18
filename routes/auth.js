module.exports = [
  {
    method: ['GET', 'POST'], // Must handle both GET and POST
    path: '/login', // The callback endpoint registered with the provider
    config: {
      auth: 'bungie',
      handler(request, reply) {
        console.log('auth: ', request.auth);
        console.log('isAuth: ', request.auth.isAuthenticated);
        console.log('crdentials: ', request.auth.credentials);

        if (!request.auth.isAuthenticated) {
          return reply(`Authentication failed due to: ${request.auth.error.message}`);
        }

        // Perform any account lookup or registration, setup local session,
        // and redirect to the application. The third-party credentials are
        // stored in request.auth.credentials. Any query parameters from
        // the initial request are passed back via request.auth.credentials.query.

        return reply.redirect('/');
      },
    },
  },
  {
    method: 'GET',
    path: '/auth/callback',
    handler(req, reply) {
      console.log(req);
    },
  },
];
