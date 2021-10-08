var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/john', function(req, res, next) {
  console.log('-------------testing---');
  res.status(200).send({message: 'Welcome to app', date: new Date})
  // res.render('index', { title: 'Express' });
});

module.exports = router;
