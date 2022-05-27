const product=require('../models/schema');
const wrapAsync=require('../error/async.js');

const getProductsStatic = wrapAsync( async (req,res,next)=>{
        const productAll=await product.find({});
        if(!productAll){
            console.log('error');
            res.send('issue');
        }
        res.status(200).send(productAll);
})


const updateBasedOnFeature=(featured,queryObject)=>{ //--> based on Feature
    queryObject.featured=featured ==='true' ? true:false;
}

const updateBasedOnCompany=(comapny,queryObject)=>{ //--> based on company Name
    queryObject.company=company;
}

const updateBasedOnName=(name,queryObject)=>{  //--> based on product name
    queryObject.name={$regex:name ,$options :'i'};
}

const updateBasedOnNumbericFilter=(numericFilters,queryObject)=>{ //--> update based on Number
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

const updateBasedSort=(sort,result,flag=false)=>{
    if(flag){        
        const sortList=sort.split(',').join(' '); //-->create a string in form of "price name" 
        result=result.sort(sortList); //sort list
    }
    else{
        result=result.sort('createdAt'); //-->default sort based on date of creation
    }

}

const updateBasedOnField=(field,result)=>{
    const fieldList=fields.split(',').join(' ');
    result=result.select(fieldList);
}

const getProducts =wrapAsync(async(req,res,next)=>{
        const {name,company,rating,featured,fields,numericFilters,sort}=req.query;
        const queryObject={};
        if(featured){  //----> to filter based on featured or not
            updateBasedOnFeature(featured,queryObject);
        }

        if(company){ //----> to filter based on comapny
            updateBasedOnCompany(company,queryObject);
        }

        if(name){ //--> to filter based on name
            updateBasedOnName(name,queryObject);         
        }
        if(numericFilters){ //use numbericFilter inform (price>30)  or (rating<=3) or {fields}{operator}{limit};
            updateBasedOnNumbericFilter(numericFilters,queryObject);
        }
        let result= product.find(queryObject);
        if(sort){ //-->sort based input
            updateBasedSort(sort,result,true); 
        }
        else{
            updateBasedSort(sort,result);
        }
        if(fields){
            updateBasedOnField(fields,result);
        }

        const responseData=await result;      
        res.status(200).json(responseData);
})


module.exports={
    getProductsStatic,
    getProducts
};