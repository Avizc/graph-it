import React from 'react';
import Header from '../Header/Header.js'
import LowerContainer from '../LowerContainer/LowerContainer.js';
import GraphContainer from '../GraphContainer/GraphContainer.js';

export class App extends React.Component{
  render(){
    return(
    <div>
      <Header />
      <GraphContainer />
      <LowerContainer />
    </div>);
  }
}