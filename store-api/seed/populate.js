const connectDb=require('../db/connect');
const productModel=require('../models/schema');
require('dotenv').config();
const data=require('./product.json');
const URL=undefined //paste your link
const start=async ()=>{
    try{
        await connectDb(URL);
        await productModel.deleteMany();
        await productModel.create(data);
        console.log('success--');
    }
    catch(err){
        console.log(err);
    }

}


start();