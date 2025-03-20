import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Example = () => <p>Example Component</p>;

const App = () => {
  return (
    <Router>
      <Route path="/example" component={Example} />
      <Route path="/example" render={() => <Example />} />
    </Router>
  );
};

export default App;
