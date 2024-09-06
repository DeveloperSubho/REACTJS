import React, { Component } from "react";

/**
 * In the below code snippet, the browser reloads the page every time the submit button is pressed.
 * That is the default behavior. preventDefault(), as the name suggests, is used to prevent this default behavior.
 * Go ahead, uncomment the line stateEvent.preventDefault(); in the code snippet above, and see the resulting behavior.
 *
 */
class PreventDefaultExample extends Component {
  constructor(props) {
    super(props);

    // Set initial state

    this.state = { timesPressed: 0 };

    // Binding this keyword
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (stateEvent) => {
    stateEvent.preventDefault();
    console.log("You clicked submit.");
    this.setState({
      timesPressed: this.state.timesPressed + 1,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <p>
          Number of times the submit button was pressed:{" "}
          {this.state.timesPressed}
        </p>
      </div>
    );
  }
}

export default PreventDefaultExample;
