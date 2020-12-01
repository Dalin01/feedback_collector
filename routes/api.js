const passport = require('passport');

module.exports = (app) => {

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout(); // attached to request obj by passport
    res.redirect('/');
  });

};
