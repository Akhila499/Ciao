let express = require('express');
let router = express.Router();


module.exports = (db) => {
  /* GET home page. */

  router.get('/', function(req, res) {
    console.log('-------------testing---');
    res.status(200).send({message: 'Welcome to signup', date: new Date})
  })  

  router.post('/', function(req, res) {
    console.log('registration details', req.body);
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *`,

      values: [req.body.regFirstName, req.body.regLastName, req.body.regEmail, req.body.regPass]
    }
    return db.query(query)
      .then(result => console.log('testing registration',result.rows[0]))
      .catch(err => err);
  })

  return router;
}