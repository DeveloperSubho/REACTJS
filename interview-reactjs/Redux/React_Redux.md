**Redux**
A state management system for cross-component or app-wide state.
(Issue with React Context: 1. Complex Setup/Management, 2. Perfomance)
Redux is a predictable state container for JavaScript apps, ranging from vanilla apps to framework apps. Redux has a very tiny footprint, but it still allows you to write consistent apps that can run in any environment:

***Types of state:***
- Local State: State that belongs to a single component. Eg: User input (Managed by useState()/useReducer())
- Cross-Component State: State that affects multiple components. Eg: Open/Close state of modal overlay (Prop chains/prop drilling)
- App-Wide State: State that affects the entire app. Eg: User authentication status (Prop chains/prop drilling)

***Core Redux concepts:***
Components never directly manipulates the store data

![Redux](/Screenshots/reactreduxx.png)

![Redux](/Screenshots/react-redux-architecture.png)

***Store***
A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

***Store Methods***
getState()
Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.

Returns
(any): The current state tree of your application.

dispatch(action)
Dispatches an action. It is a javascript object with type property. This is the only way to trigger a state change.

The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.
Returns
(Object†): The dispatched action

Example
```
import { createStore } from 'redux'
const store = createStore(todos, ['Use Redux'])

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))
```

***subscribe(listener)***
Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.
Returns
(Function): A function that unsubscribes the change listener.

Example
```
function select(state) {
  return state.some.deep.property
}

let currentValue
function handleChange() {
  let previousValue = currentValue
  currentValue = select(store.getState())

  if (previousValue !== currentValue) {
    console.log(
      'Some deep nested property changed from',
      previousValue,
      'to',
      currentValue
    )
  }
}

const unsubscribe = store.subscribe(handleChange)
unsubscribe()
```

***replaceReducer(nextReducer)***
Replaces the reducer currently used by the store to calculate the state.

It is an advanced API. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. You might also need this if you implement a hot reloading mechanism for Redux.

Arguments
nextReducer (Function) The next reducer for the store to use.

***Action***
Actions are plain JavaScript objects that have a type field.We can think of an action as an event that describes something that happened in the application.

***Reducer***
A reducer is a pure function that determines changes to an application’s state. Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.
A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

***Provider***
The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.

The Hooks and connect APIs can then access the provided store instance via React's Context mechanism.

