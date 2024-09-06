**Beginner React Hooks Interview Questions**

1. What is React?
   React is an efficient, flexible, open-source front-end javaScript library created by FaceBook in 2011. It is a tool for building complex and reusable user interfaces, especially for single-page applications. It follows the component-based approach.

2. What are the important features of React?
   The following are React's important features:

- It supports server-side rendering.
- It follows the component-based approach.
- It follows unidirectional data flow.
- It uses Virtual DOM rather than real DOM.
- React uses JSX, a combination of basic HTML and JavaScript.

3. What are the advantages of React?
   The advantages of React are as follows:

- Easy to Learn and Use: React is easy to learn and use, as it uses JSX, a combination of basic HTML and JavaScript with some addition.

- Reusable Components: React follows the components-based approach to building mobile and web applications, and an application consists of multiple components. You can reuse these components throughout the application.

- Unidirectional Data Flow: React follows the unidirectional data flow while designing a react app. It becomes easier to debug errors and identify where the problem occurs.

- Use of Virtual DOM: React uses the Virtual DOM instead of Real DOM. Virtual DOM compares the component's previous states and updates only the changed items in Real DOM instead of updating all the components again. Thus it makes the web application faster.

- SEO Friendly: React allows server-side rendering, which boosts the SEO of an application.

4. What are the limitations of React?
   Following are the limitations of React:

- The first thing is that React is not a fully-fledged framework. It is just a JavaScript library.
- The beginner programmer might face difficulties understanding React fully.
- There are numerous components in React, which might take time to grasp all the benefits fully.
- The coding might become complex using JSX.

5. What do you understand by React hooks?
   Hooks are the newly added features in React v16.8. They are in-built functions that allow the developers to use state and life cycle methods within the components in React. They allow you to use all React features without writing a class component. Using Hooks, we can extract the stateful logic from a component so it can be tested independently and reused. This makes it possible to share Hooks among many components.

6. What are the benefits of using React hooks?
   Following are some of the benefits of using React Hooks:

   - If you use React Hooks, you can code in React without using classes.
   - You can easily test and reuse existing states in your code using hooks.

7. Will react hooks work inside the class component? What do you think?
   No, react hooks won’t work inside the class component.

**Intermediate React Hooks Interview Question**

1. What is the Virtual DOM?
   The Virtual DOM in react a concept, where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

2. What are the differences between class components and functional components?
   The differences between the class component and functional component are as follows:
   ![class-vs-fucntional-component](/Screenshots/class-vs-fucntional-component.jpg)

3. What do you know about React props?
   In react, the prop stands for "Properties". They are plain JavaScript objects. Every React Component accepts a single object argument, known as the props. You can pass these props from one component to another using HTML attributes, and the accepting components accept these props as an argument. One thing to note is that props are immutable, which means they can be changed or manipulated inside a component.

4. What do you understand by React state?
   In React, the states are plain JavaScript objects. The state is used to contain data or information about the component. The state of a component can change over time. Whenever the state changes, it re-renders.

5. What is the difference between state and props in React?
   Both the state and props are JavaScript objects. They are different in their functionality regarding the component.
   ![state-vs-props](/Screenshots/state-vs-props.jpg)

6. What is the use of useState() in React Hooks?
   useState is one of the built-in React hooks. It allows you to track the state in a functional component in React. The term state refers to data or properties that need to be tracked. You need to pass the initial state inside the useState(), which returns variables with the state value and another function to update the current state of the variable.

7. What is the use of useEffect in React Hooks?
   useEffect is one of the built-in React Hooks. It allows you to manage side effects in your functional components in React. Here the term side effects refer to fetching requests, manipulating DOM, using timer functions and more.
   The useEffect accepts two arguments a callback function and dependencies. The callback function contains the side effects, while the dependencies are optional. If the value of the dependencies has changed between the rendering, then only useEffect() to execute the callback function.

8. What is the use of useRef in React Hooks?
   useRef is one of the built-in React Hooks. It allows you to persist values between render. You can also use it to store a mutable value that does not cause a re-render when updated. You must pass the initial value inside the useRef, which returns a mutable ref object. The object has a property called "current", where the value is persisted.

9. What is the use of the useCallback hook?
   useCallback is one of the react hooks used to prevent functions declared within the body of function components from being recreated on every render.

10. What is the use of the useMemo hook?
    The useMemo hook is used to memoise an expensive operation that we give it. The term "memoise" refers to remembering past values that have already been computed.

**Advanced React Hooks Interview Questions**

1. Why were Hooks introduced in React?
   The main reason for introducing React Hooks was to make the functional components stateful. Before React v16.8, the functional components were called stateless components as we could only do the state management and the life cycle methods using only the class components. So whenever we needed to use the state management or life cycle methods, we had to change the functional components to the class components.

2. Name the rules that must be followed while using React Hooks.
   The rules that must be followed while using React Hooks are mentioned below:

- You can only call the React Hooks from the react functional components.
- React hooks must only be called at the top level. They should not be called inside nested functions, loops or conditions.

3. Why do React Hooks make use of refs?
   Following are some of the reasons for using refs in React Hooks:

- Managing focus, media playback or text selection.
- Integrating with DOM libraries by third-party.
- Triggering the imperative animations.

4. What do you know about the Custom Hooks?
   Custom Hooks in react is a JavaScript function whose name starts with "use", and they may call other Hooks.

5. Below we have a class component with a state value

```
class Count extends Component {
state = {
value: 0,
};

    incrementValue = () => {
      this.setState({
        value: this.state.value + 1,
      });
    };

    render() {
      return (
        <div>
          <button onClick={this.incrementValue}>Count:{this.state.value}</button>
        </div>
      );
    }

}
```

how can you rewrite this component using react hooks?

The equivalent code using function component and react hooks are shown below,

```
import React, { useState } from "react";

const Count = () => {
const [value, setvalue] = useState(0);

return (

<div>
<button
onClick={() => {
setCount(value + 1);
}} >
Count: {value}
</button>
</div>
);
}
```

6. How can you update the current state value based on the previous state value using react hooks?
   Thing is that you can update the current state value by passing the new value to the update function or by passing a callback function. The second technique is safe to use.
   Below, is the code for updating the current state value based on the previous state.

   ```
   import React, { useState } from "react";

   const Count = () => {
   const [value, setValue] = useState(0);

   const increment= () => {
   setCount((prevValue) => {
   return prevValue + 1;
   });
   };

   const decrement = () => {
   setCount((prevValue) => {
   return prevValue - 1;
   });
   };

   return (

     <div>
       <strong>Count: {value}</strong>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
     </div>
   );
   }
   ```

7. You are given a code snippet in the form of a class component that registers and removes an event listener.

```
componentDidMount() {
window.addEventListener("mousemove",this.handleMousePosition);
}

componentWillUnmount() {
window.removeEventListener("mousemove",this.handleMousePosition);
}
```

**_Can you rewrite this using the react hooks?_**
The react-hook version of the code is shown below,

```
useEffect(() => {
window.addEventListener("mousemove", handleMousePosition);

return () => {
window.removeEventListener("mousemove",handleMousePosition);
};
}, []);
```

_Resources:_
https://www.codingninjas.com/codestudio/library/top-react-hooks-interview-questions
