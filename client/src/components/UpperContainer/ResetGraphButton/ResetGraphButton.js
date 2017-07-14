import React from 'react';
import {resetGraph} from '../../../redux/actions';
import {connect} from 'react-redux';
import './ResetGraphButton.css';

export class ResetGraphButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    this.props.dispatch(resetGraph())
  }

  render(){
    return(
      <button onClick={(e)=> this.handleClick(e)} className="new-graph-button">Reset Graph</button>
    );
  }
}

export default connect()(ResetGraphButton);