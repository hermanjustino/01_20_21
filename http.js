const http = require('http');
var dt = require('./myModule');
var url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}
)
.listen(5000, () => console.log('server started'));