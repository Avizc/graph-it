import React from 'react';
import {connect} from 'react-redux';
import CreateGraph from './CreateGraph/CreateGraph.js';
import GraphContainer from './GraphContainer/GraphContainer.js';
import './MiddleContainer.css'

export class MiddleContainer extends React.Component{

  render(){
    if(this.props.newGraph){
      return(
        <section className="middle-container">
          <CreateGraph />
        </section>
      );
    }
    return(
      <section className="middle-container">
        <GraphContainer />
      </section>
    );
  }
}

const mapStateToProps = (state, actions)=> ({
  newGraph: state.newGraphToggle
})

export default connect(mapStateToProps)(MiddleContainer);