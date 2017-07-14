import React from 'react';
import {connect} from 'react-redux';
import {InputFeedback} from '../../../InputFeedback/InputFeedback.js';
import {handleNewLineData} from '../../../../redux/actions';
import './AddLineDataInput.css';

export class AddLineDataInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      yFeedback: false,
      xFeedback: false,
      cannotSubmit: false
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const yValue = this.yValue.value;
    const xValue = this.xValue.value;
    if(this.state.yFeedback || this.state.xFeedback){
      this.setState({
        cannotSubmit: true
      })
    }else{
      this.props.dispatch(handleNewLineData(xValue, yValue))
      this.yValue.value = '';
      this.xValue.value = '';
    }
  }

  handleYChange(e){
    console.log(Number(e.target.value))
    if(isNaN(Number(e.target.value))){
      this.setState({
        yFeedback: true,
      })
    }else{
      this.setState({
        yFeedback: false
      })
    }
  }

  handleXChange(e){
    console.log(Number(e.target.value))
    if(isNaN(Number(e.target.value))){
      this.setState({
        xFeedback: true,
      })
    }else{
      this.setState({
        xFeedback: false
      })
    }
  }


  render(){
    if(this.state.yFeedback){
      this.yFeedback = <InputFeedback feedback={'This input must be a number.'} />
    }else{
      this.yFeedback = '';
    }
    if(this.state.xFeedback){
      this.xFeedback = <InputFeedback feedback={'This input must be a number.'}/>
    }else{
      this.xFeedback = '';
    }
    if(this.state.cannotSubmit){
      this.cannotSubmit = <InputFeedback feedback={'Make sure both inputs are valid before submitting.'} />
    }else{
      this.cannotSubmit = '';
    }

    return(
      <div className="input-container">
        <form className="inputForm">
          <label>X Value:</label><input ref={(xValue) => this.xValue = xValue} onChange={(e) => this.handleYChange(e)} type="text" placeholder="4"></input>
          {this.yFeedback}
          <label>Y Value:</label><input ref={(yValue) => this.yValue = yValue} onChange={(e) => this.handleXChange(e)} type="text" placeholder="10"></input>
          {this.xFeedback}
          <button onClick={(e) => this.handleSubmit(e)} type="submit" className="submit-button">Submit</button>
          {this.cannotSubmit}
        </form>
      </div>
    );
  }
}

export default connect()(AddLineDataInput)