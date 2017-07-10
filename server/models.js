'use strict';
const express=require('express');
const mongoose=require('mongoose');
const graphSchema=mongoose.Schema({
    graphTitle:{type:String,required:true}
});
const Graphs=mongoose.model('Graphs',graphSchema);
module.exports={Graphs};