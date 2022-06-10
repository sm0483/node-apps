const CustomError=require('../error/cutomerror');

const errorHandler= (err,req,res,next)=>{
    console.log(err.message,err.status);
    if(err instanceof CustomError){
        const {message,status}=err;
        res.status(status).json({
            "message":message,
            "status":status
        })
    }
    else{
        res.status().json({
            "message":"The server is not ready to handle the request",
            "status":503
        })
    }
}

module.exports=errorHandler;