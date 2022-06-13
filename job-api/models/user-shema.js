const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken'); 


let userSchema=new mongoose.Schema({
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
        required:[true,'password filed can"t empty'],
        maxlength:6
    },
})


userSchema.pre('save',async function(){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

userSchema.methods.createJWT=function(){
    return jwt.sign({
        userId:this._id,
        name:this.name

    },process.env.key,{expiresIn:'30d'});
}


userSchema.methods.comparePasswd =async function(candidatePassword){
    const isMatch=await bcrypt.compare(candidatePassword,this.password);
    return isMatch;    
}

                   
const User=mongoose.model('User',userSchema);
module.exports=User