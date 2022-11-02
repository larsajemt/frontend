const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 9999;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

    console.log(req.url);
    
    let filePath = path.join(__dirname, req.url);
    
    fs.readFile(filePath, (err, data) => {
        if(err && err.code === 'ENOENT') {
            fs.readFile(path.join(__dirname, 'error404.html'), (err, data) => {
                if(err) {
                    console.log('Fel vid läsning av error 404 fil ' + err);
                    res.end();
                } else { 
                    res.end(data);
                }
            })
        } else {
            res.end(data);
        }
    });

});

server.listen(port, hostname, () => {
  console.log(`Server körs från http://${hostname}:${port}/`);
  console.log('Server startad från mapp :' + __dirname);
});