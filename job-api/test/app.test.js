const {app}=require('../app');
const request=require('supertest');
const { json } = require('express');
const { post } = require('../routes/user-route');

//create job 
const jobData1={
    company:"cryptic",
    position:"senior developer"
}

let withoutProperty=(data,toRemove)=>{
    const {company,position}=data;
    let rest={};
    if("company"!==toRemove){
        rest["company"]=company;
    }
    else{
        rest["position"]=position;
    }
    return rest;
}


const partialData=[JSON.stringify(withoutProperty(jobData1,"company")),JSON.stringify(withoutProperty(jobData1,"position"))];

describe("test post job routes",()=>{
    test("/Post success",async()=>{
        const responce=await request(app).post('/api/v1/jobs')
        .set('Content-type','application/json')
        .set('Authorization',`Bearer ${process.env.testToken}`)
        .send(jobData1);

        expect(responce.statusCode).toBe(200);
        expect(responce._body.company).toBe("cryptic");
        expect(responce._body.position).toBe("senior developer");
        
    })

    test("/Post fail without company field",async()=>{
        const responce=await request(app).post('/api/v1/jobs')
        .set('Content-type','application/json')
        .set('Authorization',`Bearer ${process.env.testToken}`)
        .send(partialData[0]);

        expect(responce.statusCode).toBe(400);
        

    })

    test("/Post fail without position field",async()=>{
        const responce=await request(app).post('/api/v1/jobs')
        .set('Content-type','application/json')
        .set('Authorization',`Bearer ${process.env.testToken}`)
        .send(partialData[1]);

        expect(responce.statusCode).toBe(400);
        

    })
})

describe("/get job from api",()=>{
    test("/GET job using id",async()=>{
        const responce=await request(app).get(`/api/v1/jobs/${process.env.id}`)
        .set('content-type','application-json')
        .set('Authorization',`Bearer ${process.env.testToken}`)
        expect(responce.statusCode).toBe(200);
        expect(responce.type).toBe('application/json');
    })    

    test("/GET all job using token",async()=>{
        const responce=await request(app).get(`/api/v1/jobs/`)
        .set('content-type','application-json')
        .set('Authorization',`Bearer ${process.env.testToken}`)
        expect(responce.statusCode).toBe(200);
        expect(responce.type).toBe('application/json');



    }) 
})

/*
describe("/Patch job from api",()=>{


})
*/










