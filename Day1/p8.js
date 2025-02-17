const fs= require('fs');
fs.mkdir("mkdir",(err)=>{
        if(err){
            console.error("erroe creating directory:",err);
            return;
        }
        console.log("Directory created")
    })
