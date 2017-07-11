import React from 'react';
import {connect} from 'react-redux';

export class NewGraphButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    console.log('hello')
  }

  render(){
    return(
      <button onClick={(e)=> this.handleClick(e)} className="new-graph-button">New Graph</button>
    );
  }
}

export default connect()(NewGraphButton);