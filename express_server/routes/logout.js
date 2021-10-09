var express = require('express');
var router = express.Router();

module.exports = (db) => {
  /* GET home page. */
  
  router.get('/', function(req, res) {
    console.log('loggout testing!!!')
    req.session = null;
    // res.redirect('/urls');
    res.send(200, {message:'loggedout'})
  })  
  return router;
}