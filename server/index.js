const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {DATABASE_URL,PORT}=require('./config.js');
const {Graphs}=require('./models.js');
const bodyParser=require('body-parser');

app.use(bodyParser.json());


mongoose.Promise=global.Promise;

// API endpoints go here!
app.get('/graphSchema',(req,res)=>{
    Graphs
    .find()
    .exec()
    .then(graphs=>{
        res.send(graphs);
        // res.json(graphs.map(graph=>graph.apiRepr()));
    })
    .catch(err=>{
        console.error(err);
        res.status(500).json({error:'oops something went wrong'});
    });
});
app.get('/api/:id',(req,res)=>{
    Graphs
    .findById(req.params.id)
    .exec()
    .then(graph=>{
        res.send(graph);
    })
    .catch(err=>{
        console.error(err);
        res.status(500).json({error:'oops something went wrong'});
    });
});
app.post('/graphSchema',(req,res)=>{
    Graphs
    .create({
        graphTitle:req.body.graphTitle,
        yValue:req.body.yValue
    })
    .then(graph=>res.status(201).json(graph.apiRepr()))
    .catch(err=>{
        console.error(err);
        res.status(500).json({error:'oops something weng wrong'});
    });
});
app.put('/api/:id',(req,res){
    Graphs
    .findByIdAndUpdate(req.param.id)
    .exec()
    .then(graph=>{
        res.status(204).end();
    })
    .catch(err=>{
        console.error(err);
        res.status(500).json({message:'oops something went wrong'});
    });
});
// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;

function runServer(databaseUrl=DATABASE_URL,port=PORT){
    return new Promise((resolve,reject)=>{
        mongoose.connect(databaseUrl, err=>{
            if(err){
                return reject(err);
            }
            server=app.listen(port,()=>{
                console.log(`Your app is listening on port ${port}`);
                resolve();
            }).on('error',err=>{
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}
function closeServer(){
    return mongoose.disconnect().then(()=>{
        return new Promise((resolve,reject)=>{
            console.log('Closing server');
            server.close(err=>{
                if(err){
                    return reject(err);
                }
                resolve();
            });
        });
    });
}
if(require.main===module){
    runServer().catch(err=>console.error(err));
}
module.exports={app,runServer,closeServer};
// let server;
// function runServer(port=3001) {
//     return new Promise((resolve, reject) => {
//         server = app.listen(port, () => {
//             resolve();
//         }).on('error', reject);
//     });
// }

// function closeServer() {
//     return new Promise((resolve, reject) => {
//         server.close(err => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve();
//         });
//     });
// }

// if (require.main === module) {
//     runServer();
// }

// module.exports = {
//     app, runServer, closeServer
// };
