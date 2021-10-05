const express = require('express');
const router = express.Router();



// module.exports = router;
module.exports = (db) => {
  /* GET home page. */
  router.get('/', (req, res) => {
    console.log('-------------testing---');
    res.status(200).send({message: 'Welcome to delete', date: new Date})
  })

  router.post('/', function(req,res){
    console.log('delete req', req.body);
    const query = {
      text: `DELETE FROM posts
      WHERE posts.id = $1;`,
      values: [req.body.id]
    }
    return db.query(query)
      .then(result => {
        console.log('deleted sucessfully');
      })
      .catch(e=>console.log(e));
  });


return router;
}