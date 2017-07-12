import React from 'react';
import ResetGraphButton from './ResetGraphButton/ResetGraphButton.js';
import NewGraphButton from './NewGraphButton/NewGraphButton.js';
import './UpperContainer.css';

export default function UpperContainer(props){
  return(
    <section className="upper-container">
      <NewGraphButton />
      <ResetGraphButton />
    </section>
  );
}