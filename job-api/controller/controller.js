const userModel=require('../models/user-shema');
const userValidation=require('../valid/userValid');
const CustomError=require('../error/custom');

const getJobsTest=(req,res)=>{
    res.send('hello world');
}
const createUser=async(req,res)=>{
    const userData=req.body;
    const creatResponce=userModel.create(userData);
    console.log(creatResponce);
    res.send('all done');


}

const getJobs=(req,res,next)=>{
    res.send('all task');

}





module.exports={
    getJobsTest,
    getJobs,
    createUser
}