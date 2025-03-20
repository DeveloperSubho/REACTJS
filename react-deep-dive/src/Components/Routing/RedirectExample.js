import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const Dashboard = () => <p>Dashboard Component</p>;

const Login = () => <p>Login Component</p>;

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return isLoggedIn ? <Dashboard /> : <Redirect to="/login" />;
        }}
      />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default App;
