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
<<<<<<< HEAD
      <button onClick={(e)=> this.handelClick(e)} id="AddDataButton" className="AddDataButton">Add Data</button>
=======
      <button onClick={(e)=> this.handleClick(e)} id="AddDataButton" className="AddDataButton">Add data</button>
>>>>>>> test
    );
  }
}

export default connect()(AddPointButton);

