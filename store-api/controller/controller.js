const { response } = require('express');
const product=require('../models/schema');

const getProductsStatic = async (req,res,next)=>{
    try{
        const productAll=await product.find({});
        res.status(200).send(productAll);
    }
    catch(err){
        console.log(err);
    }
}


const getProducts =async(req,res,next)=>{
    try{
        const {name,company,rating,featured,fields,numericFilters,sort}=req.query;
        const queryObject={};
        if(featured){  //----> to filter based on featured or not
            queryObject.featured=featured ==='true' ? true:false;
        }

        if(company){ //----> to filter based on comapny
            queryObject.company=company;
        }

        if(name){ //--> to filter based on name
            queryObject.name={$regex:name ,$options :'i'};
        }

        if(numericFilters){ //use numbericFilter inform (price>30)  or (rating<=3) or {fields}{operator}{limit};
            const operatorMap={
                ">":"$gt",
                "<":"$lt",
                "=":"$eq",
                ">=":"$gte",
                "<=":"$lte"
            }
            const constrains=['price','rating'];
            const regEx=/\b(<|>|>=|=|<|<=)\b/g; //regulart expression for '>' '<' '>=' '<=' '='
            const filter=numericFilters.replace(regEx,(operator)=>{ //user to find '>' ,'>=' ,'<=','='
                return `-${operatorMap[operator]}-`;
            })
            const itemArray=filter.split(','); // -->[price>30 ,rating<5]
            itemArray.forEach(item => {
                const [field,operator,value]=item.split('-');  // ---> [price, > ,30]
                if(constrains.includes(field)){
                    queryObject[field]={[operator]:Number(value)};
                }
            });
        }
        let result= product.find(queryObject);
        if(sort){ //-->sort based input
            const sortList=sort.split(',').join(' '); //-->create a string in form of "price name"
            result=result.sort(sortList); //sort list
        }
        else{
            result=result.sort('createdAt'); //-->default sort based on date of creation
        }

        if(fields){
            const fieldList=fields.split(',').join(' ');
            result=result.select(fieldList);
        }

        const responseData=await result;      
        res.status(200).json(responseData);
        }
        catch(err){
            console.log(err);
        }
}


module.exports={
    getProductsStatic,
    getProducts
};