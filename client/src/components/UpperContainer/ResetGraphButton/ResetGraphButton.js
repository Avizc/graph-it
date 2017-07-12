import React from 'react';
import {connect} from 'react-redux';
import {resetGraph} from '../../../redux/actions'
import './ResetGraphButton.css';
export class ResetGraphButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    this.props.dispatch(resetGraph())
  }

  render(){
    if(this.props.newGraph){
      return null;
    }
    return(
      <button onClick={(e)=> this.handleClick(e)} className="new-graph-button">Reset Graph</button>
    );
  }
}

const mapStateToProps = (state, actions) => ({
  newGraph: state.newGraphToggle
})

export default connect(mapStateToProps)(ResetGraphButton);