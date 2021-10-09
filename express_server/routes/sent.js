var express = require('express');
var router = express.Router();


module.exports = (db) => {
  /* GET home page. */

  router.post('/', function(req, res) {
    console.log('sent cards',req.body);
    const query = {
      text: `SELECT * FROM cards where owner_id = $1`,
      values: [req.body.userId]
    }

    return db.query(query)
      .then(result => {
        // result.rows
        return res.status(200).send({sent_cards: result.rows})
      })
      .catch(err => console.log('errr in cards', err));


    // console.log('-------------testing---');
    // res.status(200).send({message: 'Welcome to sent', date: new Date})
    // // res.render('index', { title: 'Express' });
  });


  return router;
}