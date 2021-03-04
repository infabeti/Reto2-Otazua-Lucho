const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
   if(request.url=='/'){
       fs.readFile('./index.html', function (err, html) {
            if (err) {
                 res.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
       });
   } else if(request.url=='/index.js'){
       fs.readFile('./index.js', function (err, jsFile) {
            if (err) {
                 res.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/javascript"});
            response.write(jsFile);
            response.end();
       });
   }
}).listen(8080);