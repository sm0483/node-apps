const express=require('express');
const { route } = require('express/lib/application');
const router=express.Router();
const {
    getJobs,
    getJobsTest
}=require('../controller/controller');
router.route('/static').get(getJobsTest);
router.route('/').get(getJobs);


module.exports=router;