require('dotenv').config()
const compression = require('compression');
const { default: helmet } = require('helmet')
const express = require('express');
const morgan = require('morgan');
const app = express();

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
// init db
require('./data/init.mongodb')
// const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

// init routes
app.use('/', require('./routes'))
// handling error

module.exports = app;