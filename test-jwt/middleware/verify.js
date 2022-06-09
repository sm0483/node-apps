const CustomError=require('../error/async');
const jwt=require('jsonwebtoken');
const privateKey=process.env.key;

const verifyToken=(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization) throw new CustomError('Please fill token',400);

    try{
        const processedToken=jwt.verify(authorization,privateKey);
    }
    catch(err){
        throw new CustomError('token not valid',401);
    }
    return next();
}

module.exports=verifyToken;



