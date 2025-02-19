const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(`<h1 style='background-color:red;color:white;'>Hello World</h1>`);
})
server.listen(9000,()=>{
    console.log('server running on port 9000');
})
