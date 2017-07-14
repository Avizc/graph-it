import React from 'react';
import {connect} from 'react-redux';
import './CreateGraph.css';
import {handleNewGraph} from '../../../redux/actions';
import {ToolTip} from '../../ToolTip/ToolTip.js';
import BarGraphInput from './BarGraphInput/BarGraphInput.js';

export class CreateGraph extends React.Component{

  render(){

    //GRAPH TYPE CONDITIONALS
    let barGraphInput;
    console.log(this.props.graphType)
    if(this.props.graphType === 'BAR'){
      barGraphInput = <BarGraphInput />
    }

    return(
      <section>
        <h3>Let's make a graph.</h3>
        <section className="create-graph">
          {barGraphInput}
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  graphType: state.graphType
})

export default connect(mapStateToProps)(CreateGraph);