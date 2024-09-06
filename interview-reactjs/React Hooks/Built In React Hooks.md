## Built-in React Hooks

Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.

### State Hooks

State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

To add state to a component, use one of these Hooks:
**useState**
useState declares a state variable that you can update directly. useState is a React Hook that lets you add a state variable to your component.

`const [state, setState] = useState(initialState)`

**useReducer**
useReducer declares a state variable with the update logic inside a reducer function.
useReducer is a React Hook that lets you add a reducer to your component.

`const [state, dispatch] = useReducer(reducer, initialArg, init?)`

### Context Hooks

Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

**useContext**
useContext reads and subscribes to a context. useContext is a React Hook that lets you read and subscribe to context from your component.

`const value = useContext(SomeContext)`

### Ref Hooks

Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

**useRef**
useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node. useRef is a React Hook that lets you reference a value that’s not needed for rendering.

`const ref = useRef(initialValue)`

**useImperativeHandle**
useImperativeHandle lets you customize the ref exposed by your component. This is rarely used. useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.

`useImperativeHandle(ref, createHandle, dependencies?)`

### Effect Hooks

Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

**useEffect**
useEffect connects a component to an external system. useEffect is a React Hook that lets you synchronize a component with an external system.

`useEffect(setup, dependencies?)`

```
function ChatRoom({ roomId }) {
useEffect(() => {
const connection = createConnection(roomId);
connection.connect();
return () => connection.disconnect();
}, [roomId]);
// ...
```

Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.

There are two rarely used variations of useEffect with differences in timing:

**useLayoutEffect** fires before the browser repaints the screen. You can measure layout here.
**useInsertionEffect** fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.

### Performance Hooks

A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

To skip calculations and unnecessary re-rendering, use one of these Hooks:

**useMemo** lets you cache the result of an expensive calculation. useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

`const cachedValue = useMemo(calculateValue, dependencies)`

**useCallback** lets you cache a function definition before passing it down to an optimized component. useCallback is a React Hook that lets you cache a function definition between re-renders.

const cachedFn = useCallback(fn, dependencies)

```
function TodoList({ todos, tab, theme }) {
const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
// ...
}
```

Sometimes, you can’t skip re-rendering because the screen actually needs to update. In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don’t need to block the user interface (like updating a chart).

To prioritize rendering, use one of these Hooks:

**useTransition** lets you mark a state transition as non-blocking and allow other updates to interrupt it.
**useDeferredValue** lets you defer updating a non-critical part of the UI and let other parts update first.
Resource Hooks
Resources can be accessed by a component without having them as part of their state. For example, a component can read a message from a Promise or read styling information from a context.

To read a value from a resource, use this Hook:

use lets you read the value of a resource like a Promise or context.
function MessageComponent({ messagePromise }) {
const message = use(messagePromise);
const theme = use(ThemeContext);
// ...
}

### Other Hooks

These Hooks are mostly useful to library authors and aren’t commonly used in the application code.

**useDebugValue** lets you customize the label React DevTools displays for your custom Hook.
**useId** lets a component associate a unique ID with itself. Typically used with accessibility APIs.
**useSyncExternalStore** lets a component subscribe to an external store.

_Reference:_
https://react.dev/reference/react/hooks
