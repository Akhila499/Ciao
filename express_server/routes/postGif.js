var express = require('express');
var router = express.Router();



// module.exports = router;
module.exports = (db) => {
  /* GET home page. */
  router.get('/', function(req, res) {
    const query = {
      text: `SELECT * FROM posts`
    }

    return db.query(query)
      .then(result => {
        // result.rows
        return res.status(200).send({message: 'posts', posts: result.rows  , date: new Date})
      })
      .catch(err => err);
   
  });

  router.post('/', function(req, res) {
    console.log('------@@@@@-asdlksdfj---', req.body);
    const gif_image = req.body.selectedGif[req.body.selectedGifId].gif;
    const gif_text = req.body.selectText;
    const query = {
      text: `INSERT INTO posts (gif, text) VALUES ($1, $2) RETURNING *`,

      values: [gif_image,gif_text]
    }

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);


    res.status(200).send({message: 'Welcome to gifphyy', date: new Date})
    // res.render('index', { title: 'Express' });
  });



  return router;
}

