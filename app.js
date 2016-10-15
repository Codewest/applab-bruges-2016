var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");
var passport = require("passport");
var expressSession = require('express-session')


var routes = require('./routes/index');
var authroutes = require('./routes/auth');

var app = express();

var session = expressSession({
    name: "connect.sid",
    secret: "applabcookiez",
	resave: true,
    saveUninitialized: true
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser({limit:'50mb'}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

var fotoRouter = express.Router();
fotoRouter.get("/",function(req,res,next){
    res.render("foto");
})
fotoRouter.get("/bekijken",function(req,res,next){
    res.render("fotoBekijken");
})
fotoRouter.post("/save",function(req,res,next){
var data = req.body.imgBase64.replace("data:image/png;base64,","");
fs.writeFile("foto/test.png",data,"base64",  function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("The file was saved!");
  }
    });
    res.send("ok");

})
app.use("/foto",fotoRouter);
app.use('/', routes);
app.use('/auth/', authroutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
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

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
