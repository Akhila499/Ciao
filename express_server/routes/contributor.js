var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID)

module.exports = (db) => {
  /* GET home page. */

  router.get('/', function(req, res) {
    console.log('-------------testing---');
    res.status(200).send({message: 'Welcome to contributor', date: new Date})
    // res.render('index', { title: 'Express' });

  })
  // router.post('/', function(req, res) {

  //   console.log('contributor details', req.body);
  //   const conName = req.body.conName;
  //   const conEmail = req.body.conEmail;
  //   const email = req.body.email;
  //   const cardId = req.body.params.cardId;

  //   const query = {
  //     text: `INSERT INTO contributors (con_name, email, card_id ) VALUES ($1, $2, $3) RETURNING *`,

  //     values: [conName, conEmail, cardId]
  //   }

  //   return db.query(query)
  //     .then(result => console.log(result.rows[0]))
  //     .catch(err => console.log('cardid error',err));
  
  // })


  router.post('/', function(req, res) {
    console.log('------@@@@@@@@@ email post---', req.body);
    //Get Variables from query string in the search bar 
    const { conName, conEmail, email, conText, conSub } = req.body;
    //Sendgrid Data Requirements
    const msg = {
      to: conEmail, 
      from: email,
      subject: conSub,
      text: conText,
    }
    //Send Email
    sgMail.send(msg)
    .then((msg) =>{
      console.log(msg);
      res.status(200).send({message: 'Welcome to email', date: new Date})
      
    })


    // res.render('index', { title: 'Express' });
  });

  return router;
}


  
