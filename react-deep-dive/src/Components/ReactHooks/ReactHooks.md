# React Hooks

Hooks are a completely new and novel concept introduced in React 16.8.0.
Many React Core developers have already described Hooks as one of the most exciting
and fundamental shifts in React. Indeed, Hooks were making waves at the 2018 React Conf
where they were first announced—before their introduction in the React 16.7 alpha release.
Other frameworks have even followed suit and implemented their own version of Hooks.
But what are Hooks exactly?

## What are Hooks?

Hooks allow us to use certain mechanisms in function components that were only available
to class components in the past. Features such as setState or lifecycle methods such
as componentDidMount() or componentDidUpdate()—which used to be reserved entirely
for class components—can now be used in function components thanks to Hooks.
Simply put, Hooks are nothing more than special functions that follow a predefined schema.
One of these schemas is the convention that the name of a Hook must start with use.

React offers several internal Hooks that are ready to use out of the box,
such as useState, useEffect, or useContext. It also allows for the creation of custom Hooks,
which are functions in which we can use our own logic. To follow the convention mentioned,
they also have to start with the use keyword, but apart from that,
we can freely choose to give the Hook any name we want as long as the name is also
a valid JavaScript function name. Names such as useAccountInfo or useDocumentInfo are great examples.

Hooks allow us to reuse component logic coherently. Before Hooks, many components often
used identical componentDidMount() or componentDidUpdate() methods that followed the
same implementation patterns with the difference of checking whether various parameters
had changed during componentDidUpdate(). For example, they checked whether a user ID
(which was passed via props) had changed, which in turn initiated another API request.

Hooks were thus introduced to make it possible to easily share complex logic without the
need for writing unnecessary duplicate code. If you are comfortable with class components
and how they work, Hooks might force you to completely rethink how components can and should interact.
Processes, as well as the composition of the components themselves, have changed.
Where complex classes with class properties, inheritance, and a mutual this context have
prevailed in the past, Hooks replace these with relatively simple and clean functions.

### Are class components still worth it?

Now, we only have to answer this question: Are class components still worth using?

This question came up again and again shortly after the announcement and introduction of React Hooks. The React team has discouraged people from rewriting their existing applications that use classes into function components using Hooks. Classes will remain part of React.

The community did not really take this advice to heart. Many developers started rewriting entire applications after React 16.7.0-alpha, announcing on Twitter how excited they were about the simplicity Hooks have introduced for their development and the reduced overhead from not having to use class components.

Of course, you can continue to use class components for as long as they continue to be supported. There are no plans to remove them from React, either. Once you have started getting used to writing components with React Hooks, however, it’ll be tough to trade the simplicity and increased understanding of this new style for class components.

## Built-in Hooks

React currently offers ten Hooks for us to use. Of these ten, three are fundamental or basic; the remaining seven are additional (according to the official React documentation). It’s a useful distinction, though, because the three basic Hooks useState(), useEffect() and useContext() will be sufficient in most cases.

The remaining additional Hooks will help us cover edge cases or deal with certain optimizations. For now, we’ll focus on basic Hooks and how we can now implement functionality in function components that were previously reserved for class components.

Note: The following is a list of the additional Hooks provided by React:

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

### useEffect() vs. lifecycle methods

The name of the useEffect() Hook derives from its intended usage: for side effects. In this case, we mean loading data via an API, registering global events, or manipulating DOM elements. The useEffect() Hook includes functionality that was previously found in the componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods.

If you’re wondering whether all these lifecycle methods have now been replaced and been combined into a single Hook, you’re correct. Instead of using three methods, you only need to use a single Hook, which takes effect in similar places where the class component methods were previously used. The trick is to use particular function parameters and return values that are intended for the useEffect() Hook.

### Replacing componentDidMount() lifecycle method

In order to use the useEffect() Hook, we pass the useEffect() function another function as its first parameter. This function, which we will call the effect function for now, is invoked after each rendering of the component and “replaces” the componentDidMount() part of class components.

Since this effect function is called after each render of the component, it is also called after the first render. This equates to the working of componentDidMount() lifecycle method.

### Replacing componentWillUnmount() lifecycle method

Moreover, the effect function can optionally return another function. Let’s call this function a Cleanup function. This function is invoked during the unmounting of the component, which roughly equates to the componentWillUnmount() class component method.

Note: Be careful. While this sounds similar, the useEffect() Hook works slightly differently than class components’ lifecycle methods. Our cleanup function is not only called during the unmounting of the component but also before each new execution of the effect function.

### Dependency array

The second parameter of the useEffect() Hook is the dependency array. The values of this array indicate the values upon which the execution of the effect function depends on. If a dependency array is passed, the Hook is only invoked initially, and then only when at least one of the values in the dependency array has changed.

If we explicitly try to replicate behavior previously covered by componentDidMount(), we can pass an empty array as our second parameter. React then only executes the effect function on the initial render and only calls a cleanup function again during unmount.

### Only call Hooks from React functions

Hooks can only be called in React function components, not in class components or anywhere else. This means that a function that uses Hooks always has to be a React component,or it always has a return value (either JSX, Arrays, Strings, or null).

### Only call Hooks at the top level

It is not possible to use Hooks inside of loops, conditions, or nested functions. You might wonder why. The reason is because of how React treats Hooks internally. The order in which Hooks are executed has to be identical for each re-render of the component, which explains why it is not possible to call a Hook conditionally. If we did, in fact, execute a Hook based on a condition, we would change the order in which the Hooks are being executed. We can use conditions inside of Hooks, though!

