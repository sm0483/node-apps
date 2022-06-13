const userModel=require('../models/user-shema');
const userValidation=require('../valid/userValid');
const CustomError=require('../error/main-custom');
const asyncWrapper=require('../error/asyn');

const testFunction=asyncWrapper(async(req,res)=>{
    res.send('hello world');
})

const createUser= asyncWrapper(async(req,res)=>{ //-->to create user
    const userData=req.body;
    const createResponce=await userModel.create(userData);
    const token=createResponce.createJWT();

    res.status(200).json({
        "message":"token Created Successfully",
        "token":token
    })

})


const login=asyncWrapper(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password) throw new CustomError('invalid credentials',400);
    const emailCheck=await userModel.findOne({email});
    if(!emailCheck) throw new CustomError('invalid credentials',400);
    const isPassword =await emailCheck.comparePasswd(password);
    if(!isPassword) throw new CustomError('invalid credentials',400);
    const token=emailCheck.createJWT();

    res.status(200).json({
        "message":"token refreshed",
        "token":token
    })

})

module.exports={
    createUser,
    login,
    testFunction
}


