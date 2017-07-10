import React from 'react';
const Chart = require('react-d3-core').Chart;
const LineChart = require('react-d3-basic').LineChart;
import {connect} from 'react-redux';


export class GraphContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.graphData)
  }
  

  render(){
    const newGraph = [{index: 1, y: 5, columnName: 'hello'}, {index: 2, y: 14, columnName: 'hello'}];
       var data = [
          {
             voltage: 19,
              index: 0
          },
          {
             voltage: 38,
              index: 1
          },
          {
             voltage: 934,
              index: 2
          },
          {
             voltage: 12,
              index: 3
          }
      ];
 
      var chartSeries = [
          {
            field: 'y',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "strokeWidth": 2,
              "fillOpacity": .2
            }
          }
        ],
        x = function(d) {
          return d.index;
        }
    return(
      <section className="graphContainer">
      <LineChart width= {600} height= {300} data= {this.props.graphData} chartSeries= {chartSeries} x= {x} />
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  graphData: state.graphData
})

export default connect(mapStateToProps)(GraphContainer);