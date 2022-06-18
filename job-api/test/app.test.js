const {app}=require('../app');
const request=require('supertest');
const { json } = require('express');
const { post } = require('../routes/user-route');

//create job 
const jobData1={
    company:"cryptic",
    position:"senior developer"
}

const jobData2={
    company:"brookin 99",
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


const jobData=[JSON.stringify(jobData1),JSON.stringify(jobData2)];
const partialData=[JSON.stringify(withoutProperty(jobData1,"company")),JSON.stringify(withoutProperty(jobData1,"position"))];

describe("test api job routes",()=>{
    test("/Post sucess",async()=>{
        for(let i;i<jobData.length;i++){
            const responce=await request(app).post('/api/v1/jobs')
            .set('Content-type','application/json')
            .set('Authorization',`Bearer ${process.env.testToken}`)
            .send(jobData[i]);

            expect(responce.statusCode).toBe(200);
            expect(responce._body.company).toBe("cryptic");
            expect(responce._body.position).toBe("senior developer");
        }
    })

    test("/Post fail",async()=>{
        for(let i;i<partialData.length;i++){
            const responce=await request(app).post('/api/v1/jobs')
            .set('Content-type','application/json')
            .set('Authorization',`Bearer ${process.env.testToken}`)
            .send(partialData[i]);

            expect(responce.statusCode).toBe(400);
        }

    })






})












