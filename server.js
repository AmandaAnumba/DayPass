var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

var mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient,
    ObjectID = mongodb.ObjectID, // Used in API endpoints
    db; // We'll initialize connection below


/* instantiate express.js app */
var app = express();

app.set('name', 'DayPass');


/* set the port of our application */
app.set('port', process.env.PORT);


/* set up app */
app.use(favicon(__dirname + '/www/images/favicon.ico'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'www')));


/* set up MongoDB */
// var MONGODB_URI = process.env.MONGODB_URI;

// // Initialize database connection and then start the server.
// mongoClient.connect(MONGODB_URI, function (err, database) {
//   if (err) {
//     process.exit(1);
//   }

//   db = database; // Our database object from mLab

//   console.log("Database connection ready");

//   // Initialize the app.
//   app.listen(app.get('port'), function () {
//     console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port", app.get('port'));
//   });
// });


/* error handlers */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/* development error handler */
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/* production error handler */
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(app.get('port'), function() {
    console.log('\n\n' + app.get('name') + ' is running on port', app.get('port'));
});

module.exports = app;