import React from 'react';
import SaveButton from './SaveButton/SaveButton.js'; 
import AddDataContainer from './AddDataContainer/AddDataContainer.js';
import './LowerContainer.css';

export default function LowerContainer(props){
  return(
    <section className="lower-container">
      <AddDataContainer />
      <SaveButton />
    </section>
  );
}