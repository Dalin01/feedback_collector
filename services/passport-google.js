const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js')

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    dont(null, user);
  })
})

passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE_CLIENT_ID,
  clientSecret: keys.GOOGLE_CLIENT_SECRETE,
  callbackURL: "/auth/google/callback" // Route user is sent back to after call to Google
}, async (accessToken, refreshToken, profile, cb) => {
  const existing_user = await User.findOne({
    google_id: profile.id
  });
  if (existing_user) {
    return done(null, existing_user);
  }
  const user = await new User({
    google_id: profile.id
  }).save();
  done(null, user);
}
));
