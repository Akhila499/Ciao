var express = require('express');
var router = express.Router();



// module.exports = router;
module.exports = (db) => {
  /* GET home page. */

  router.get('/', function(req, res) {
    console.log('-------------testing---');
    res.status(200).send({message: 'Welcome to filter', date: new Date})
    // res.render('index', { title: 'Express' });
  });

  router.post('/', function(req, res) {
    console.log('filtercards',req.body);
    const userId = req.body.userId;
    const query = {
      text: `SELECT * FROM posts where  = $1`,
      values: [userId]
    }

    return db.query(query)
      .then(result => {
        // result.rows
        return res.status(200).send({message: 'posts', posts: result.rows  , date: new Date})
      })
      .catch(err => err);
   
  });
return router;
}