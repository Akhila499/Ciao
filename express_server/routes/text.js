let express = require('express');
let router = express.Router();



// module.exports = router;
module.exports = (db) => {
  /* GET home page. */
  router.get('/', function(req, res) {
    const query = {
      text: `SELECT * FROM posts`
    };

    return db.query(query)
      .then(result => {
        // result.rows
        return res.status(200).send({message: 'posts', posts: result.rows  , date: new Date});
      })
      .catch(err => err);
   
  });

  router.post('/', function(req, res) {
    const textArea = req.body.selectText;
    const query = {
      text: `INSERT INTO posts ( text) VALUES ($1) RETURNING *`,

      values: [textArea]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
    // res.render('index', { title: 'Express' });
  });



  return router;
};

