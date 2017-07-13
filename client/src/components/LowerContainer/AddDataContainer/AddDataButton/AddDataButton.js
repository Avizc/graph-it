import React from 'react';
import {connect} from 'react-redux';
import {toggleNewData} from '../../../../redux/actions';


export class AddPointButton extends React.Component{

  handelClick(e){
    e.preventDefault();
    this.props.dispatch(toggleNewData())
  }

  render(){
    return(
      <button onClick={(e)=> this.handelClick(e)} id="AddDataButton" className="AddDataButton">Add Data</button>
    );
  }
}

export default connect()(AddPointButton);

