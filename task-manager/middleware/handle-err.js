const customError=require('../error/cutom-er');
const handleError=(err,req,res,next)=>{
    console.log(err);
    const message=err.message;
    const code=err.code;
    console.log(message,code)
    const errObj={};
    errObj[message]=code;
    //console.log(errObj);
    res.json(errObj);
}

module.exports=handleError;