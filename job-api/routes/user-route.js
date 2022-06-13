const express=require('express');
const router=express.Router();
const {
    createUser,
    login,
    testFunction
}=require('../controller/user-controller');

router.route('/static').get(testFunction);
router.route('/register').post(createUser);
router.route('/login').post(login); 

module.exports=router;