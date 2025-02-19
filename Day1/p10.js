/*const fs=require('fs/promises');
const read=async()=>{
    const data= await fs.readFile("./data.txt","utf-8");
    console.log(data);
}
read();*/

const fs=require('fs/promises');
const data="hello doston"
const write=async()=>{
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("error",err)
        else
        console.log(("file updated"));
    }
);
};
write();