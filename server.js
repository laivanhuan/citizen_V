const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

const PORT = process.env.PORT || 3000;

app.use(function(_, res){
    res.status(404).render('404');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.info(`> Ready on ${PORT}`);
});