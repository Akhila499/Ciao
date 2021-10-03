let express = require('express');
let router = express.Router();



module.exports = (db) => {
  

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
  
  router.post('/', (req, res) => {
    console.log('>>>>> find router', req.files, req.body);
    if (req.files === null) {
      return res.status(400).json({msg:'No file found'});
    }
    const file = req.files.file;
  
    file.mv(`./public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
     
  
      const queryTwo = `INSERT INTO posts (video, card_id, user_id) VALUES ($1, $2, $3) RETURNING *`;
      db.query(queryTwo, [`/uploads/${file.name}`, req.body.cardId, req.body.userId])
        .then(result => {
          res.json({post: result.rows[0]});

        })
        .catch(err => err);
  
    });
      
   
    
  });

  


  return router;
};

