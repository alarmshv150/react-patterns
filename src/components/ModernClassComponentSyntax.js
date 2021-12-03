import React, { Component } from "react";
//use constructor if state depended of props
class ModernClassComponentSyntax extends Component {
  state = {
    counter: 0,
  };
  handleClicK = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log(this.state.counter) //guarantee updated values request from state
    );
  };
  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClicK}>Увеличить</button>
      </>
    );
  }
}

export default ModernClassComponentSyntax;