```
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import createStore from './createReduxStore'

const store = createStore()

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

***Connect***
The connect() function connects a React component to a Redux store.
It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
The mapStateToProps and mapDispatchToProps deals with your Redux store’s state and dispatch, respectively. state and dispatch will be supplied to your mapStateToProps or mapDispatchToProps functions as the first argument.

The returns of mapStateToProps and mapDispatchToProps are referred to internally as stateProps and dispatchProps, respectively. They will be supplied to mergeProps, if defined, as the first and the second argument, where the third argument will be ownProps. The combined result, commonly referred to as mergedProps, will then be supplied to your connected component.

connect() Parameters​
connect accepts four different parameters, all optional. By convention, they are called:

mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object
mapStateToProps?: (state, ownProps?) => Object​
If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.

Parameters​
state: Object
ownProps?: Object
A mapStateToProps function takes a maximum of two parameters. The number of declared function parameters (a.k.a. arity) affects when it will be called. This also determines whether the function will receive ownProps. See notes here.

state​
If your mapStateToProps function is declared as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter.

const mapStateToProps = (state) => ({ todos: state.todos })
ownProps​
If your mapStateToProps function is declared as taking two parameters, it will be called whenever the store state changes or when the wrapper component receives new props (based on shallow equality comparisons). It will be given the store state as the first parameter, and the wrapper component's props as the second parameter.

The second parameter is normally referred to as ownProps by convention.

const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.id],
})
Returns​
Your mapStateToProps functions are expected to return an object. This object, normally referred to as stateProps, will be merged as props to your connected component. If you define mergeProps, it will be supplied as the first parameter to mergeProps.

The return of the mapStateToProps determine whether the connected component will re-render (details here).

For more details on recommended usage of mapStateToProps, please refer to our guide on using mapStateToProps.

You may define mapStateToProps and mapDispatchToProps as a factory function, i.e., you return a function instead of an object. In this case your returned function will be treated as the real mapStateToProps or mapDispatchToProps, and be called in subsequent calls. You may see notes on Factory Functions or our guide on performance optimizations.

mapDispatchToProps?: Object | (dispatch, ownProps?) => Object​
Conventionally called mapDispatchToProps, this second parameter to connect() may either be an object, a function, or not supplied.

Your component will receive dispatch by default, i.e., when you do not supply a second parameter to connect():

// do not pass `mapDispatchToProps`
connect()(MyComponent)
connect(mapState)(MyComponent)
connect(mapState, null, mergeProps, options)(MyComponent)
If you define a mapDispatchToProps as a function, it will be called with a maximum of two parameters.

Parameters​
dispatch: Function
ownProps?: Object
dispatch​
If your mapDispatchToProps is declared as a function taking one parameter, it will be given the dispatch of your store.

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}
ownProps​
If your mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the wrapper component as the second parameter, and will be re-invoked whenever the connected component receives new props.

The second parameter is normally referred to as ownProps by convention.

// binds on component re-rendering
<button onClick={() => this.props.toggleTodo(this.props.todoId)} />

// binds on `props` change
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(toggleTodo(ownProps.todoId)),
})
The number of declared function parameters of mapDispatchToProps determines whether they receive ownProps. See notes here.

Returns​
Your mapDispatchToProps functions are expected to return an object. Each fields of the object should be a function, calling which is expected to dispatch an action to the store.

The return of your mapDispatchToProps functions are regarded as dispatchProps. It will be merged as props to your connected component. If you define mergeProps, it will be supplied as the second parameter to mergeProps.

const createMyAction = () => ({ type: 'MY_ACTION' })
const mapDispatchToProps = (dispatch, ownProps) => {
  const boundActions = bindActionCreators({ createMyAction }, dispatch)
  return {
    dispatchPlainObject: () => dispatch({ type: 'MY_ACTION' }),
    dispatchActionCreatedByActionCreator: () => dispatch(createMyAction()),
    ...boundActions,
    // you may return dispatch here
    dispatch,
  }
}
For more details on recommended usage, please refer to our guide on using mapDispatchToProps.

You may define mapStateToProps and mapDispatchToProps as a factory function, i.e., you return a function instead of an object. In this case your returned function will be treated as the real mapStateToProps or mapDispatchToProps, and be called in subsequent calls. You may see notes on Factory Functions or our guide on performance optimizations.

Object Shorthand Form​
mapDispatchToProps may be an object where each field is an action creator.

import { addTodo, deleteTodo, toggleTodo } from './actionCreators'

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo,
}

export default connect(null, mapDispatchToProps)(TodoApp)
In this case, React-Redux binds the dispatch of your store to each of the action creators using bindActionCreators. The result will be regarded as dispatchProps, which will be either directly merged to your connected components, or supplied to mergeProps as the second argument.

// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
bindActionCreators(mapDispatchToProps, dispatch)
We also have a section in our mapDispatchToProps guide on the usage of object shorthand form here.

mergeProps?: (stateProps, dispatchProps, ownProps) => Object​
If specified, defines how the final props for your own wrapped component are determined. If you do not provide mergeProps, your wrapped component receives { ...ownProps, ...stateProps, ...dispatchProps } by default.

Parameters​
mergeProps should be specified with maximum of three parameters. They are the result of mapStateToProps(), mapDispatchToProps(), and the wrapper component's props, respectively:

stateProps
dispatchProps
ownProps
The fields in the plain object you return from it will be used as the props for the wrapped component. You may specify this function to select a slice of the state based on props, or to bind action creators to a particular variable from props.

Returns​
The return value of mergeProps is referred to as mergedProps and the fields will be used as the props for the wrapped component.

Note: Creating new values in mergeProps will cause re-renders. It is recommended that you memoize fields in order to avoid unnecessary re-renders.

options?: Object​
{
  context?: Object,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
context: Object​
Note: This parameter is supported in >= v6.0 only

React-Redux v6 allows you to supply a custom context instance to be used by React-Redux. You need to pass the instance of your context to both <Provider /> and your connected component. You may pass the context to your connected component either by passing it here as a field of option, or as a prop to your connected component in rendering.

// const MyContext = React.createContext();
connect(mapStateToProps, mapDispatchToProps, null, { context: MyContext })(
  MyComponent
)
areStatesEqual: (next: Object, prev: Object, nextOwnProps: Object, prevOwnProps: Object) => boolean​
default value: strictEqual: (next, prev) => prev === next
Compares incoming store state to its previous value.

const areStatesEqual = (next, prev) =>
  prev.entities.todos === next.entities.todos
You may wish to override areStatesEqual if your mapStateToProps function is computationally expensive and is also only concerned with a small slice of your state. The example above will effectively ignore state changes for everything but that slice of state. Additionally, areStatesEqual provides nextOwnProps and prevOwnProps to allow for more effective scoping of your state which your connected component is interested in, if needed.

This would likely impact the other equality checks as well, depending on your mapStateToProps function.

areOwnPropsEqual: (next: Object, prev: Object) => boolean​
default value: shallowEqual: (objA, objB) => boolean ( returns true when each field of the objects is equal )
Compares incoming props to its previous value.

You may wish to override areOwnPropsEqual as a way to whitelist incoming props. You'd also have to implement mapStateToProps, mapDispatchToProps and mergeProps to also whitelist props. (It may be simpler to achieve this other ways, for example by using recompose's mapProps.)

areStatePropsEqual: (next: Object, prev: Object) => boolean​
type: function
default value: shallowEqual
Compares the result of mapStateToProps to its previous value.

areMergedPropsEqual: (next: Object, prev: Object) => boolean​
default value: shallowEqual
Compares the result of mergeProps to its previous value.

You may wish to override areStatePropsEqual to use strictEqual if your mapStateToProps uses a memoized selector that will only return a new object if a relevant prop has changed. This would be a very slight performance improvement, since would avoid extra equality checks on individual props each time mapStateToProps is called.

You may wish to override areMergedPropsEqual to implement a deepEqual if your selectors produce complex props. ex: nested objects, new arrays, etc. (The deep equal check may be faster than just re-rendering.)

forwardRef: boolean​
Note: This parameter is supported in >= v6.0 only

If {forwardRef : true} has been passed to connect, adding a ref to the connected wrapper component will actually return the instance of the wrapped component.

connect() Returns​
The return of connect() is a wrapper function that takes your component and returns a wrapper component with the additional props it injects.

import { login, logout } from './actionCreators'

const mapState = (state) => state.user
const mapDispatch = { login, logout }

// first call: returns a hoc that you can use to wrap any component
const connectUser = connect(mapState, mapDispatch)

// second call: returns the wrapper component with mergedProps
// you may use the hoc to enable different components to get the same behavior
const ConnectedUserLogin = connectUser(Login)
const ConnectedUserProfile = connectUser(Profile)
In most cases, the wrapper function will be called right away, without being saved in a temporary variable:

import { login, logout } from './actionCreators'

const mapState = (state) => state.user
const mapDispatch = { login, logout }

// call connect to generate the wrapper function, and immediately call
// the wrapper function to generate the final wrapper component.

export default connect(mapState, mapDispatch)(Login)

https://redux.js.org/introduction/getting-started
https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/
https://www.javatpoint.com/react-redux
https://medium.com/swlh/how-to-use-redux-with-react-a-step-by-step-guide-1cca75c6397a
https://redux.js.org/api/store
https://react-redux.js.org/api/connect
