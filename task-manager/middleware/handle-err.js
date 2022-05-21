const customError=require('../error/cutom-er');

const handleError=(err,req,res,next)=>{
    //console.log(err);
    if(err instanceof customError){
        console.log(`instenouse: ${err}`);
        res.status(400).json(err);
    }
    else{
        //console.log(`not instenouse: ${err}`);
        let err={
            message:'not found'
        }
        res.status(400).json(err);
    }
}

module.exports=handleError;