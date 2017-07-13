import React from 'react';
import {connect} from 'react-redux';
import './GraphInfoContainer.css';

export class GraphInfoContainer extends React.Component{

  render(){
    return(
      <section className="graph-info-container">
        <h3 className="graph-title">{this.props.graphTitle}</h3>
        <h4 className="graph-feedback">{this.props.feedback}<br/><strong>{this.props.url}</strong></h4>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  graphTitle: state.graphTitle,
  feedback: state.feedback,
  url: state.url
})

export default connect(mapStateToProps)(GraphInfoContainer) 