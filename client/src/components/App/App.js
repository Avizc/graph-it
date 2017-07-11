import React from 'react';
import UpperContainer from '../UpperContainer/UpperContainer.js';
import LowerContainer from '../LowerContainer/LowerContainer.js';
import GraphContainer from '../GraphContainer/GraphContainer.js';

export class App extends React.Component{
  render(){
    return(
    <div>
      <h1>Graph.it</h1>
      <UpperContainer />
      <GraphContainer />
      <LowerContainer />
    </div>);
  }
}