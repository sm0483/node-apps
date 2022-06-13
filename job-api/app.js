const express=require('express');
const app=express();


//routes
const userRoute=require('./routes/user-route');
const jobRoute=require('./routes/job-route');

//used to connect with db
const connectDb=require('./db/connect');
require('dotenv').config();

//middleware for auth
const authMiddleware=require('./middleware/auth');

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

app.use('/api/v1/auth',userRoute);
app.use('/api/v1/jobs',authMiddleware,jobRoute);

app.use(pageNotFound);
app.use(errorHandler);
