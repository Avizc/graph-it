// 'use strict';
const express = require("express");
const mongoose = require("mongoose");
const graphSchema = mongoose.Schema({
  graphTitle: { type: String },
  xLabel: { type: String },
  yLabel: { type: String },
  prefix: { type: String },
  suffix: { type: String },
  graphData: {type: Array}
});
// const savedGraphSchema=mongoose.Schema({
//     savedGraphTitle:{type:String,required:true}
// });
graphSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    graphTitle: this.graphTitle,
    xLabel: this.xLabel,
    yLabel: this.yLabel,
    prefix: this.prefix,
    suffix: this.suffix,
    graphData: this.graphData
  };
};
const Graphs = mongoose.model("Graphs", graphSchema);
// const SavedGraphs=mongoose.model('SavedGraphs',savedGraphsSchema);
module.exports = { Graphs };
