
class customError extends Error{
    constructor(message,code){
        super(message,code);
        this.message=message;
        this.code=code;
    }
}

module.exports=customError;