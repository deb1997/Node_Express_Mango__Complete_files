const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let url = req.url;
    console.log(url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        fs.readFile(path.join(__dirname , 'views', 'index.html'),'utf8',(err , data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    else if(url === '/about'){
        fs.readFile(path.join(__dirname , 'views', 'about.html'),'utf8',(err , data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    else if(url === '/services'){
        fs.readFile(path.join(__dirname , 'views', 'services.html'),'utf8',(err , data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    else if(url === '/contact'){
        fs.readFile(path.join(__dirname , 'views', 'contact.html'),'utf8',(err , data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    else{
        fs.readFile(path.join(__dirname , 'views', '404.html'),'utf8',(err , data) => {
            if(err) throw err;
            res.end(data);
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});