import React from 'react';
import AddDataContainer from './AddDataContainer/AddDataContainer.js';
import {connect} from 'react-redux';
import './LowerContainer.css';

export function LowerContainer(props){
  if(props.newGraph || props.linkView){
    return null
  }
  return(
    <section className="lower-container">
        <AddDataContainer />
    </section>
  );
}

const mapStateToProps = (state, actions) => ({
  newGraph: state.newGraphToggle,
  linkView: state.linkView
})

export default connect(mapStateToProps)(LowerContainer);