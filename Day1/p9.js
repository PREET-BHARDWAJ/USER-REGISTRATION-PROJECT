const fs= require('fs');
fs.rmdir("mkdir",(err)=>{
        if(err){
            console.error("erroe creating directory:",err);
            return;
        }
        console.log("Directory deleted")
    })
