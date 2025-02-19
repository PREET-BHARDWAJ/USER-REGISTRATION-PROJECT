const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('Hello World');
})
server.listen(9000,()=>{
    console.log('server running on port 9000');
})