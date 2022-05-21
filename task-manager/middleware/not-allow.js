
const getMessage= (req,res,next)=>{
    const response={
        "responce":"method  allowed"
    }
    res.status(405).json(response);

}


module.exports=getMessage;