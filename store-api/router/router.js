const express=require('express');
const router=express.Router();
const {
    getProducts
}=require('../controller/controller');

router.route('/').get(getProducts);

module.exports=router;