import React from "react";

/**
 * An onClick event is added to increment the counter by one each time the user presses a button labeled +1.
 * But when the user clicks the button, instead of seeing the actual counter, they will receive the error
 */
export default class NonBindExample extends React.Component {
  state = {
    counter: 0,
  };

  increase() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <p>{this.state.counter}</p>
        <button onClick={this.increase}>+1</button>
        {/* <button onClick={this.increase.bind(this)}>+1</button> */}
      </div>
    );
  }
}
