const customError=require('../error/cutomerror');

const notFound= (req,res,next)=>{
    throw new customError('The server can not find the requested resource',404); 
}

module.exports=notFound;