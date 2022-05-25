const product=require('../models/schema');

const getProducts = async (req,res,next)=>{
    try{
        res.send('hello world this is product');
    }
    catch(err){
        console.log(err);
    }
}


module.exports={
    getProducts
};