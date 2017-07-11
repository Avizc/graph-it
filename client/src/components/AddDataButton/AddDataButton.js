import React from 'react';

export class AddPointButton extends React.Component{

  handelClick(e){
    e.preventDefault();

  }

  render(){
    return(
      <button onClick={(e)=> this.handelClick(e)} id="AddDataButton" class="AddDataButton">Add data</button>
    );
  }
}