import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => <p>Home Component</p>;

const Account = () => <p>Account Component</p>;

const Contacts = () => <p>Contacts Component</p>;

const Inbox = () => <p>Inbox Component</p>;

const Error404 = () => <h1>404 – Page not found</h1>;

const App = () => (
  <Router>
    <Switch>
      <Route path="/account" component={Account} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/inbox" component={Inbox} />
      <Route exact path="/" component={Home} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default App;
