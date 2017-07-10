import React from 'react';
import {connect} from 'react-redux';
import {handleNewPoint} from '../../redux/actions';
import store from '../../redux/store.js'

export class AddPointInput extends React.Component{

  handleSubmit(e){
    e.preventDefault()
    const x = this.xValue.value;
    const y = this.yValue.value;
    const columnName = this.columnName.value;
    this.props.dispatch(handleNewPoint(x, y, columnName))
    console.log(store.getState())
  }

  render(){
    return(
      <div className="container">
        <form className="inputForm">
          <input ref={(xValue) => this.xValue = xValue} type="text" placeholder="x"></input>
          <input ref={(yValue) => this.yValue = yValue} type="text" placeholder="y"></input>
          <input ref={(name) => this.columnName = name} type="text" placeholder="name"></input>
          <button onClick={(e) => this.handleSubmit(e)} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddPointInput)