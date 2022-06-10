const express=require('express');
const app=express();
const jobRoute=require('./routes/route');

app.use(express.json());


app.listen(3000,()=>{
    console.log('sever started----------');
})

app.use('/api/v1/jobs',jobRoute);