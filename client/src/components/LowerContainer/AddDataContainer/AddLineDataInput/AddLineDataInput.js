import React from 'react';
import {connect} from 'react-redux';
import {InputFeedback} from '../../../InputFeedback/InputFeedback.js';
import {handleNewLineData} from '../../../../redux/actions';
import './AddLineDataInput.css';

export class AddLineDataInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pointFeedback: false,
      cannotSubmit: false
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const yValue = this.yValue.value;
    if(this.state.pointFeedback){
      this.setState({
        cannotSubmit: true
      })
    }else{
      this.props.dispatch(handleNewLineData(yValue))
      this.yValue.value = '';
    }
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
    if(this.state.yFeedback){
      pointFeedback = <InputFeedback feedback={'This input must be a number. It will be displayed as a point on the line graph.'}/>
    }
    if(this.state.cannotSubmit){
      cannotSubmit = <InputFeedback feedback={'Make sure both inputs are valid before submitting.'} />
    }
    return(
      <div className="input-container">
        <InputFeedback feedback={"Start inputting data. When you're finsihed, hit the submit button. We'll take care of the rest."} />
        <form className="inputForm">
          <label>Add a point:</label><input ref={(yValue) => this.yValue = yValue} onChange={(e) => this.handleYChange(e)} type="text" placeholder="4"></input>
          {pointFeedback}
          <button onClick={(e) => this.handleSubmit(e)} type="submit" className="submit-button">Submit</button>
          {cannotSubmit}
        </form>
      </div>
    );
  }
}

export default connect()(AddLineDataInput)