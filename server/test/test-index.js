const chai=require('chai');
const should=require('chai').should();
const chaiHttp=require('chai-http');
const faker=require('faker');
const mongoose=require('mongoose');
const {DATABASE_URL}=require('../config');
const {app,runServer,closeServer}=require('../index');
const {Graphs}=require('../models');
chai.use(chaiHttp);
// //graphTitle
// function generateGraphTitle(){
//     const title=[
//         'Rabbits','Cheesecake Quality','Tea Supplies','Cards'
//     ];
//     return title[Math.floor(Math.random()*title.length)];
// }
// //xLabel
// function generateXLabel(){
//     const xLabel=[
//         'Cheesecake','Rabbits','Tea Cups','Cards'
//     ];
//     return xLabel[Math.floor(Math.random()*xLabel.length)];
// }
// //yLabel
// function generateYLabel(){
//     const yLabel=[
//         'Amount of cheesecake','Total Cost of Tea','Cards purchased','Carrots for event'
//     ];
//     return yLabel[Math.floor(Math.random()*yLabel.length)];
// }
// //prefix
// function generatePrefix(){
//     const prefix=[
//         '$','#'
//     ];
//     return prefix[Math.floor(Math.random()*prefix.length)];
// }
// //suffix
// function generateSuffix(){
//     const suffix=[
//         'k','m',''
//     ];
//     return suffix[Math.floor(Math.random()*suffix.length)];
// }
// //index
// function generateIndex(){
//     const index=[
//         0,1,2,3,4
//     ];
//     return index[Math.floor(Math.random()*index.length)];
// }
// //data
// function generateData(){
//     const data=[
//         2,3,5,7,11
//     ];
//     return data[Math.floor(Math.random()*data.length)];
// }
// //columnName
// function generateColumnName(){
//     const columnName=[
//         'Alice','Rabbit','Food','Tea'
//     ];
//     return columnName[Math.floor(Math.random()*columnName.length)];
// }
// //All of the functions go here to make the graphs
// function generateGraphData(){
//     return {
//         graphTitle: generateGraphTitle(),
//         xLabel: generateXLabel(),
//         yLabel: generateYLabel(),
//         prefix: generatePrefix(),
//         suffix: generateSuffix(),
//         graphData:[{
//             index: generateIndex(),
//             data: generateData(),
//             columnName: generateColumnName()
//         }]
//     };
// }
// //Seed in data for the graph
// function seedGraphData(){
//     console.info('Seeding graph data');
//     let seedGraph={};
//     for(let i=1;i<=10;i++){
//         seedGraph.push(generateGraphData());
//     }
//     return Graph.insertMany(seedGraph);
// }
//Seed data for graph with faker
function seedGraphData(){
    console.info('Seeding graph data');
    const seedGraph=[];
    for(let i=1;i<=10;i++){
        seedGraph.push({
            graphTitle: faker.random.word(),
            xLabel: faker.random.word(),
            yLabel: faker.random.word(),
            prefix: faker.finance.currencySymbol(),
            suffix: faker.random.word(),
            graphData:[{
                index: faker.random.number(),
                data: faker.random.number(),
                columnName: faker.random.word()
            }]
        });
    }
    return Graphs.insertMany(seedGraph);
}
//Drop the database after each test
function tearDownDatabase(){
    console.warn('Dropping the database now');
    return mongoose.connection.dropDatabase();
}
describe('Graph',function(){
    before(function(){
        return runServer(DATABASE_URL);
    });
    beforeEach(function(){
        return seedGraphData();
    })
    afterEach(function(){
        return tearDownDatabase();
    })
    after(function(){
        return closeServer();
    });
    //GET ENDPOINT TEST
    describe('GET endpoint',function(){
        it('Should show the graph',function(){
            let res;
            return chai.request(app)
            .get('/api/graphs')
            .then(function(_res){
                res=_res;
                res.should.has.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
            });
        })
        it('Should return the graph by ID',function(){
            let resGraphs;
            return chai.request(app)
            .get('/api/graphs/:id')
            .then(function(res){
                res.should.has.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                resGraphs=res.body[0];
                return Graphs.findById(resGraphs.id);
            })
            // Finish this!
            .then(function(res){
                //Quick edit for later
            });
        });
    });
    // it('Should show the graph',function(){
    //     return chai.request(app)
    //     .get('/api')
    //     .then(function(res){
    //         res.should.have.status(200);
    //         res.should.be.json;
    //         res.body.should.be.a('array');
    //     });
    // });
    // //POST ENDPOINT TEST
    // it('Should add---aka save---a graph',function(){
    //     return chai.request(app)
    //     .post('/api')
    //     .then(function(res){
    //         res.should.have.status(201);
    //         res.should.be.json;
    //         res.body.should.be.a('object');
    //     });
    // });
    // //PUT ENDPOINT TEST
    // const updateGraph={
    //     graphTitle: 'Rabbits',
    //     checked: true
    // }
    // it('Should update a graph',function(){
    //     return chai.request(app)
    //     .get('api')
    //     .then(function(res){
    //         updateGraph.id=res.body[0].id;
    //         return chai.request(app)
    //         .put(`/api/${updateGraph.id}`)
    //         .send(updateGraph);
    //     })
    //     .then(function(res){
    //         res.should.have.status(200);
    //         res.should.be.json;
    //         res.should.be.a('object');
    //         res.body.should.deep.equal(updateGraph);
    //     })
    // });
    // //DELETE ENDPOINT TEST
    // it('Should delete a graph by ID',function(){
    //     return chai.request(app)
    //     .get('/api')
    //     .then(function(res){
    //         return chai.request(app)
    //         .delete(`/api/${res.body[0].id}`);
    //     })
    //     .then(function(res){
    //         res.should.have.status(204);
    //     });
    // });
    
});