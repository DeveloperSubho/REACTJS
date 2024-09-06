import React from "react";

export default class ClassPropertyBind extends React.Component {
  state = {
    counter: 0,
  };

  /**
   * We assign a property within the class with the same name an arrow function as a value.
   * As it is not binding its own this, we access the this of the class instance instead.
   */
  increase = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <p>{this.state.counter}</p>
        <button onClick={this.increase}>+1</button>
      </div>
    );
  }
}
