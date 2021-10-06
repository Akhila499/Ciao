var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID)

module.exports = (db) => {
  /* GET home page. */

  router.get('/', function(req, res) {
    console.log('-------------testing---');
    res.status(200).send({message: 'Welcome to skdfjlkslfkjladfjlskjdflsdkfj', date: new Date})
    // res.render('index', { title: 'Express' });
  });


  router.post('/', function(req, res) {
    console.log('------@@@@@@@@@ email post---', req.body);
    //Get Variables from query string in the search bar 
    const { recipient, sender, subject, text } = req.body;
    //Sendgrid Data Requirements
    const msg = {
      to: recipient, 
      from: sender,
      subject: subject,
      text: text,
    }
    //Send Email
    sgMail.send(msg)
    .then((msg) =>{
      console.log(text);
      res.status(200).send({message: 'Welcome to email', date: new Date})

    })


    // res.render('index', { title: 'Express' });
  });

  return router;
}

