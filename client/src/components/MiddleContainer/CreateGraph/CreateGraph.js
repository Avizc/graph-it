import React from 'react';
import {connect} from 'react-redux';
import './CreateGraph.css';
import {handleNewGraph} from '../../../redux/actions'

export class CreateGraph extends React.Component{

  handleSubmit(e){
    e.preventDefault();
    const newGraph = {
      title: this.graphTitle.value,
      suffix: this.graphSuffix.value,
      prefix: this.graphPrefix.value
    }
    this.props.dispatch(handleNewGraph(newGraph.title, newGraph.suffix, newGraph.prefix))
  }

  render(){
    return(
      <section>
        <h3>Let's make a graph.</h3>
        <section className="create-graph">
          <form>
            <label>Graph Title</label><input ref={(value) => this.graphTitle = value} type="text" placeholder="Sales Reports"></input>
            <label>Graph Prefix</label><input ref={(value)=> this.graphPrefix = value} type="text" placeholder="$"></input>
            <label>Graph Suffix</label><input ref={(value)=> this.graphSuffix = value} type="text" placeholder="k"></input>
            <button onClick={(e)=> this.handleSubmit(e)}>Create</button>
          </form>
        </section>
      </section>
    );
  }
}

export default connect()(CreateGraph);