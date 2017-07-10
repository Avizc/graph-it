import React from 'react';
import AddPointInput from '../AddPointInput/AddPointInput.js';
import Header from '../Header/Header.js'

export class App extends React.Component{
  render(){
    return(
    <div>
      <Header />
      <AddPointInput/>
    </div>);
  }
}