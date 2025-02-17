const fs= require('fs');
const del=()=>{
    fs.unlink('./mkdir/data.txt',(err)=>{
        if(err)
            console.error(err)
        else
        console.log("File deleted")
    })
}
del();