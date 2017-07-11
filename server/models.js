'use strict';
const express=require('express');
const mongoose=require('mongoose');
const graphSchema=mongoose.Schema({
    graphTitle:{type:String},
    graphData:{
        indexValue:{type:Number},
        data:{type:Number},
        xValueLabel:{type:String},
        yValueLabel:{type:String}
    }
});
// const savedGraphSchema=mongoose.Schema({
//     savedGraphTitle:{type:String,required:true}
// });
graphSchema.methods.apiRepr=function(){
    return{
        id:this._id,
        graphTitle:this.graphTitle,
        indexValue:this.indexValue,
        data:this.data,
        xValueLabel:this.xValueLabel,
        yValueLabel:this.yValueLabel
    };
}
const Graphs=mongoose.model('Graphs',graphSchema);
// const SavedGraphs=mongoose.model('SavedGraphs',savedGraphsSchema);
module.exports={Graphs};