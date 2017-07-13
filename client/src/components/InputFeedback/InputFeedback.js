import React from 'react';
import './InputFeedback.css';

export class InputFeedback extends React.Component{

  render(){
    return(
      <div className="input-feedback">
        <p>{this.props.feedback}</p>
      </div>
    );
  }
}