
const getJobsTest=(req,res,next)=>{
    res.send('all data');
}

const getJobs=(req,res,next)=>{
    res.send('all task');

}


module.exports={
    getJobsTest,
    getJobs
}