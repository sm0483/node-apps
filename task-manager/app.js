const express=require('express');
const app=express();
const task=require('./routes/routes');
const notAllow=require('./middleware/not-allow');

const db=require('./db/db');

//run data base connection
db();
const seed=require('./seeds/seed');
const handleError = require('./middleware/handle-err');
const customError = require('./error/cutom-er');


app.listen(3000,()=>{
    console.log('listening--');
})

//middleware to intercept json 
app.use(express.json());
app.use('/api1/tasks',task);
app.use(handleError);

