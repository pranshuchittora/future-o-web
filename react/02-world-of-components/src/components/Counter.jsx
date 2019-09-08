import React from "react";

class Counter extends React.Component {
  state = {
    ctr: 0
  };
  handleIncrement() {
    this.setState({ ctr: this.state.ctr + 1 });
  }
  handleDecrement() {
    this.setState({ ctr: this.state.ctr - 1 });
  }

  render() {
    return (
      <React.Fragment>
        <h4>{this.state.ctr}</h4>
        <button onClick={() => this.handleDecrement()}>-</button>
        <button onClick={() => this.handleIncrement()}>+</button>
      </React.Fragment>
    );
  }
}

export default Counter;
