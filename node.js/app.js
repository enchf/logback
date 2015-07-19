var express = require('express')
  , app = express()
  , MC = require('mongodb').MongoClient
  , routes = require('./routes');

MC.connect('mongodb://localhost:27017/logback', function(err, db) {
    "use strict";
    if(err) throw err;

    app.use(express.cookieParser()); // Cookies.
    app.use(express.bodyParser());   // Post requests.

    routes(app, db);
    app.listen(8082);
    
    console.log('Logback running on port 8082');
});
