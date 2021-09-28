var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/postGif');

var app = express();
app.use(cors()); // CORS middleware useage

const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/gif', postsRouter(db));
module.exports = app;

