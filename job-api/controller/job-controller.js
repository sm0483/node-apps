const asyncWrapper=require('../error/asyn');

const createJob=asyncWrapper(async()=>{  //-->create new job

})

const updateJob=asyncWrapper(async()=>{  //-->edit  job

})


const getAllJob=asyncWrapper(async(req,res)=>{  //-->get all job
    res.send('hello world');
    

})

const getJobById=asyncWrapper(async()=>{ //-->get job by id


})
const deleteJob=asyncWrapper(async()=>{  //-->delete job

})


module.exports={
    createJob,
    updateJob,
    getJobById,
    deleteJob,
    getAllJob
}
