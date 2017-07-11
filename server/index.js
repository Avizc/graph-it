const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { DATABASE_URL, PORT } = require("./config.js");
const { Graphs } = require("./models.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// API endpoints go here!
app.get("/api/graphSchema", (req, res) => {
  Graphs.find()
    .exec()
    .then(graphs => {
      res.send(graphs);
      // res.json(graphs.map(graph=>graph.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "oops something went wrong" });
    });
});
app.get("/api/:id", (req, res) => {
  Graphs.findById(req.params.id)
    .exec()
    .then(graph => {
      res.send(graph);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "oops something went wrong" });
    });
});
app.post("/api/graphSchema", (req, res) => {
  const createThisGraph = [];
  let currentGraph;
  const graphComponents = [
    "graphTitle",
    "indexValue",
    "data",
    "suffix",
    "prefix",
    "columnName",
    "xValueLabel",
    "yValueLabel"
  ];
  const setGraphInfo=[{graphTitle:"Rabbits"},{indexValue:3},{data:5},{suffix:"hi"},{prefix:"goodbye"},{columnName:"names"},{xValueLabel:"rabbits"},{yValueLabel:"carrots"}];
  for(let i=0;i<setGraphInfo.length;i++){
    currentGraph={};
    graphComponents.forEach(key=>{
      if(setGraphInfo[i][key]){
        return currentGraph[key]=setGraphInfo[i][key];
      }
    })
    createThisGraph.push(currentGraph);
  }
  Graphs.create({
    graphTitle: req.body.graphTitle,
    graphData: createThisGraph // CHECK FOR HERE! be array for frontend
    // indexValue:req.body.indexValue,
    // data:req.body.data,
    // columnName:req.body.columnName,
    // suffix:req.body.suffix,
    // prefix:req.body.prefix,
    // xValueLabel:req.body.xValueLabel,
    // yValueLabel:req.body.yValueLabel
  })
    .then(graph => res.status(201).json(graph))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "oops something weng wrong" });
    });
});
app.put("/api/:id", (req, res) => {
  const updateThisGraph = {};
  const updateGraph = [
    "graphTitle",
    "indexValue",
    "data",
    "suffix",
    "prefix",
    "columnName",
    "xValueLabel",
    "yValueLabel"
  ];
  updateGraph.forEach(graph => {
    if (req.body[graph]) {
      return (updateThisRabbit[graph] = req.body[graph]);
    }
  });
  Graphs.findByIdAndUpdate(req.param.id, { $set: updateThisGraph })
    .exec()
    .then(graph => {
      res.status(204).end();
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "oops something went wrong" });
    });
});
app.delete("/api/:id", (req, res) => {
  Graphs.findByIdAndRemove(req.params.id)
    .exec()
    .then(graph => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "oops something went wrong" });
    });
});
// Serve the built client
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, "../client/build", "index.html");
  res.sendFile(index);
});

let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
        .on("error", err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log("Closing server");
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}
if (require.main === module) {
  runServer().catch(err => console.error(err));
}
module.exports = { app, runServer, closeServer };
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
