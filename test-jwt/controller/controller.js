const productModel=require('../models/schema');
const jwt=require('jsonwebtoken');
const privateKey=process.env.key;
const wrapAsync=require('../error/async');
const CustomError=require('../error/cutomerror');

const getData=wrapAsync(async(req,res)=>{
    res.status(200).json({
        "message":"route not seted up"
    });
    
})

const getAllData=wrapAsync(async(req,res)=>{
    const allData=await productModel.find({});
    if(!allData){
        throw new CustomError('no data present',500);
    }
    res.status(200).json(allData); 
})

const createToken =wrapAsync(async(req,res)=>{
        const {username,password}=req.body;
        if(!username || !password){
            throw new CustomError('please fill password and username',400);
        }
        const id=new Date();
        const token=jwt.sign({"username":username,"_id":id},privateKey,{expiresIn:'30d'});
        if(!token) throw new CustomError('server side error',500);
        res.status(200).json({
            "token":token
        })
})



module.exports={
    getData,
    getAllData,
    createToken,
}