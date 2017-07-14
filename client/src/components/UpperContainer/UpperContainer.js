import React from 'react';
import {connect} from 'react-redux';
import ResetGraphButton from './ResetGraphButton/ResetGraphButton.js';
import NewGraphButton from './NewGraphButton/NewGraphButton.js';
import SaveButton from './SaveButton/SaveButton.js'; 
import './UpperContainer.css';

export function UpperContainer(props){
  if(props.newGraph){
    return null;
  }else{
  return(
    <section className="upper-container">
      <NewGraphButton />
      <ResetGraphButton />
      <SaveButton />
    </section>
  );
}
}

const mapStateToProps = (state, actions) => ({
  newGraph: state.newGraphToggle
})

export default connect(mapStateToProps)(UpperContainer);