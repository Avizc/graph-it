import React from 'react';
import {connect} from 'react-redux';
import {InputFeedback} from '../../../InputFeedback/InputFeedback.js';
import {handleNewData} from '../../../../redux/actions';
import './AddDataInput.css';

export class AddDataInput extends React.Component{
  constructor(props){
    super(props)
    
  }

  handleSubmit(e){
    e.preventDefault()
    const data = this.dataValue.value;
    const columnName = this.columnName.value;
    this.props.dispatch(handleNewData(data, columnName))
  }

  handleDataChange(e){
    if(Number(e.target.value) === NaN){
      this.dataFeedback = <InputFeedback feedback={'This input must be a number.'}/>
    }else{

    }
    console.log(e.target.value)
    console.log(Number(e.target.value))
  }

  render(){
    return(
      <div className="input-container">
        <form className="inputForm">
          <label>Column data:</label><input ref={(dataValue) => this.dataValue = dataValue} onChange={(e) => this.handleDataChange(e)} type="text" placeholder="240k"></input>
          {this.dataFeedback}
          <label>Column name:</label><input ref={(name) => this.columnName = name} type="text" placeholder="Quarter 3 earnings"></input>
          <button onClick={(e) => this.handleSubmit(e)} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddDataInput)