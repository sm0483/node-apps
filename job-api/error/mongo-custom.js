const CustomError=require('../error/main-custom');

class MongoError extends CustomError{
    constructor(message,status=409){
        super(message,status);
        this.messge=message;
        this.status=status;

    }
} 

module.exports=MongoError;