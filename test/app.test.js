const supertest = require('supertest');
const chai = require('chai');
const mocha = require('mocha');
const app = require('../server/app');

const expect = chai.expect;
const request = supertest(app.listen())

describe('测试Get请求',(done)=>{
    it('测试/',(done)=>{
        request.get('/')
        .expect(200)
        .end((err,res)=>{
            done();
        });
    })    
});

describe('测试Post请求',(done)=>{
    it('测试/',(done)=>{
        request.post('/')
        .expect(200)
        .end((err,res)=>{
            done();
        });
    })  
});