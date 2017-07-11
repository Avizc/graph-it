import React from 'react';
import AddPointInput from '../AddPointInput/AddPointInput.js';
import Header from '../Header/Header.js'
import GraphContainer from '../GraphContainer/GraphContainer.js';

export class App extends React.Component{
  render(){
    return(
    <div>
      <Header />
      <GraphContainer />
      <AddPointInput/>
    </div>);
  }
}