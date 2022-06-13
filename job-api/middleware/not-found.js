const CustomError=require('../error/main-custom');
const pageNotFound=(req,res,next)=>{
    throw new CustomError("The server can not find the requested resource",404);
}

module.exports=pageNotFound;