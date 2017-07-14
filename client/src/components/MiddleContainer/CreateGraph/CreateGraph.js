import React from 'react';
import {connect} from 'react-redux';
import './CreateGraph.css';
import {handleNewGraph} from '../../../redux/actions';
import {ToolTip} from '../../ToolTip/ToolTip.js';

export class CreateGraph extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      titleToolTip: false,
      prefixToolTip: false,
      suffixToolTip: false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const newGraph = {
      title: this.graphTitle.value,
      suffix: this.graphSuffix.value,
      prefix: this.graphPrefix.value
    }
    this.props.dispatch(handleNewGraph(newGraph.title, newGraph.suffix, newGraph.prefix))
  }

  handleTitleChange(e){
    if(!this.state.titleToolTip){
      this.setState({
        titleToolTip: true,
        prefixToolTip: false,
        suffixToolTip: false
      })
    }
  }

    handlePrefixChange(e){
    if(!this.state.prefixToolTip){
      this.setState({
        titleToolTip: false,
        prefixToolTip: true,
        suffixToolTip: false
      })
    }
  }

    handleSuffixChange(e){
    if(!this.state.suffixToolTip){
      this.setState({
        titleToolTip: false,
        prefixToolTip: false,
        suffixToolTip: true
      })
    }
  }

  render(){
    if(this.state.titleToolTip){
      this.titleToolTip = <ToolTip toolTip={'The name of your graph. This will display at the top of the graph.'}/>;
    }else{
      this.titleToolTip = undefined;
    }
    if(this.state.prefixToolTip){
      this.prefixToolTip = <ToolTip toolTip={'This is the prefix of the Y column towards the left of the graph. For example, it would be the "$" in this example: $25k.'}/>
    }else{
      this.prefixToolTip = undefined;
    }
    if(this.state.suffixToolTip){
      this.suffixToolTip = <ToolTip toolTip={'This is the suffix of the Y column towards the left of the graph. For example, it would be the "k" in this example: $25k.'}/>
    }else{
      this.suffixToolTip = undefined;
    }
    return(
      <section>
        <h3>Let's make a graph.</h3>
        <section className="create-graph">
          <form>
            <label htmlFor="graphTitle">Graph Title</label><input id="graphTitle" ref={(value) => this.graphTitle = value} onChange={(e)=> this.handleTitleChange(e)} type="text" placeholder="Sales Reports"></input>
            {this.titleToolTip}
            <label>Graph Prefix</label><input ref={(value)=> this.graphPrefix = value} onChange={(e)=> this.handlePrefixChange(e)} type="text" placeholder="$"></input>
            {this.prefixToolTip}
            <label>Graph Suffix</label><input ref={(value)=> this.graphSuffix = value} onChange={(e)=> this.handleSuffixChange(e)} type="text" placeholder="k"></input>
            {this.suffixToolTip}
            <button onClick={(e)=> this.handleSubmit(e)}>Create</button>
          </form>
        </section>
      </section>
    );
  }
}

export default connect()(CreateGraph);