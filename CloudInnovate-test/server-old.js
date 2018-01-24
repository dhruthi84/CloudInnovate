// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');
const documentation = require('./server/routes/documentationapi');
const release_notes = require('./server/routes/release_notesapi');
const hometwo = require('./server/routes/hometwoapi');
const homeone = require('./server/routes/homeoneapi');
 const downloadapi = require('./server/routes/downloadapi');

// const homePage = require('./server/routes/home');

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

app.use(cors(corsOptions));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// app.use('/homePage', homePage);

// Set our api routes
console.log("===server.js /api====");
app.use('/api1', api);
app.use('/documentation', documentation);
app.use('/release_notes', release_notes);
app.use('/homeone', homeone);
app.use('/hometwo', hometwo);
app.use('/downloadfile', downloadapi);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
	console.log("===*****====");
	//req.setHeader('Access-Control-Allow-Origin', 'https://gbsartifactory.in.edst.ibm.com');
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.get('demo', (req, res) => {
// 	console.log("===demoooo*****====");

//   res.sendFile(path.join(__dirname, 'demo/demo.html'));
// });


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
