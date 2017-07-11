import React from 'react';
import {connect} from 'react-redux';
import CreateGraph from './CreateGraph/CreateGraph.js';
import GraphContainer from './GraphContainer/GraphContainer.js';

export class MiddleContainer extends React.Component{

  render(){
    if(this.props.newGraph){
      return(
        <section>
          <CreateGraph />
        </section>
      );
    }
    return(
      <section>
        <GraphContainer />
      </section>
    );
  }
}

const mapStateToProps = (state, actions)=> ({
  newGraph: state.newGraphToggle
})

export default connect(mapStateToProps)(MiddleContainer);