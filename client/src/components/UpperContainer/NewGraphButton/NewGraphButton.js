import React from 'react';
import {connect} from 'react-redux';
import {newGraph} from '../../../redux/actions'

export class NewGraphButton extends React.Component{

  handleClick(e){
    e.preventDefault();
    this.props.dispatch(newGraph())
  }

  render(){
    if(this.props.newGraph){
      return null;
    }
    return(
      <button onClick={(e)=> this.handleClick(e)}>Start Over</button>
    );
  }
}

const mapStateToProps = (state, actions) => ({
  newGraph: state.newGraphToggle
})

export default connect(mapStateToProps)(NewGraphButton);