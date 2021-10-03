let express = require("express");
let router = express.Router();

// module.exports = router;
module.exports = (db) => {
  /* GET home page. */
  router.get("/", function (req, res) {
    const query = {
      text: `SELECT * FROM posts`,
    };

    return db
      .query(query)
      .then((result) => {
        // result.rows
        return res
          .status(200)
          .send({ message: "posts", posts: result.rows, date: new Date() });
      })
      .catch((err) => err);
  });

  router.post("/", function (req, res) {
    console.log("sdlksdf>>>>>>>>>>>>", req.body);
    // const textArea = req.body.selectText;
    const descriptionText = req.body.selectText;
    const userId = req.body.userId;
    const cardId = req.body.cardId;
    console.log('-------', descriptionText);
    
    const queryTwo = `INSERT INTO posts (image, text, card_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *`;
    db
      .query(queryTwo,[req.body.img, descriptionText, cardId, userId ])
      .then((result) => result.rows[0])
      .catch((err) =>
        console.log(err));
     

    res.status(200).send({ message: "Welcome to Unsplash", date: new Date() });
    // res.render('index', { title: 'Express' });
  });

  return router;
};
