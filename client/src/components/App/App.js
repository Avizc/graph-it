import React from 'react';
import Header from '../Header/Header.js'
import AddDataContainer from '../AddDataContainer/AddDataContainer.js';
import GraphContainer from '../GraphContainer/GraphContainer.js';

export class App extends React.Component{
  render(){
    return(
    <div>
      <Header />
      <GraphContainer />
      <AddDataContainer />
    </div>);
  }
}