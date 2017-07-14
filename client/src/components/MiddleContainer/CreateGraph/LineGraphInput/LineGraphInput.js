import React from 'react';
import {ToolTip} from '../../../ToolTip/ToolTip.js';
import {handleNewGraph} from '../../../../redux/actions';
import {connect} from 'react-redux';


export class LineGraphInput extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      titleToolTip: false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const newGraph = {
      title: this.graphTitle.value,
      suffix: undefined,
      prefix: undefined
    }
    this.props.dispatch(handleNewGraph(newGraph.title, newGraph.suffix, newGraph.prefix))
  }

  handleTitleChange(e){
    if(!this.state.titleToolTip){
      this.setState({
        titleToolTip: true
      })
    }
  }

  render(){
    let titleToolTip;
    let prefixToolTip;
    let suffixToolTip;
    if(this.state.titleToolTip){
      titleToolTip = <ToolTip toolTip={'The name of your graph. This will display at the top of the graph.'}/>;
    }else{
      titleToolTip = undefined;
    }
    if(this.state.prefixToolTip){
      prefixToolTip = <ToolTip toolTip={'This is the prefix of the Y column towards the left of the graph. For example, it would be the "$" in this example: $25k.'}/>
    }else{
      prefixToolTip = undefined;
    }
    if(this.state.suffixToolTip){
      suffixToolTip = <ToolTip toolTip={'This is the suffix of the Y column towards the left of the graph. For example, it would be the "k" in this example: $25k.'}/>
    }else{
      suffixToolTip = undefined;
    }
    return(          
      <form>
        <label htmlFor="graphTitle">Graph Title</label><input id="graphTitle" ref={(value) => this.graphTitle = value} onChange={(e)=> this.handleTitleChange(e)} type="text" placeholder="Sales Reports"></input>
          {titleToolTip}
        <button className="create-graph-button" onClick={(e)=> this.handleSubmit(e)}>Create</button>
      </form>);
  }
}

export default connect()(LineGraphInput)