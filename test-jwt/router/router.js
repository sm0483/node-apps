const express=require('express');
const router=express.Router();
const {
    getAllData,
    getData,
    createToken,
    verifyToken
}=require('../controller/controller');


router.route('/').get(getAllData);
router.route('/static').get(getData);
router.route('/login').post(createToken);
router.route('/auth').post(verifyToken);


module.exports=router;