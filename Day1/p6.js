const fs= require('fs');
const data="this is append data";
const append=()=>{
    fs.appendFile('./data.txt',data,(err)=>{
        if(err)
            console.error(err)
        else
        console.log("File appended")
    })
}
append();