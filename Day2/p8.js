const http= require('http');
const fs= require('fs/promises');
const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    if(req.url==="/setdata" && req.method==='POST'){
        let body=' ';
        req.on('data', chunk =>{
            body += chunk;
        });
        req.on('end',async ()=>{
            const user =JSON.parse(body);
            await fs.appendFile("./data.json",user);
            console.log(JSON.stringify(user));
            res.end("Data Received");
        });
    }
    else if(req.url==="/getdata" && req.method==='GET'){
        const data =await fs.readFile("./data.json","utf-8")
        res.end(JSON.stringify(users));
    }
});
server.listen(9000,()=>{
    console.log("server running on port 9000");
});    