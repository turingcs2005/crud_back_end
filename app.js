const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/diary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then( () => console.log('connection successful') )
.catch( (err) => console.error(err) );

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const diaryRouter = require('./routes/diary');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', diaryRouter);

module.exports = app;
