import React from 'react';
import NewGraphButton from './NewGraphButton/NewGraphButton.js';
import './UpperContainer.css';

export default function UpperContainer(props){
  return(
    <section className="upper-container">
      <NewGraphButton />
    </section>
  );
}