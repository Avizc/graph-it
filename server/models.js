'use strict';
const express=require('express');
const mongoose=require('mongoose');
const graphSchema=mongoose.Schema({
    graphTitle:{type:String,required:true},
    indexValue:{type:Number},
    yValue:{type:Number},
    xValueLabel:{type:String},
    yValueLabel:{type:String}
});
const savedGraphSchema=mongoose.Schema({
    savedGraphTitle:{type:String,required:true}
});
const Graphs=mongoose.model('Graphs',graphSchema);
const SavedGraphs=mongoose.model('SavedGraphs',savedGraphsSchema);
module.exports={Graphs};