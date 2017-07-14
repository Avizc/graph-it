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
      cannotSubmit: false
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const yValue = this.yValue.value;
    if(this.state.xFeedback){
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
        yFeedback: true,
      })
    }else{
      this.setState({
        yFeedback: false
      })
    }
  }


  render(){
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
          <label>Add a point:</label><input ref={(yValue) => this.yValue = yValue} onChange={(e) => this.handleYChange(e)} type="text" placeholder="4"></input>
          {this.yFeedback}
          <button onClick={(e) => this.handleSubmit(e)} type="submit" className="submit-button">Submit</button>
          {this.cannotSubmit}
        </form>
      </div>
    );
  }
}

export default connect()(AddLineDataInput)