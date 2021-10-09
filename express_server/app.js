require('dotenv').config();
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
var logger = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/postGif');
let emailRouter = require('./routes/sendEmail');
let newcardRouter = require('./routes/newCard');
let signUpRouter = require('./routes/signUp');
let loginRouter = require('./routes/login');
let logoutRouter = require('./routes/logout');
let contributorRouter = require('./routes/contributor');
let sentRouter = require('./routes/sent');
let cardRouter = require('./routes/card');
let filterPostRouter = require('./routes/filterPost');
let uploadsRouter = require('./routes/uploads');
let postsImgRouter = require('./routes/postImg');
let textRouter = require('./routes/text');
let allRoutes = require('./routes/allRoutes');
let BgRouter = require('./routes/background');
let deleteRouter = require('./routes/deletePost');
const background = require('./routes/background');


var app = express();
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  // optionSuccessStatus:200,
}
app.use(cors(corsOptions)); // CORS middleware useage
// app.use(cookieParser())
app.use(cookieSession({ name: 'session', keys: ['key1', 'key2'] }));


const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/bgimg', background(db) )




// app.use('/users', usersRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/gif', postsRouter(db));
app.use('/api/img', postsImgRouter(db));
app.use('/api/uploads', uploadsRouter(db));
app.use('/api/text', textRouter(db));
app.use('/api/fetchData', allRoutes(db));

app.use('/api/email', emailRouter(db));
app.use('/api/newcard', newcardRouter(db));
app.use('/api/signup', signUpRouter(db));
app.use('/api/login', loginRouter(db));
app.use('/api/logout', logoutRouter(db));
app.use('/api/contributor', contributorRouter(db));
app.use('/api/sent', sentRouter(db));
app.use('/api/card', cardRouter(db));
app.use('/api/filterpost', filterPostRouter(db));
app.use('api/bgimg', BgRouter(db));
app.use('/api/delete', deleteRouter(db));
module.exports = app;

