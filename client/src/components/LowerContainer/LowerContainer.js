import React from 'react';
import SaveButton from './SaveButton/SaveButton.js'; 
import AddDataContainer from './AddDataContainer/AddDataContainer.js';
import {connect} from 'react-redux';
import './LowerContainer.css';

export function LowerContainer(props){
  if(props.newGraph){
    return null
  }
  return(
    <section className="lower-container">
        <AddDataContainer />
        <SaveButton />
    </section>
  );
}

const mapStateToProps = (state, actions) => ({
  newGraph: state.newGraphToggle
})

export default connect(mapStateToProps)(LowerContainer);