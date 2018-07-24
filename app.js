/**
 * Created by hafizur.rahman on 06/06/2018.
 */
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const Boom = require('express-boom');
const bodyParser = require('body-parser');
let api = require('./src/routes/api');
let responseFunctions = require('./src/lib/responseFunctions');

let app = express();

app.set('env', 'development');
app.use(Boom());
app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

let RateLimit = require('express-rate-limit');

app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

let limiter = new RateLimit({
  windowMs: 60*1000, // 15 minutes
  max: 300, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
});

//  apply to all requests
app.use(limiter);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(responseFunctions.notFound);

// error handler
app.use(responseFunctions.badImplementation);

module.exports = app;
