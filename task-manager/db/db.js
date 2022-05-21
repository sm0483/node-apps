const mongoose=require('mongoose');
require('dotenv').config();

const url=process.env.MONGO_URL;

let db=async ()=>{
    try{
        await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    })
      }
    catch(err){
       console.log(err)
   }
}

module.exports=db;

