const passport = require('passport');
const { OAuth2Strategy } = require('passport-oauth2');

const providerConfig = {
  authorizationURL: 'https://www.bungie.net/en/OAuth/Authorize',
  tokenURL: 'https://www.bungie.net/Platform/App/OAuth/token/',
  clientID: '13342',
  clientSecret: process.env.BUNGIE_API_KEY,
  callbackURL: 'http://localhost:3000/auth/callback',
};

const provider = new OAuth2Strategy(
  providerConfig,
  (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    console.log(accessToken);

    done(profile);
  },
);

passport.use('provider', provider);
