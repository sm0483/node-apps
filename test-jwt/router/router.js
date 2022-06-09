const express=require('express');
const router=express.Router();
const {
    getAllData,
    getData,
    createToken,
}=require('../controller/controller');
const verifyToken=require('../middleware/verify');


router.route('/').get(verifyToken,getAllData);
router.route('/static').get(getData);
router.route('/signup').post(createToken);



module.exports=router;