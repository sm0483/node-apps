const CustomError=require('../error/custom-error');

const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomError){
        res.status(505).json({
            'message':'internal Error'
        })
    }
    else{
        res.status(400).json({
            'message':'bad request'
        })
    }

}


module.exports=errorHandler;