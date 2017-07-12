const chai=require('chai');
const should=require('chai').should();
const chaiHttp=require('chai-http');
const mongoose=require('mongoose');
const {DATABASE_URL}=require('../config');
const {app,runServer,closeServer}=require('../index');
const {Graph}=require('../models');
chai.use(chaiHttp);
describe('Graph',function(){
    before(function(){
        return runServer();
    });
    after(function(){
        return closeServer();
    });
    //GET ENDPOINT TEST
    it('Should show the graph',function(){
        return chai.request(app)
        .get('/api')
        .then(function(res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
        });
    });
    //POST ENDPOINT TEST
    it('Should add---aka save---a graph',function(){
        return chai.request(app)
        .post('/api')
        .then(function(res){
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
        });
    });
    //PUT ENDPOINT TEST
    const updateGraph={
        graphTitle: 'Rabbits',
        checked: true
    }
    it('Should update a graph',function(){
        return chai.request(app)
        .get('api')
        .then(function(res){
            updateGraph.id=res.body[0].id;
            return chai.request(app)
            .put(`/api/${updateGraph.id}`)
            .send(updateGraph);
        })
        .then(function(res){
            res.should.have.status(200);
            res.should.be.json;
            res.should.be.a('object');
            res.body.should.deep.equal(updateGraph);
        })
    });
    //DELETE ENDPOINT TEST
    it('Should delete a graph by ID',function(){
        return chai.request(app)
        .get('/api')
        .then(function(res){
            return chai.request(app)
            .delete(`/api/${res.body[0].id}`);
        })
        .then(function(res){
            res.should.have.status(204);
        });
    });
});