const express = require('express');
const router = express.Router();



// module.exports = router;
module.exports = (db) => {
  /* GET home page. */
  router.get('/', (req, res) => {
    
    console.log('filtercards',req.session.user_id);
    const query = {
      text: `SELECT * FROM posts where user_id = $1`,
      values: [req.session.user_id]
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
    const userId = req.body.userId;
    const cardId = req.body.cardId;
    console.log('gifimg', gif_image, gif_text, userId, cardId);
    // console.log(cardId);
    const query = {
      text: `INSERT INTO posts (gif, text, card_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *`,

      values: [gif_image, gif_text, cardId, userId]
    }

     db.query(query)
      .then(result => {
        console.log('returned', result.rows[0])
        const userid = result.rows[0].user_id;
        const query1 = {
          text: 'SELECT * FROM users WHERE users.id = $1',
          values: [userid]
        }
         db.query(query1)
          .then(result => {
            console.log('returning query2', result.rows[0])
            if(result.rows[0]){

              const firstName = {firstName: result.rows[0].first_name}
              return res.send(firstName);
            }
            res.send(200, {message:'okay'});
          })
      })
      .catch(err => console.log('cardid error',err));


    // res.status(200).send({message: 'Welcome to gifphyy', date: new Date})
    // res.render('index', { title: 'Express' });
  });



  return router;
}

