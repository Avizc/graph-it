import React from 'react';
import './ToolTip.css'
export class ToolTip extends React.Component{

  render(){
    return(
      <div className="tool-tip">
        <p>Need some help?</p>
        <p>{this.props.toolTip}</p>
      </div>
    );
  }
}