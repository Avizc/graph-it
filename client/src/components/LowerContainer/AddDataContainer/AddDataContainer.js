import React from 'react';
import AddDataButton from './AddDataButton/AddDataButton.js';
import AddDataInput from './AddDataInput/AddDataInput.js';
import {connect} from 'react-redux';
import './AddDataContainer.css';


export class AddDataContainer extends React.Component{

  render(){
    if(this.props.isToggled){
      return(
        <div className="container">
          <AddDataButton />
          <AddDataInput />
        </div>
      );
    }
    return(
      <div className="container">
        <AddDataButton />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isToggled: state.newDataToggle
})

export default connect(mapStateToProps)(AddDataContainer);