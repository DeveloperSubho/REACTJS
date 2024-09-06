import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <p>Class Component: {new Date().toISOString()}</p>;
  }
}

class PureClassComponent extends React.PureComponent {
  render() {
    return <p>Pure Class Component: {new Date().toISOString()}</p>;
  }
}

const FunctionComponent = () => {
  return <p>Function Component: {new Date().toISOString()}</p>;
};


const MemoizedFunctionComponent = React.memo(() => {
  return <p>Memoized Function Component: {new Date().toISOString()}</p>;
});

export default class RenderingExample extends React.Component {
  state = {
    lastRender: new Date().toISOString(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ lastRender: new Date().toISOString() });
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>RenderingExample: {this.state.lastRender}</p>
        <ClassComponent />
        <PureClassComponent />
        <FunctionComponent />
        <MemoizedFunctionComponent />
      </div>
    );
  }
}