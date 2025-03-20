import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Example = () => <p>Example Component</p>;

const App = () => {
  return (
    <Router>
      <div> Welcome to React Router </div>
      <Route path="/" component={Example} />
    </Router>
  );
};

export default App;
