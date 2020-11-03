const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js')

const User = mongoose.model('users');

passport.use(new FacebookStrategy({
  clientID: keys.FACEBOOK_APP_ID,
  clientSecret: keys.FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
}, async (accessToken, refreshToken, profile, done) => {
  const existing_user = await User.findOne({
    userId: profile.id
  });
  if (existing_user) {
    return done(null, existing_user);
  }
  const user = await new User({
    userId: profile.id,
    displayName: profile.displayName
  }).save();
  done(null, user);
}));
