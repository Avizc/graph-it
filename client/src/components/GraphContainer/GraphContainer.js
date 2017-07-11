import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory';
import {connect} from 'react-redux';
import './GraphContainer.css';


export class GraphContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.columnNames)
  }

  render(){
    return(
      <section className="graphContainer">
      <VictoryChart domainPadding={24}>
        <VictoryBar data={this.props.graphData} x={'index'} y={'data'}/>
        <VictoryAxis
          tickValues={this.props.columnCount}
          tickFormat={this.props.columnNames}
        />
      </VictoryChart>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  graphData: state.graphData,
  columnNames: state.graphData.filter(bar => bar.columnName).map(item => item.columnName),
  columnCount: state.graphData.filter(bar => bar.index).map(item => item.index)
})

export default connect(mapStateToProps)(GraphContainer);