### Custom Hooks

We might want to use this logic in other components but don’t want to continuously repeat ourselves and implement the same functionality with useEffect. it’s worth extracting our first custom Hook:

```
// useBackgroundColor.js
import { useEffect } from 'react';

const useBackgroundColor = (color) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);
};

export default useBackgroundColor;
```

## The Hooks API

### Types of Hooks

From this lesson onwards, we’ll summarize all the Hooks available internally and describe how and when they can be used. The official React documentation differentiates between three basic Hooks and seven additional Hooks. These additional Hooks are often used for very specific use cases (such as performance optimizations), or they are extensions of the basic Hooks.

### Basic Hooks

The three basic Hooks that we mentioned briefly beforehand are:
useState
useEffect
useContext
Additional Hooks

### The seven additional Hooks are:

useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue

### useState

This Hook returns a value as well as a function to us, which we can use to update the value. We can initialize the state using this Hook in the following way:

```
const [state, setState] = useState(initialState);
```

### Updating the state of objects

In contrast to this.setState(), objects are not merged with their previous state. Rather, the old state is completely replaced by the new state.

_StateClass.js_

While StateClass collects and merges the data of all calls of this.setState(), the setState() function in the StateHook completely replaces the old value with the new one. The following output is returned to us by the class component:

{a: 1, b: 2, c: 3, d: 4}
In comparison, the function component containing the Hook returns only the value that was written into the state last:

{d: 4}

### useEffect

Learn how to add side effects in function components and the rules to follow while using the useEffect Hook.

This Hook is intended for imperative side effects such as API requests, timers, or global event listeners. Normally, these side effects should be avoided in function components, since they can lead to unexpected behavior or bugs that might be hard to solve.

The useEffect() Hook combats this problem and allows for a safe mechanism to use side effects within function components.

We call useEffect() in the following way:

useEffect(effectFunction, dependenciesArray);

The Hook expects a function as its first parameter and a dependency array as its second. The function is called after the component has rendered. If we have passed an optional dependency array to this Hook, the function we pass will only be executed if at least one of the values in the dependency array has changed. If an empty dependency array is passed, the function will only be run on the first render of the component, similar to the componentDidMount() lifecycle method.

### Conditional calls of the effect function

Normally, the useEffect() Hook or its associated effect function is executed after each render of a component. This way, we ensure that the effect is executed each time one of its dependencies is changed. If we access the state or props of a component within the effect function, the side effect should also be executed if one of the dependencies changes. If we wanted to display the profile data of a particular user and requested this data from an API, the API request should also be initiated if the user’s profile that we want to look at changes while the component is already mounted.

However, this might lead to many unnecessary calls of this function, and it might even be executed if no data has actually changed since the last render, which is relevant for the side effect. This is why React allows us to define a dependency array as a second parameter in the effect function. The function will be called again only if one or more values in the dependency array have changed. Let’s put our previous example into a code snippet:

useEffect(() => {
const user = api.getUser(props.username);
setUser(user);
}, [props.username]);
In this example, we have put the username into the dependency array that we use to request data from the API.

While creating such a dependency array, we should take the utmost care to include all values that are present in the function and could change within the lifetime of the component. If the effect function should only be run once and perform a similar task such as componentDidMount(), we leave the dependency array empty.

## useContext

This Hook only expects one parameter: a context type, which we create by calling React.createContext(). It will then return the value of the next highest context provider in the component hierarchy. We can call this Hook in the following way:
const myContextValue = useContext(MyContext);

## useReducer

The useReducer() Hook is an alternative solution for useState() and allows us to manage more complex states. It’s based on flux architecture in which a reducer function creates a new state by being passed the last state and an action.

The reducer function is called by executing a dispatch function, that in turn receives an action. The action is an object which always has a type property and often a payload property attached. From this action and the previous state, the reducer function can then create the new state. We can summarize this in the following form:

(oldState, action) => newState
The useReducer() Hook has the following form:

const [state, dispatch] = useReducer(reducerFunc, initialState, initFunc);

## Redux

The guiding principle of reducers should be known to those in the React community who have had exposure to Redux. Redux is a library that allows us to manage complex states comfortably and was the first point of call whenever handling local states became cumbersome and difficult to read. It also created a solution for “prop drilling,” which meant that previous props needed to be passed through multiple hierarchical layers.

Redux manages reducer functions and makes state and their dispatch functions available to those components that should read or modify the global state. The useReducer() Hook is React’s custom solution to realize complex state management using reducer functions.

## useCallback

The useCallback() Hook can be used to optimize the performance of an application. It receives a function and then creates a unique identity of that function, which will remain active until the dependencies of the Hook itself change.

This is important becasue we need to provide the same reference to a function when:
Dealing with PureComponents.
Functions implement their own shouldComponentUpdate() method.
Functions are wrapped by React.memo().

The useCallback() Hook expects two parameters. The first is a function and the second is a dependency array (similar to that in useEffect()). It’s called in the following way:

const memoizedFunction = useCallback(callbackFunction, dependencyArray);

### Difference between useMemo() and useCallback()

The other Hook that’s useful for performance optimization is the useMemo() Hook. We call it in the following way:

const memoizedValue = useMemo(valueGetterFunction, dependencyArray);
It works similarly to the useCallback() Hook. However, it does not provide a unique identity for the function going in, but for the return value from the function, which has been passed into the useMemo() Hook.

## useRef

The useRef() Hook is used to create references by using a dedicated Hook. We’ll call it in the following way:

const ref = useRef(initialValue);
