const express=require('express');
const router=express.Router();
const {
    getProductsStatic,
    getProducts
}=require('../controller/controller');

router.route('/static').get(getProductsStatic);
router.route('/').get(getProducts);

module.exports=router;