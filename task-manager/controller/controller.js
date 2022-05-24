const { name } = require('ejs');
const task=require('../models/model');
const wrapAsync=require('../middleware/asyncwrapper');
const customError=require('../error/cutom-er');
const res = require('express/lib/response');
const { response } = require('express');
const { append } = require('express/lib/response');

    /*
    //pattern for creating 
    const test=wrapAsync(async()=>{
        const data=await hello();
        if(!data){
            throw new AppError('some error',400);
        }
        res.json(data);

    })
    */
const getTask=wrapAsync(async(req,res,next)=>{ // --->get all task get route 
    const data=await task.find({});
    if(!data){
        throw new customError('cannot get data',400);
    }
    res.json(data);

})


const getTaskById=wrapAsync(async(req,res,next)=>{ //--->get task by id get route
    const {id}=req.params;
    const data=await task.find({_id:id});
    if(!data){
        throw new customError('connot get data from db',400);
    }
    res.json(data);

})

const editTask=wrapAsync(async(req,res,next)=>{ //---> edit task patch route
    const {id}=req.params;
    const {name,completed}=req.body;
    const dataForEdit=await task.findOneAndUpdate({_id:id},{name:name,completed:completed},{runValidators:true,new:true});
    if(!dataForEdit){
        throw new customError('canot edit data',401);
    }
    res.json(dataForEdit);
    
})

const deleteTask= wrapAsync(async(req,res,next)=>{ //--->delete by id taks delete route
    //console.log(req);
    const {id}=req.params;
    //console.log(id);
    const delData=await task.findOneAndDelete({_id:id});
    //console.log(delData);
    if(!delData){
        throw new customError('cannot remove data',400);
    }
    res.json(delData);

})

const createTask= wrapAsync(async(req,res,next)=>{ //---> create a task in db

    const newData=await task.create(req.body);  
    if(!newData){
        throw new customError('cannot create new data',400);
    }
    res.json(newData);
    
})


module.exports={
    getTask,
    getTaskById,
    editTask,
    deleteTask,
    createTask
}
