const config = require('./config');
const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


var app = express();

app.config = config;

app.server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));


// setup mongoose
app.db = mongoose.createConnection(config.mongodb.uri);
app.db.on('error', console.error.bind(console, 'mongoose connection error: '));
app.db.once('open', function () {
    // and... we have a data store
    console.log("We connect to mongodb");
});


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// setup routes
require('./routes')(app);


// adding model
require('./models/calculation')(app, mongoose);


//listen up
app.server.listen(app.config.port, () => console.log('Server is running on port ' + config.port));
