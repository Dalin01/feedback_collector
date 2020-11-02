const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js')

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID,
    clientSecret: keys.FACEBOOK_APP_SECRET,
    callbackURL: "auth/facebook/callback"
  }, async (accessToken, refreshToken, profile, cb) => {
    const existing_user = await User.findOne({
      facebookId: profile.id
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
