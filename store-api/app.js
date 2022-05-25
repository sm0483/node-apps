const express=require('express');
const app=express();
const productRoute=require('./router/router');
const connectDb=require('./db/connect'); //-->mongo connection
app.use(express.json());

require('dotenv').config(); //-->use for env file


app.listen(3000,()=>{
    console.log('connected...');
})

app.use('/api/v1/products',productRoute);

const start=async()=>{
    try{
        connection =await connectDb(process.env.URL);
    }
    catch(err){
        console.log(err);
    }
}



start();

