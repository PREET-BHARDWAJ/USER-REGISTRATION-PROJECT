const fs = require('fs');
const write=()=>{
    const data="Good morning sir..";
    fs.writeFile("./mkdir/data.txt",data,(err)=>{
        if(err)
            console.error(err);
        else
        console.log("file updated");
    })
}
write();
