Redux as a tool is based on the principles of Flux architecture. This type of architecture has been developed at Facebook to simplify development in client-side web applications. As is the case in React, Flux dictates a unidirectional data flow, meaning data is only ever flowing one way. An action is triggered—for example, through a button click—that alters the state, and this state change will cause a re-render and allow further actions.

Redux works almost the same. However, the state is managed only within one component globally. In practice, this translates to all components gaining access to this state no matter where they are placed.

npm install redux react-redux

yarn add redux react-redux

The redux package will install the main state management library, whereas react-redux will install the bindings. Bindings refer to React components that have been specifically optimized for usage with Redux, allowing us to use these components out of the box.
In theory, Redux could be used as a stand-alone solution, but we would then need to manage components rendering and data flow from the state container ourselves. Although possible, this introduces a great deal of complexity that most of us do not want to deal with. react-redux is thus a sensible choice for many programmers.

## Store

All data in Redux is managed in stores that manage the global state. Theoretically, applications could have many different stores. Flux architecture even encourages the use of multiple stores. However, in most React applications using Redux, we’ll only find a single store. This reduces complexity dramatically and also declares this single store as the single source of truth (SSOT) for all of our data. The store also provides some methods that can be used to change (dispatch) the data currently stored in the store, read (getState) the data from the store, and react to changes (subscribe).

## Actions

The only way to change data in a store is to “dispatch” an action. Once again, Redux has taken its inspiration from Flux architecture and requires that these actions be in Flux Standard Action (FSA) format. FSAs consist of a simple JavaScript object which always must have a type property and can contain payload, meta, and error properties. We are going to focus mostly on the payload. In 9 out of 10 cases, we will deal with a payload when we are dispatching an action.

## Reducers

Once an action has been dispatched (the store provides this dispatch method for us), the current state as well as the action dispatched are passed to the reducer. The reducer is a pure function in React. Its primary aim is to create a new state based on the current state and the action’s type and payload properties. Remember that a pure function always creates the same output, given the same input parameters, no matter how many times it is called. This behavior makes reducers predictable and easy to test.

```
const reducer = (state, action) => {
  switch (action.type) {
    case 'PLUS': {
      return state + action.payload;
    }
    case 'MINUS': {
      return state - action.payload;
    }
    default: {
      return 0;
    }
  }
};
```

A store generally expects only a single reducer. Redux allows us to split the reducer function into many small parts, making them more digestible and easy to read. A combineReducers() function then takes care of merging all these parts into one main reducer: the root reducer. When an action is dispatched, each reducer is called with the same parameters: state and the action.

## The createStore function

To create a store that will manage the global state, we have to import the createStore function from the redux package. We can call it by passing it a reducer function. This function returns a store object to us, which contains all the methods necessary to interact with the store-namely, dispatch, getState, and subscribe. The latter two are not of the same importance when working with React, but we have mentioned them for the sake of completion. In React and Redux applications, the react-redux binding components take care of the rerendering of components if they are affected by a change of the state.

```
import { createStore } from 'redux';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS': {
      return state + (action.payload || 0);
    }
    case 'MINUS': {
      return state - (action.payload || 0);
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);
```

## Actions

Actions, which were introduced earlier, are simple, serializable objects that can be used to describe how exactly the state should change. They always contain a type property and often a payload.

## Action creators

An action creator however, describes a function that returns an action. We could also say that it is a factory that creates actions. In most situations, action creators are used to encapsulate logic that is necessary to create an action. Sometimes, they are also used to abstract away complex logic from the actions themselves. In those cases, the action creator function is called instead of the action and passed to the dispatch method.

## Complex state management

To understand Redux in the context of a much larger state, let’s look at a more realistic example. The upcoming example describes a simple to-do app, and we’ll look at how to implement state management for this app. The to-do app will manage lists of to-do items and also contain a logged-in user area. The state will consist of two top-level properties:
todos (of type array)
user (of type object)

This is reflected in our current state:

```
const initialState = Object.freeze({
  user: {},
  todos: [],
});
```

To ensure that a new state object is being created instead of mutating the previous object, the initial state object is wrapped by Object.freeze(). If there is an attempt to mutate the **state object **directly, a TypeError will be thrown:

## The combineReducers() function

By using Object Spread Syntax, we have only minimized the risk to an extent. We might still forget to return the unchanged part of the state along with the newly created state.

The combineReducers() function comes to our rescue! This method allows us to separate the reducer (or the state which the reducer creates) into many smaller parts that only deal with a particular task. They can even be placed into their own files.

## Combining the reducers into a single root reducer

To combine the smaller reducers into a big reducer, we can use the aforementioned combineReducers() method, which will create a root reducer
that can then be passed to the createStore() method. The combineReducers() function expects an object whose property name matches that of the newly
created state tree. The values also have to be valid reducers. We can do this in the following way:

```
import { combineReducers, createStore } from 'redux';
import userReducer from './store/user/reducer';
import todosReducer from './store/todos/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
});

const store = createStore(rootReducer);
```

## Using Redux with React

