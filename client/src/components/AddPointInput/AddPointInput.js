import React from 'react';

export class AddPointInput extends React.Component{

  render(){
    return(
      <div className="container">
        <form className="inputForm">
          <input type="text" placeholder="x"></input>
          <input type="text" placeholder="y"></input>
          <input type="text" placeholder="name"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}