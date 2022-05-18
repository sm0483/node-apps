
const getTask=(req,res,next)=>{
    res.json({"hello":"world    "});

}


const getTaskById=(req,res,next)=>{
    res.send('Task by id');

}

const editTask=(req,res,next)=>{
    res.send('edit task by id');
}

const deleteTask=(req,res,next)=>{
    res.send('delete task by id')
}

module.exports={
    getTask,
    getTaskById,
    editTask,
    deleteTask
}
