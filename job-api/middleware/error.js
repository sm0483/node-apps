const CustomError=require('../error/main-custom');

const errorHandler=(err,req,res,next)=>{
    const {message,status}=err;
    console.log(err);
    console.log(`from errorHandler ${err}`); //--->for testing
    if(err instanceof CustomError){
        res.status(status).json({
            "message":message,
            "status":status
        })
    }
    else{
        res.status(500).json({
            "message":"The server encountered an unexpected condition that prevented it from fulfilling the request",
            "status":500
        })
    }
  
}

module.exports=errorHandler;