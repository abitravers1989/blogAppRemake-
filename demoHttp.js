const http = require('http');
const dataTime = require('./dateTime')
const mongoose = require('mongoose');
const mongoose = require('mongoose');
const schema = require('./models/post.model');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html', 'newHeaderInfo': 'newHeader' });

    res.end();
}).listen(8080);








const http = require('http');
const dataTime = require('./dateTime')
const mongoose = require('mongoose');
const mongoose = require('mongoose');
const schema = require('./models/post.model');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html', 'newHeaderInfo': 'newHeader' });
    res.write(req.url);
    res.write("the date and time currently is:" + dataTime.myDateTime());
    res.end();
}).listen(8080);