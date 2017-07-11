import React from 'react';
import {connect} from 'react-redux';
import {toggleNewData} from '../../redux/actions';
import store from '../../redux/store.js'

export class AddPointButton extends React.Component{

  handelClick(e){
    e.preventDefault();
    this.props.dispatch(toggleNewData())
    console.log(store.getState())
  }

  render(){
    return(
      <button onClick={(e)=> this.handelClick(e)} id="AddDataButton" className="AddDataButton">Add data</button>
    );
  }
}

export default connect()(AddPointButton);

