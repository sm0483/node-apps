const express=require('express');
const app=express();
const productRoute=require('./router/router');
const connectDb=require('./db/connect'); //-->mongo connection
const notFound = require('./middleware/not-found');
const errorHandler=require('./error/unknown-error');
//app.use(express.json());

require('dotenv').config(); //-->use for env file


app.listen(5000,()=>{
    console.log('connected...');
})

app.use('/api/v2/products',productRoute);

const start=async()=>{
    try{
        connection =await connectDb(process.env.URL);
    }
    catch(err){
        console.log(err);
    }
}

app.use(errorHandler);
app.use(notFound);

start();

