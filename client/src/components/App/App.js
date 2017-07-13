import React from 'react';
import UpperContainer from '../UpperContainer/UpperContainer.js';
import LowerContainer from '../LowerContainer/LowerContainer.js';
import MiddleContainer from '../MiddleContainer/MiddleContainer.js';
import './App.css'

export class App extends React.Component{
  render(){
    return(
    <section>
      <header>
        <h1>Graph.it</h1>
        <h2>Making it easier than ever to graph.</h2>
      </header>
      <section>
        <UpperContainer />
        <MiddleContainer />
        <LowerContainer />
      </section>
    </section>
    );
  }
}