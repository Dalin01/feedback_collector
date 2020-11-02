const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const keys = require(__dirname + '/config/keys.js');
require(__dirname + '/models/user.js');
require(__dirname + '/services/passport-google.js');
require(__dirname + '/services/passport-facebook.js');

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 1000,
  keys: [keys.COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require(__dirname + '/routes/authRoutes.js')(app);
require(__dirname + '/routes/api.js')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
})
