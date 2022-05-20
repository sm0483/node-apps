const mongoose=require('mongoose');
const url="mongodb+srv://test-user:test@task-manager.7ofaz.mongodb.net/?retryWrites=true&w=majority"

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

