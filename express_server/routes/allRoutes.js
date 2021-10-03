let express = require('express');
let router = express.Router();


// module.exports = router;
module.exports = (db) => {
  /* GET home page. */
  // router.get('/', function(req,res){

  // })

  
  router.get('/:id', function(req, res) {
    console.log(req.params.id);
    const query = {
      text: `SELECT video, image, text, gif FROM posts WHERE posts.card_id = $1`,
      values: [req.params.id]
      
    };
    
    return db.query(query)
      .then(result => {
        return res.status(200).send({message: 'posts', posts: result.rows  , date: new Date});
      })
      .catch(err => err);
   
  });

  


  return router;
};

