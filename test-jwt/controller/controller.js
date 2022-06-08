const productModel=require('../models/schema');
const jwt=require('jsonwebtoken');
//const privateKey="";






const getData=async(req,res)=>{
    res.status(200).json({
        "message":"route not seted up"
    });
    
}

const getAllData=async(req,res)=>{
    const allData=await productModel.find({});
    res.status(200).json(allData); 
}

const createToken =async(req,res)=>{
    try{
        const {username,password}=req.body;
        const id=new Date();
        if(!username|| !password) throw Error('incorrect credentials');
        const token=jwt.sign({username},privateKey,{expiresIn:'30d'});
        res.send(token);
    } 
    catch(err){
        console.trace(err);
    }

}

const verifyToken =(req,res)=>{
    const {authorization}=req.headers;
    const processedToken=jwt.verify(authorization,privateKey)
    console.log(processedToken.username);
    res.send('all done');
}

module.exports={
    getData,
    getAllData,
    createToken,
    verifyToken
}