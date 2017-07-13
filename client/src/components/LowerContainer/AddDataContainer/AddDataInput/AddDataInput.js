import React from 'react';
import {connect} from 'react-redux';
import {InputFeedback} from '../../../InputFeedback/InputFeedback.js';
import {handleNewData} from '../../../../redux/actions';
import './AddDataInput.css';

export class AddDataInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataFeedback: false,
      columnNameFeedback: false
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const data = this.dataValue.value;
    const columnName = this.columnName.value;
    this.props.dispatch(handleNewData(data, columnName))
  }

  handleDataChange(e){
    console.log(Number(e.target.value))
    if(isNaN(Number(e.target.value))){
      this.setState({
        dataFeedback: true,
        columnNameFeedback: false
      })
    }else{
      this.setState({
        dataFeedback: false
      })
    }
  }

  handleNameChange(e){
    if(e.target.value.length > 15){
      this.setState({
        dataFeedback: false,
        columnNameFeedback: true
      })
    }
  }

  render(){
    if(this.state.dataFeedback){
      this.dataFeedback = <InputFeedback feedback={'This input must be a number.'}/>
    }else{
      this.dataFeedback = undefined
    }

    if(this.state.columnNameFeedback){
      this.nameFeedback = <InputFeedback feedback={'Just a little warning: column names should be kept short and sweet.'} />
    }
    return(
      <div className="input-container">
        <form className="inputForm">
          <label>Column data:</label><input ref={(dataValue) => this.dataValue = dataValue} onChange={(e) => this.handleDataChange(e)} type="text" placeholder="240k"></input>
          {this.dataFeedback}
          <label>Column name:</label><input ref={(name) => this.columnName = name} onChange={(e) => this.handleNameChange(e)} type="text" placeholder="Quarter 3 earnings"></input>
          {this.nameFeedback}
          <button onClick={(e) => this.handleSubmit(e)} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddDataInput)