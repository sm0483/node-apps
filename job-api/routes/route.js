const express=require('express');
const router=express.Router();
const {
    getJobs,
    getJobsTest,
    createUser
}=require('../controller/controller');

router.route('/static').get(getJobsTest);
router.route('/signup').post(createUser);

module.exports=router;