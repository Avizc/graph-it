import React from 'react';
import {VictoryBar, VictoryChart} from 'victory';
import {connect} from 'react-redux';
import './GraphContainer.css';


export class GraphContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.graphData)
  }

  render(){
    return(
      <section className="graphContainer">
      <VictoryChart domainPadding={24}>
        <VictoryBar data={this.props.graphData} x={'index'} y={'y'}/>
      </VictoryChart>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  graphData: state.graphData
})

export default connect(mapStateToProps)(GraphContainer);