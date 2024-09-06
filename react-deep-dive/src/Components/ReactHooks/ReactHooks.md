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
