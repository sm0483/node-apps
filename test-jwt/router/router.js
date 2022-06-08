const express=require('express');
const router=express.Router();
const {
    getTask
}=require('../controller/controller');


router.route('/').get(getTask);


module.exports=router;