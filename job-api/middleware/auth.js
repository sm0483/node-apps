const jwt=require('jsonwebtoken');
const CustomError=require('../error/main-custom');
const asyncWrapper=require('../error/asyn');

const authUser=asyncWrapper( async (req,res,next)=>{
    let token=req.headers.authorization;
    if(!token.startsWith('Bearer')) throw new CustomError('The request could not be understood by the server due to incorrect syntax',400);
    token=token.split(' ')[1];
    try{
        const responce=await jwt.verify(token,process.env.key);
        console.log(responce);

        //manipulate or create req.body for use
        req.user={
            "name":responce.name,
            "userId":responce.userId
        } 
    }
    catch(err){
        throw new CustomError("Unauthorized request.The client does not have access rights to the content",401);
    }    
    
    return next();
})


module.exports=authUser;