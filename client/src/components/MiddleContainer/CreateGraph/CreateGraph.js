import React from 'react';
import {connect} from 'react-redux';
import './CreateGraph.css';
import {handleNewGraph, handleGraphTypeChange} from '../../../redux/actions';
import {ToolTip} from '../../ToolTip/ToolTip.js';
import BarGraphInput from './BarGraphInput/BarGraphInput.js';

export class CreateGraph extends React.Component{

  handleChange(e){
    e.preventDefault();
    const graphType = e.target.value;
    console.log(graphType)
    this.props.dispatch(handleGraphTypeChange(graphType))
  }

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
          <form className="radio-buttons">
            <label htmlFor="BAR">Bar Graph<input onClick={(e)=> this.handleChange(e)} id="BAR" type="radio" name="graphType" value="BAR"></input></label>
            <label htmlFor="LINE">Line Graph<input onClick={(e)=> this.handleChange(e)} id="LINE" type="radio" name="graphType" value="LINE"></input></label>
          </form>
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