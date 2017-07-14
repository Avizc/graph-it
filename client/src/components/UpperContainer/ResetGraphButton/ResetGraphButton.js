import React from 'react';
import {resetGraph, resetLineGraph} from '../../../redux/actions';
import {connect} from 'react-redux';
import './ResetGraphButton.css';

export class ResetGraphButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    if(this.props.graphType === 'BAR'){
    this.props.dispatch(resetGraph())
    }else if(this.props.graphType === 'LINE'){
    this.props.dispatch(resetLineGraph());
    }
  }

  render(){
    return(
      <button onClick={(e)=> this.handleClick(e)} className="new-graph-button">Reset Graph</button>
    );
  }
}

const mapStateToProps = (state, props) => ({
  graphType: state.graphType
})

export default connect()(ResetGraphButton);