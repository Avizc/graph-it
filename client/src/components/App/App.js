import React from 'react';
import UpperContainer from '../UpperContainer/UpperContainer.js';
import LowerContainer from '../LowerContainer/LowerContainer.js';
import MiddleContainer from '../MiddleContainer/MiddleContainer.js';

export class App extends React.Component{
  render(){
    return(
    <div>
      <h1>Graph.it</h1>
      <UpperContainer />
      <MiddleContainer />
      <LowerContainer />
    </div>);
  }
}