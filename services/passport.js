const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

// cookies. serializeUser returns the id from the DB and not the userId
// the id then serialize the user on the browser.
// user is a mongoose model instance that was turned into an id.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// This takes an id stored in the cookie and returns a mongoose models
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE_CLIENT_ID,
  clientSecret: keys.GOOGLE_CLIENT_SECRETE,
  callbackURL: "/auth/google/callback" // Route user is sent back to after call to Google
}, async (accessToken, refreshToken, profile, cb) => {
  const existing_user = await User.findOne({
    userId: profile.id
  });
  if (existing_user) {
    return cb(null, existing_user); // return existing user details
  }
  const user = await new User({
    userId: profile.id,
    displayName: profile.displayName
  }).save();
  cb(null, user); // return new user details
}
));
