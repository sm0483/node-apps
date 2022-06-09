const CustomError=require('../error/cutomerror');
const errorHandler= (err,req,res,next)=>{
    if(err instanceof CustomError){
        console.log('customeError');
        res.send('cu');
    }
    else{
        console.log('not custom');
        res.send('not cu');
    }
}

module.exports=errorHandler;