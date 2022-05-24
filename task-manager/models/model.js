const mongoose =require('mongoose');


const taskScheme=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must have a task-name'],
        trim:true,
        maxlength:[50,'cannot save more than 50 words'],
    },
    completed:{
        type:Boolean,
        default:false,
    }
});

module.exports=mongoose.model('Task',taskScheme);
