const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { DATABASE_URL, PORT } = require("./config.js");
const { Graphs } = require("./models.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.options('*', (req, res) => {
  res.sendStatus(200);
});

// API endpoints go here!
app.get("/api/graphs", (req, res) => {
  Graphs.find()
    .exec()
    .then(graphs => {
      console.log(graphs);
      res.send(graphs);
      // res.json(graphs.map(graph=>graph.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "oops something went wrong" });
    });
});
app.get("/api/graphs/:id", (req, res) => {
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
app.post("/api/graphs", (req, res) => {
  console.log('#####', req.body)
  const confirmedData = [];
  let currentObj;
  const checkedKeys = ["index", "data", "columnName", 'x', 'x'];
  const dataArr = req.body.graphData;

  for (let i = 0; i < dataArr.length; i++) {
    currentObj = {};
    checkedKeys.forEach(key => {
      if (dataArr[i][key]) {
        currentObj[key] = dataArr[i][key];
      }
    });
    confirmedData.push(currentObj);
  }

  console.log('### THIS IS DATA ###' ,confirmedData);
  console.log('##GRAPH TYPE##', req.body.graphType)

  Graphs.create({
    graphTitle: req.body.graphTitle,
    xLabel: req.body.xLabel,
    yLabel: req.body.yLabel,
    prefix: req.body.prefix,
    suffix: req.body.suffix,
    graphData: confirmedData,
    graphType: req.body.graphType
  })
    .then(graph => {
      res.status(201).json(graph);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "oops something weng wrong" });
    });
});
app.put("/api/graphs/:id", (req, res) => {
  const updateThisGraph = {};
  const updateGraph = [
    "graphTitle",
    "xLabel",
    "yLabel",
    "prefix",
    "suffix",
    "graphData",
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
app.delete("/api/graphs/:id", (req, res) => {
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
