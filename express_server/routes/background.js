const express = require('express');
const router = express.Router();



// module.exports = router;
module.exports = (db) => {
  /* GET home page. */
  router.get('/:id', function(req, res) {
    console.log(req.params.id);
    // const card_id = req.params.id;
     const query = {
       text: `SELECT background_image FROM cards where id = $1`,
       values: [req.params.id]

     }

      db.query(query)
      .then(result => {
        console.log('(((((%%%))))))',result.rows);
        return res.status(200).send({message: 'cards', bg: result.rows[0].background_image  , date: new Date})
       })
       .catch(err => console.log(err.message));
   
   });

  router.post('/', function(req, res) {
    console.log('------CHECK------', req.body);
    const bg = req.body.background;
    const id = req.body.cardId;
    const query = {
     
      text: `UPDATE cards SET background_image = $1 WHERE cards.id = $2 RETURNING *`,

      values: [bg, id]
    }

    return db.query(query)
      .then(result => result.rows[0])
      .catch((err) => 
      console.log(err));


    res.status(200).send({message: 'Welcome to gifphyy', date: new Date})
    // res.render('index', { title: 'Express' });
  });



  return router;
}
