const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback',
    passport.authenticate('google',
    function(req, res) {
      res.redirect('/survey');
    }));

  app.get('/auth/facebook',
    passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/'
    }),
    function(req, res) {
      res.redirect('/surveys');
    });

};
