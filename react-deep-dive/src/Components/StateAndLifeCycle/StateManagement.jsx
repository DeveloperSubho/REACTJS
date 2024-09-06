import React from 'react';

export default class StateManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    }

  }

  addNewState = () => {
    this.setState({date: new Date().toString()});
  }

  render() {
    return (
      <span>
        counter state: { this.state.counter }
        <button type="button" onClick={this.addNewState}> Add date to state </button>
        date state: { this.state.date }
      </span>
    );
  }
}
