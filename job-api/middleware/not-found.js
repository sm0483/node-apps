
const pageNotFound=()=>{
    res.status(404).json({
        "message":"The server can not find the requested resource",
        "status":404
    })
}

module.exports=pageNotFound;