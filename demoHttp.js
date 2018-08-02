const http = require('http');
const dataTime = require('./dateTime')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html', 'newHeaderInfo': 'newHeader' });
    //res.write("the date and time currently is:" + dataTime.myDateTime());
    res.write(req.url);
    res.end();
}).listen(8080);