var express = require('express');
var router = express.Router();


module.exports = (db) => {
  /* GET home page. */

  router.get('/', function(req, res) {
    console.log('-------------testing---');
    res.status(200).send({message: 'Welcome to newcard', date: new Date})
    // res.render('index', { title: 'Express' });
  });

  router.post('/', function(req, res) {

    console.log('new card details', req.body);
    // let cardCreated = new Date();
    // cardCreated = cardCreated.toString();
    // console.log('cardstring',cardCreated);
    // const cardCreated = 'fund';
    // console.log();
    
    const query1 = {
      text: `INSERT INTO recipients (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *`,

      values: [req.body.fName,req.body.lName, req.body.email]
    }
    
    return db.query(query1)
      .then(result => {

        const query2 = {
          text: `INSERT INTO cards (title, owner_id, recipient_id ) VALUES ($1, $2, $3) RETURNING *`,
    
          values: [req.body.title, req.body.userId, result.rows[0].id]
        }
        console.log('checking query2', req.body, result.rows[0]);
        db.query(query2)
        .then(result2 => {

          console.log('newwwww2222',result2.rows[0]);
          result2.rows[0]
          res.send(200, {cardId:result2.rows[0].id})
          }
        )
        
      })
      .catch(err => console.log(err));
  });


return router;
}


// const query = {
//   text: `INSERT INTO posts (gif, text) VALUES ($1, $2) RETURNING *`,

//   values: [gif_image,gif_text]
// }

// return db.query(query)
//   .then(result => result.rows[0])
//   .catch(err => err);