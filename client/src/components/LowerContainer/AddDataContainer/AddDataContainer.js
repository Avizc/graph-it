import React from 'react';
import AddDataButton from './AddDataButton/AddDataButton.js';
import AddDataInput from './AddBarDataInput/AddBarDataInput.js';
import {connect} from 'react-redux';
import './AddDataContainer.css';


export class AddDataContainer extends React.Component{

  render(){
    if(this.props.isToggled){
      this.AddBarDataInput = <AddDataInput />
    }else{
      this.AddBarDataInput = undefined
    }
      return(
        <div className="container">
          <AddDataButton />
          {this.AddBarDataInput}
        </div>
      );
  }
}


const mapStateToProps = (state, props) => ({
  isToggled: state.newDataToggle
})

export default connect(mapStateToProps)(AddDataContainer);