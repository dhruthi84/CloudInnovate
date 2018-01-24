// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var https = require('https');
var settings = require('./settings.js');

// Get our API routes
const api = require('./server/routes/api');
const documentation = require('./server/routes/documentationapi');
const release_notes = require('./server/routes/release_notesapi');
const hometwo = require('./server/routes/hometwoapi');
const homeone = require('./server/routes/homeoneapi');
const downloadapi = require('./server/routes/downloadapi');
const tutorials = require('./server/routes/tutorialsapi');
const news = require('./server/routes/newsapi');
const jira_all_rfcs = require('./server/routes/jira_all_rfcs');
const jira_create_rfc = require('./server/routes/jira_create_rfc');

const prop_api = require('./prop_api');

// work around intermediate CA issue
const app = express();
var cors = require("cors");

  var corsOptions = {
  credentials: true,
  origin: function(origin,callback) {
  if(origin===undefined) {
  callback(null,false);
  } else {
  var allowed = true;//(match!==null && match.length > 0);
  callback(null,allowed);
  }
  }
  };

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
app.use(cors(corsOptions));


// START OF CHANGE
app.use(cookieParser());
app.use(session({resave: 'true', saveUninitialized: 'true' , secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
//app.use(express.static(path.join(__dirname, 'dist')));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var OpenIDConnectStrategy = require('passport-idaas-openidconnect').IDaaSOIDCStrategy;
console.log(process.env.callback_url);
var Strategy = new OpenIDConnectStrategy({
    authorizationURL : settings.authorization_url,
    tokenURL : settings.token_url,
    clientID : settings.client_id,
    scope: 'openid',
    response_type: 'code',
    clientSecret : settings.client_secret,
    callbackURL : settings.callback_url,
    skipUserProfile: true,
    issuer: settings.issuer_id,
    addCACert: true, CACertPathList: [ '/key.pem', '/cert.pem', '/oidc_w3id_staging.cer' ]
  },
  function(iss, sub, profile, accessToken, refreshToken, params, done)  {
    process.nextTick(function() {
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      done(null, profile);
    })
  });

passport.use(Strategy);

app.get('/login', passport.authenticate('openidconnect', {}));

function ensureAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    req.session.originalUrl = req.originalUrl;

    res.redirect('/login');
  } else {
    console.log(req.session.originalUrl);
    return next();
  }
}

// handle callback, if authentication succeeds redirect to
// original requested url, otherwise go to /failure

// app.get('/', ensureAuthenticated, function(req, res) {
//   app.use(express.static(path.join(__dirname, 'dist')));
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.get('/', function(req, res) {
  app.use(express.static(path.join(__dirname, 'dist')));
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/auth/sso/callback',function(req, res, next) {
  var redirect_url = req.session.originalUrl;
  console.log("redirect url:" + redirect_url );
  passport.authenticate('openidconnect', {
    successRedirect: redirect_url,
    failureRedirect: '/failure',
  })(req,res,next);
});

// failure page

app.get('/failure', function(req, res) {
  res.send('login failed'); });

app.get('/logout', function(req,res) {
  req.session.destroy();
  req.logout();
  res.redirect('/');
  /* fs.readFile("public/slo.html", function(err,data) {
   res.writeHead(200, {'Content-Type':'text/html'});
   res.write(data);
   res.end();
   });*/
});

// Set our api routes
console.log("===server.js /api====");
app.use('/api1', api);
app.use('/documentation', documentation);
app.use('/release_notes', release_notes);
app.use('/homeone', homeone);
app.use('/hometwo', hometwo);
app.use('/downloadfile', downloadapi);
app.use('/tutorials', tutorials);
app.use('/news', news);
app.use('/jira_all_rfcs', jira_all_rfcs);
app.use('/jira_create_rfc*', jira_create_rfc);

app.use('/propapi', prop_api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
	console.log("===*****====");
	//req.setHeader('Access-Control-Allow-Origin', 'https://gbsartifactory.in.edst.ibm.com');
  app.use(express.static(path.join(__dirname, 'dist')));
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// local code to run

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(process.env.VCAP_APP_PORT || 9000);

// code to run on server
// var host = (process.env.VCAP_APP_HOST || 'localhost');
// var port = (process.env.VCAP_APP_PORT || 9000);

// app.listen(port, host);
// console.log('App started on port ' + port);