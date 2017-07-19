import React from 'react';
import {connect} from 'react-redux';
import {ToolTip} from '../../../ToolTip/ToolTip.js';
import {InputFeedback} from '../../../InputFeedback/InputFeedback.js';
import {handleNewLineData, setLineData} from '../../../../redux/actions';
import './AddLineDataInput.css';

export class AddLineDataInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pointFeedback: false,
      cannotSubmit: false
    }
  }

  handleClick(e){
    e.preventDefault()
    const yValue = this.yValue.value;
    if(yValue.length === 0 || Number(yValue) === NaN){
      this.setState({
        pointFeedback: true
      })
    }else if(this.state.pointFeedback){
      this.setState({
        cannotSubmit: true
      })
    }else if(!this.state.cannotSubmit){
      this.props.dispatch(handleNewLineData(yValue))
      this.yValue.value = '';
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.dispatch(setLineData());
  }

  handleYChange(e){
    console.log(Number(e.target.value))
    if(isNaN(Number(e.target.value))){
      this.setState({
        pointFeedback: true,
      })
    }else{
      this.setState({
        pointFeedback: false
      })
    }
  }


  render(){
    let pointFeedback;
    let cannotSubmit;
    if(this.state.pointFeedback){
      pointFeedback = <InputFeedback feedback={'This input must be a number. It will be displayed as a point on the line graph.'}/>
    }
    if(this.state.cannotSubmit){
      cannotSubmit = <InputFeedback feedback={'Make sure both inputs are valid before submitting.'} />
    }
    return(
      <div className="input-container">
        <form className="inputForm">
          <label>Add a point:</label><input ref={(yValue) => this.yValue = yValue} onChange={(e) => this.handleYChange(e)} type="text" placeholder="4"></input>
          {pointFeedback}
        <ToolTip toolTip={"Start inputting data. When you're finsihed, hit the submit button. We'll take care of the rest."} />
        <div className="button-container">
          <button onClick={(e) => this.handleClick(e)} type="submit" className="add-button">Add</button>
          <button onClick={(e) => this.handleSubmit(e)} type="submit" className="submit-button">Submit</button>
        </div>
          {cannotSubmit}
        </form>
      </div>
    );
  }
}

export default connect()(AddLineDataInput)