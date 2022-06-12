const { use } = require('express/lib/router');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name field can"t be empty'],
        maxlength:50,
    },
    email:{
        type:String,
        required:[true,'email cant"t be empty'],
        match: [ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email'
        ],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password fied can"t empty'],
        maxlength:6
    }
})


userSchema.pre('save',async function(){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

const User=mongoose.model('User',userSchema);
module.exports=User;