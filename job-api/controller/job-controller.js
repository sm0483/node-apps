const asyncWrapper=require('../error/asyn');
const CustomError = require('../error/main-custom');
const jobModel=require('../models/job-schema');


const createJob=asyncWrapper(async(req,res)=>{  //-->create new job
    const {company,position}=req.body;
    if(!company || !position) throw new CustomError("field can't be empty",400);
    req.body.createdBy=req.user.userId;
    const createdData=await jobModel.create(req.body);
    res.status(200).json(createdData);
})

const updateJob=asyncWrapper(async(req,res)=>{  //-->edit  job
    const {id}=req.params;
    if(!id)throw new CustomError("Id not present",400);
    const {company,position,status}=req.body;
    if(!company || ! position) throw new CustomError("field can't be empty",400);
    const updatedData=await jobModel.findOneAndUpdate({_id:id},{company:company,position:position,status:status},{runValidators:true,new:true});
   // console.log(updatedData);
    res.status(200).json(updatedData);
})


const getAllJob=asyncWrapper(async(req,res)=>{  //-->get all job
    const id=req.user.userId;
    const findData=await jobModel.find({createdBy:id});
    res.status(200).json(findData)
})

const getJobById=asyncWrapper(async(req,res)=>{ //-->get job by id
    const {id}=req.params;
    if(!id) throw new CustomError('id not present',400);
    const dataById=await jobModel.findOne({_id:id});
    if(!dataById) throw new CustomError('data dosen"t exsist',400)
    res.status(200).json(dataById);
})

const deleteJob=asyncWrapper(async(req,res)=>{  //-->delete job
    const {id}=req.params;
    const delData=await jobModel.findOneAndDelete({_id:id});
    if(!delData) throw new CustomError('Cannot remove data',400);
    res.status(200).json(delData);

})


module.exports={
    createJob,
    updateJob,
    getJobById,
    deleteJob,
    getAllJob
}