react-redux package can be used to make Redux work with React. This package includes the “Official React bindings for Redux,”
which was originally developed by Dan Abramov (now part of the React Core Team). The package is maintained by the Redux community.

The package consists of two components: one component and a function that will create a higher-order component. The Provider component forms the entry point
for Redux. We can wrap the component tree with a Provider component and then access a common store via the connect() function.
This function returns a higher-order component and allows us to connect components to the store.

The Provider component
As most applications tend to only consist of a single store, it is useful to place the Provider component up high in the component tree.
In many situations, it might even make sense to use the Provider component as the very first component of the component tree.
The Provider component receives a Redux store as a store prop and contains many children.
All children have access to the store prop value (the store provided) and can also read it or change it via the dispatching of actions.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const dummyReducer = (state = {}, action) => {
  return state;
};

const store = createStore(dummyReducer);

const App = () => <p>We can have access to the Redux store here.</p>;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

In most recent examples, only the <App /> component was passed to ReactDOM.render(). Here, however, we place a <Provider /> component
around the App and also pass a dummy store to it.

## Connecting components to a store using the connect function

Now, on to the more difficult part of React with Redux: connecting a React component to a Redux store using a connect() function. This function can take up to four parameters, of which the first three are functions that can also take three parameters. That sounds like a lot. But rest assured, in most cases, we only really need two out of these four parameters, and the functions will only take a single argument. But let’s go through everything step by step, increasing the complexity with each step.

The function takes the following form:

connect(
mapStateToProps,
mapDispatchToProps,
mergeProps,
options
);
Calling the connect() function will create a higher order component. It can be used to transfer parts of the state of the store to this component.
To decide which parts of the state should be passed as props, we use the first parameter that is mapStateToProps.

## mapStateToProps

In React Redux, mapStateToProps is a function that connects a React component to the Redux store. It's used to select data from the store that the component needs, and is often referred to as mapState for short.

Here's what mapStateToProps does:

1. Reads data from the store
   mapStateToProps takes data from the store and maps it to the props of a component.
2. Merges updates into props
   mapStateToProps is called whenever the store state changes, and it merges the updates into the component's props.
3. Decouples Redux code from React components
   mapStateToProps allows the component to focus on displaying content, while mapStateToProps knows where to find the data in the state.

Here's an example of how mapStateToProps can be used:
Define mapStateToProps to return a plain old JavaScript object (POJO) as a prop for the component:

```
const mapStateToProps = (state) => { return { ingredients: state. ingredients }; };
```

Use the connect function with mapStateToProps:

```
connect(mapStateToProps)(ProfilePicture)
```

mapStateToProps receives the complete state as a first parameter and the ownProps of the component as a second parameter. These props might be passed to the HOC. Depending on whether only the first or both parameters are passed, the function is either called if something changes within the Redux state or if the props change, which is passed to the component. It takes the following form:

```
const mapStateToProps = (state, ownProps) => {
// ...
};
```

The function will always expect an object return value. The properties of this object will then be passed to the component as stateProps.

### Passing mapStateToProps to the connect() function

The properties of this object such as openTodos, completedTodos, and totalCount will be passed to the wrapping component as props. How? By passing mapStateToProps to the connect() function. This will return a HOC, which we can then pass our component to (in which we access the props from the state):

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

## mapDispatchToProps

Let’s look at the second parameter for the connect() function, mapDispatchToProps:

const mapDispatchToProps = (dispatch, ownProps) => {
// ...
};
Or, it can alternatively be written as follows:

const mapDispatchToProps = {
// ...
};

While mapStateToProps grants us access to the store to read data, mapDispatchToProps allows us to change the store’s data with write access. The mapDispatchToProps function’s signature looks similar to that of mapStateToProps. However, instead of receiving the whole state as a first parameter, we receive the dispatch method of the store that we connect to. The second parameter of mapDispatchToProps form ownProps-the props of the component itself - that is passed to the component. It is also possible to pass a mapDispatchToProps object instead of a function to the connect() call.

### Passing mapDispatchToProps to the connect() function

A new object with the object properties addTodo, removeTodo, and changeStatus is returned. Each of these is passed as props to a connected component with the same name. We pass mapStateToProps() to the connect() function as a second parameter to achieve this:

const ConnectedTodoList = connect(
mapStateToProps,
mapDispatchToProps
)(TodoList);

## Redux with React Hooks

With React-Redux v7.1.0, Hooks have officially landed in the official React bindings for Redux. Hooks increase the usability of Redux in React manyfold. While creating a store is much the same, the connect() HOC can be avoided completely. Each method of access (reading or writing by dispatching actions) can be achieved by Hooks.

The most important Hooks to remember are useSelector and useDispatch, which can be loosely compared to mapStateToProps and mapDispatchToProps. Following this analogy, the useSelector Hook is used to read data from the store while useDispatch is used to dispatch actions to write data to the store. React Redux offers a third Hook, useStore, which is not really used in the wild. Its usage should be more of a last resort should you really need access to the store object.

These Hooks can be imported as named imports from react-redux:

```
import { useSelector, useDispatch, useStore } from 'react-redux';
```
