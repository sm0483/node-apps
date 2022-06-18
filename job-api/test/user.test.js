const { response } = require('express');
const request=require('supertest');
const {app}=require('../app');

//routes

//->post -->login
//->post -->register

const userData={
    name:"dual Wick",
    email:"dual@gmail.com",
    password:"12345"
}

const userDataEmail={
    email:"dual@gmail.com"
}

const userDataName={
    name:"mr kk"
}

const userDataPassword={
    password:"12345"
}




describe("/Post route (Register)",()=>{
    test("/Post route register all field present(success)",async()=>{
        const responce=await request(app).post('/api/v1/auth/register')
        .set('Content-type','application/json')
        .send(userData);
        expect(responce.statusCode).toBe(200);
        expect(responce.type).toBe('application/json');
    })

    test("/Post route register email present(fail)",async()=>{
        const responce=await request(app).post('/api/v1/auth/register')
        .set('Content-type','application/json')
        .send(userDataEmail);
        expect(responce.statusCode).toBe(400);
        expect(responce.type).toBe('application/json');
    })


    test("/Post route register password present(fail)",async()=>{
        const responce=await request(app).post('/api/v1/auth/register')
        .set('Content-type','application/json')
        .send(userDataPassword);
        expect(responce.statusCode).toBe(400);
        expect(responce.type).toBe('application/json');
    })


    test("/Post route register name present(fail)",async()=>{
        const responce=await request(app).post('/api/v1/auth/register')
        .set('Content-type','application/json')
        .send(userDataName);
        expect(responce.statusCode).toBe(400);
        expect(responce.type).toBe('application/json');
    })


})




