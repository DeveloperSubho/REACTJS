import React from 'react';

const ShowDate = ({ date }) => <div>Today is {date}</div>;

const ShowTime = ({ time }) => <div>It is {time}.</div>;

export default class DateTime extends React.Component {

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        date: new Date(),
      }));
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <ShowDate date={this.state.date.toLocaleDateString()} />
        <ShowTime time={this.state.date.toLocaleTimeString()} />
      </div>
    );
  }
}
