const express=require('express');
const app=express();
const task=require('./routes/routes');



app.listen(3000,()=>{
    console.log('listening--');
})

app.use('/api1/tasks',task)
