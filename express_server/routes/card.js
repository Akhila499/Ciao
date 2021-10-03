var express = require('express');
var router = express.Router();

module.exports = (db) => {
  /* GET home page. */
  
  router.get('/', function(req, res) {
    console.log(' testing!!!')
    res.status(200).send({message: 'Welcome to card', date: new Date})
  })  
  router.get('/:id', function(req, res) {

    const card_id = req.params.id;
    const query1 = {
      text:`SELECT posts.gif, posts.image, posts.video, posts.text, users.first_name, cards.title
      FROM posts
      INNER JOIN users ON posts.user_id = users.id 
      INNER JOIN cards ON posts.card_id = cards.id
      WHERE posts.card_id = $1;`,
      // text: `SELECT * FROM posts where card_id = $1`,
      values:[card_id]
    }

    db.query(query1)
      .then(result => {
        // result.rows
        console.log('tesingcarddetails@@@@@',result.rows);
        
        return res.send(200, result.rows);
        
      })
      .catch(err => err);
   
  })

  return router;
}