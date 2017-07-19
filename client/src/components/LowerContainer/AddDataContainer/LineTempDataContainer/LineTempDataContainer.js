import React from 'react';
import {connect} from 'react-redux';
import './LineTempDataContainer.css';

export class LineTempDataContainer extends React.Component{

  render(){
    let header;
    const dataPoints = this.props.tempData.map(dataObj => {
      return(<div className="temp-data" key={dataObj.x}><p>{dataObj.y}</p></div>)
    });

    if(this.props.tempData.length !== 0){
      header =     <h3 className="temp-data-header">Data collected so far:</h3>
    }

    return(
    <section>
      {header}
      <div className="temp-data-container">
        {dataPoints}
      </div>
    </section>);
  }
}

const mapStateToProps = (state, props) => ({
  tempData: state.tempGraphData
})

export default connect(mapStateToProps)(LineTempDataContainer)