const http = require('http');

const server = http.createServer((req,res)=>
{
    if(req.url =='/')
    {
        res.end('Welcome to our home page');
    }
    if(req.url =='/about')
    {
        res.end('here is our short history');
    }
})


const port = 5000;
server.listen(port);