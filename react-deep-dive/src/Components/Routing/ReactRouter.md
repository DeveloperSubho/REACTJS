## React Router interface

The interface of React Router is relatively simple. In most of situations, you will only typically encounter five core components:

BrowserRouter
Link
Route
Redirect
Switch

### React Router installation and usage

You can install React Router using the following:

npm install --save react-router-dom
Or, if you prefer using Yarn:

yarn add react-router-dom

### Route component

Each component placed inside the <Router></Router> element can access the router context, react to it, or manage it. We create routes by using the Route component and providing a path prop and an optional render or component prop (the exception being the 404 route). The value of a render prop must be a function that returns a valid React element. The component prop expects a component, not an element.

### Limit Matching Between Path and the URL

### Limit matching with props

To limit the matching between the path and the URL, React Router provides an exact prop on the Route component. If this Boolean prop is provided, the Route is only rendered if the path prop exactly matches the current URL. Let’s look at an example

```
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <p>Home Component</p>;

const Account = () => <p>Account Component</p>;

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/account" component={Account} />
    </Router>
  );
};

export default App;
```

We can see that this time only the Home component renders instead of both the Home and Account components, which was the case previously.

Where exactly you place this prop in JSX is not important. We could place it just before the path prop to let it speak for itself: “Here’s a route that matches an exact path.” If we included the exact prop in the AccountSidebar component discussed previously, the sidebar would only be rendered if the URL with /account was hit and would not register the components for /account/edit, /account/images, or /account/settings.

### Limiting matching to a single Route via the Switch component

The exact prop only ever covers a single Route and does not affect other routes at all. If we have several URLs that could all match multiple routes, it would be very cumbersome to add an exact prop to all of these routes. React Router offers a solution to this problem by offering the Switch component.

The Switch component, which can wrap many <Route /> elements, helps us to only ever render the first Route whose path matches with the one currently present in the URL. It’s good idea to wrap Routes elements with a Switch element by default unless we want more than one Route rendered. In the above example, we could have used a Switch component instead of the exact prop, too:

```
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => <p>Home Component</p>;

const Account = () => <p>Account Component</p>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;

```

## The Redirect component

Apart from the usual Route component to react to particular Routes, React Router also offers a Redirect component. The Redirect component is initialized with a to prop in which we can provide a destination URL that the component should redirect to. It allows us to declaratively decide in JSX where to send a particular user in certain situations. Whenever a Redirect component is equipped with only a to prop, a redirect to the URL provided will take place.

Often, Redirect components are a great solution to the common use case of having to redirect users to a login page if they are not logged in.

## Accessing React Router props

Each component that was rendered by React Router and has been added as a component prop to a Route component automatically receives three other props:
match
location
history

Each of these props can be accessed just like any other prop. class components can access these via this.props whereas function components can access these with props
