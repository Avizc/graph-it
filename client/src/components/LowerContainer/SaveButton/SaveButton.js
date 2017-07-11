import React from 'react';
import {connect} from 'react-redux';
import './SaveButton.css'

export class SaveButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    console.log('hello');
  }

  render(){
    return(
      <button onClick={(e)=> this.handleClick(e)} className="save-button">Save</button>
    );
  }
}

export default connect()(SaveButton);