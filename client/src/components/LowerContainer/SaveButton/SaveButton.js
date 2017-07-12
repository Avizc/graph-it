import React from 'react';
import {connect} from 'react-redux';
import {saveGraph} from '../../../redux/actions';
import store from '../../../redux/store'
import './SaveButton.css'

export class SaveButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    console.log('hello', store.getState());
    this.props.dispatch(saveGraph(store.getState()))
  }

  render(){
    return(
      <button onClick={(e)=> this.handleClick(e)} className="save-button">Save</button>
    );
  }
}

export default connect()(SaveButton);