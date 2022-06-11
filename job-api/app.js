const express=require('express');
const app=express();
const jobRoute=require('./routes/route');
const connectDb=require('./db/connect');
require('dotenv').config();
const errorHandler=require('./middleware/error');
const pageNotFound=require('./middleware/not-found');
app.use(express.json());


app.listen(3000,()=>{
    console.log('sever started----------');
})

const start=async()=>{ //-->used to connect with db
    try{
        const connect=await connectDb(process.env.URL);
        console.log('connectd with db----');
    }
    catch(err){
        console.trace(err);

    }
}

start();

app.use('/api/v1/jobs',jobRoute);
app.use(pageNotFound);
app.use(errorHandler);
