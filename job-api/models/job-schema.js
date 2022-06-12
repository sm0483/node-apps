const mongoose=require('mongoose');

const jobSchema=new mongoose.Schema({
    company:{
        type:String,
        required:[true,'company name can"t be empty'],
        maxlength:50

    },
    position:{
        type:String,
        required:[true,'position cant"t be empty'],
        default:pending

    },
    status:{
        type:String,
        enun:['interview','declined','pending'],
        default:pending

    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:[true,'can"t have user empty']

    }
})


const Job=mongoose.model('Job',jobSchema);

module.exports=job;