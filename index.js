const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var config = require('./config.js');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'))

app.listen(config.port,console.log("You are now connected."));
