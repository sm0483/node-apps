const Task=require('../models/model');
//const db=require('../db/db');


const firtsTask=new Task({
    name:'work on mongo',
    completed:false,
}) 

const secondTask=new Task({
    name:'work on error ',
    completed:true,
})

//firtsTask.save();
//secondTask.save();