let express = require('express');
let router = express.Router();
const cookieSession = require('cookie-session');
// app.use(cookieSession({ name: 'session', keys: ['key1', 'key2'] }));

module.exports = (db) => {
  /* GET home page. */
  
  router.get('/', function(req, res) {
    console.log('login testing!!');
    // console.log('firsttttt', r);

    // req.session.abc = 'abc';
    if(req.session.user_id){

      res.send(200, { firstName:req.session.firstName, id:req.session.user_id });
    }else{
      res.send(401, {msg: 'not logged in'});
    }

  })  

  router.post('/', function(req, res) {
    console.log('login details', req.body);
    const query = {
      text: `SELECT * FROM users WHERE email = $1 AND password = $2`,

      values: [req.body.logEmail, req.body.logPass]
    }
    return db.query(query)
      .then(result => {
        console.log('testing login',result.rows[0])
        if(result.rows[0]){
          req.session.user_id =result.rows[0].id;
          req.session.firstName = result.rows[0].first_name;
          // console.log('session',req.session); 
          // result.rows[0].session = req.session.user_id;
          // console.log(result);
          res.send(result);
        }else{
          res.send({message: "Wrong username/password combination!"});
        }
      })
      .catch(
        err => {
          console.log('error in login',err);
          res.send({err: err})
        }
      );
  })

  return router;
}