import React from 'react';
import {connect} from 'react-redux';
import {toggleNewData} from '../../../../redux/actions';


export class AddPointButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    this.props.dispatch(toggleNewData())
  }

  render(){
    return(
      <button onClick={(e)=> this.handleClick(e)} id="AddDataButton" className="AddDataButton">Add data</button>
    );
  }
}

export default connect()(AddPointButton);

