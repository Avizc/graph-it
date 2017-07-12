import React from 'react';
import {connect} from 'react-redux';
import {handleNewData} from '../../../../redux/actions';
import './AddDataInput.css';

export class AddDataInput extends React.Component{

  handleSubmit(e){
    e.preventDefault()
    const data = this.dataValue.value;
    const columnName = this.columnName.value;
    this.props.dispatch(handleNewData(data, columnName))
  }

  render(){
    return(
      <div className="input-container">
        <form className="inputForm">
          <label>Column data:</label><input ref={(dataValue) => this.dataValue = dataValue} type="text" placeholder="240k"></input>
          <label>Column name:</label><input ref={(name) => this.columnName = name} type="text" placeholder="Quarter 3 earnings"></input>
          <button onClick={(e) => this.handleSubmit(e)} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddDataInput)