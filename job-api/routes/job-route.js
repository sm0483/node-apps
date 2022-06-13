const express=require('express');
const router=express.Router();

const {
    createJob,
    updateJob,
    deleteJob,
    getJobById,
    getAllJob
}=require('../controller/job-controller');


router.route('/:id').get(getJobById).delete(deleteJob).patch(updateJob);
router.route('/').get(getAllJob).post(createJob);


module.exports=router;