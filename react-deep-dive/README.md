# React Deep Dive

React is component-based. We write encapsulated, functional components that can be composed together at will and reused at our leisure.
Extending or inheriting components is possible in theory but rather uncommon in the world of React.
Rather than working with inheritance, React encourages composition, which is the act of combining multiple components into a “whole.”

## React uses declarative code

Imperative refers to instructing the browser precisely what it should do.
Declarative code, on the other hand, defines the end-goal based on our current state, which is one of the fundamental principles of React.

## Virtual DOM

At the end of the day, React elements are nothing more than a never-changing (immutable) JavaScript object containing properties to tell React how and what exactly needs to be displayed. React uses this description of properties to construct a virtual blueprint of the component hierarchy. It resembles the way HTML trees are represented as a JavaScript object. This hierarchy tree is referred to as the VirtualDOM.

This tree is used by React to refresh only the parts of the tree that have actually changed, such as when a user interacts with an app and changes data or fires an event. To do this, React compares the previous tree to the current tree.

React does not refresh the entire application at once or write it to the DOM in its entirety once any state changes; it is a lot more performant than other frameworks or libraries. Other libraries or frameworks can often lead to an unnecessary amount of DOM mutations at the cost of performance. Using a special reconciliation algorithm that compares the previous state with the current state, React processes what has changed and can reduce the number of writes to a minimum.

## Using JSX to create React elements

In the previous lesson, we called React.createElement() while creating our first React component. However, in day-to-day development, we rarely call React.createElement().Facebook has developed its own syntax extension for JavaScript called JSX. JSX reduces and simplifies a great amount of work with React, so that calling React.createElement() is unnecessary
_Note: JSX resembles HTML or XML/XHTML in parts. However, it is more powerful than HTML or XML because we can include JavaScript expressions within it. JSX is an abstraction that makes it a lot easier for the developer to create React elements._

## Node.js and npm

Most of you will know Node.js as server-side JavaScript; however, this is only partly true. Node.js is a JavaScript Runtime Environment that is well-suited to write network applications, such as a server. Node.js also comes with a package management tool, commonly known as npm. The npm tool enables us to easily install new JavaScript libraries on our own machines, as well as write and run our own command-line scripts.

Instead of installing Node directly, we suggest using nvm for Mac or Linux, and nvm-windows for Windows. One of nvm’s advantages is that it does not require root privileges to install packages globally. Moreover, we can update your installed node version with a simple command-line expression (nvm install [version]). If we want to see the list of all available versions, we can run nvm ls-remote (Max/Linux) or nvm list available (Windows). For the remainder of this course, we suggest that you use the LTS version because it’s stable and will receive updates for years to come.

## Yarn

While Node and npm already offer an excellent package manager, Yarn takes it a little bit further and offers simpler commands and better caching — and thus better performance. Similar to React, Yarn was created at Facebook to make working with React a little bit easier. Although React works seamlessly with npm, we still suggest installing Yarn instead. Yarn is gaining popularity, particularly in the React ecosystem due to its ease of use and better performance than npm. Once Node and npm have been installed, Yarn can be added as a global package via npm:

npm install --global yarn
Or in short:

npm i -g yarn

## Babel

Babel is usually only used as a dependency in React-based projects, namely as an npm package. Babel allows us to interpret and then transpile JavaScript that is not standardized or does not yet conform to standards supported by all modern browsers into code that can be executed without issues.

_Transpiling is the process of transforming the source code of one language into a functionally identical piece of code in another language. In our case, that’s transforming JSX or ES2015+ into valid and executable JavaScript that is understood by all browsers._

Babel consists of a core module (@babel/core) which offers a few APIs that plugins can use for each transpilation. These plugins are often grouped by presets. In turn, presets can install many plugins at once. In React, the most common presets are @babel/preset-react and @babel/present-env. The former is used to read and translate JSX. The latter transforms modern JavaScript based on its destination environment and translates it into something that even older browsers can understand.

The @ sign in the name indicates that the package originates from an organization within the npm registry (the npm package registry) and can be understood as a namespace. In the case of Babel, you can find all of its official packages in the organization that have been published there by the Babel maintainers.

If you want to work with static type checking like Flow or TypeScript, you also need to install @babel/preset-flow or @babel/preset-typescript respectively.

You can install these via:

npm install --save-dev [package]
or:

yarn add --dev [package]

_Note: The --dev or --save-dev flag indicates that we are only dealing with a devDependency, meaning that it is only relevant for our development and that it should not be included in production code._

## Webpack

Webpack is one of the most central tools in the React ecosystem. Without it, an efficient workflow with React is almost impossible or at least a lot harder to achieve. Webpack is a module-bundler that has brought module based development (that you might know from Node.js) to the browser. It enables us to structure our application code neatly in their own files and use their dependencies via import or require(). This way, the dependencies are loaded into their own module scope and are made available within the module. In the end, only a single JavaScript file is produced (if we wanted to, we could tell Webpack to produce more). This allows us to avoid each JavaScript file in a script tag single-handedly.

<script src="..."></script>

Without bundling, we would need to import hundreds of scripts manually.

Wow! That doesn’t sound very easy, but it almost happens on its own after practicing with a few examples. Once you become familiar with it, you might ask yourself how you could ever work without a module bundler.

Webpack can be used for much more than module-bundling. It can also be taught to transpile files with JSX into JavaScript with Babel. It can copy images, stylesheets, and other assets into a build folder that can then be deployed on the server.

Webpack can do many other things. We can also work with Webpack using the command-line tools.

## ESLint

ESLint is a convenient tool for static code analysis. It helps us spot errors in our code, but it can also be used to enforce consistent rules for code style or give helpful tips on optimizing code during development. ESLint is described as a pluggable linting utility, which promises to place the most value on extensibility. You can find several useful plugins for different tools, runtime environments, and frameworks.

In most professional contexts and many open-source projects, an ESLint config has become the de-facto standard. In React projects, you will likely see eslint-plugin-react, eslint-plugin-babel, and eslint-plugin-react-hooks which have all proven themselves to be solid choices for development workflows.

## Prettier

Some love it, and some hate it. However, after working with Prettier, you may ask yourself how you could ever work without it.

Prettier is a tool that can automatically format our code according to a predefined set of rules. We can either run it on the command line, or we can install the Prettier plugin that is available for most editors and IDEs. Prettier intentionally offers no formatting options. This keeps the number of fruitless discussions on how best to format our code to a minimum and also avoids the additional discussion of the question: “which Prettier option would be best?”

## Browser plugins

Concerning your browser, it is suggested to install the React Dev Tools for Chrome and Firefox as well as the Redux Dev Tools (Chrome, Firefox). These dev tools neatly integrate with our existing dev tools and will appear as a separate tab in the browser. They offer great advantages during development.

## Variable Declarations with let and const

As opposed to var, the new variable declarations, let and const, only exist inside of the scope in which they were defined. These scopes can be a function, as was the case with var, but they can also be a loop or an if statement.

## Promises

Promises are not an exclusively new concept in JavaScript. However, with ES2015, they have been standardized and for the first time may be used without any other additional libraries. Promises allow for asynchronous development by linearizing with callbacks. A promise takes in an executor function, which again takes two arguments:

1. resolve
2. reject

An executor function can also take any of the following three states:

- pending
- fulfilled
- rejected
  Let’s go through these states one by one.

### Pending

The initial state of a promise is always pending.

### Fulfilled

If the executor function is successful, meaning resolve, the status of the promise changes from “pending” to “fulfilled”. You can then react to this state with .then(). Since resolve is passed to the executor function, the then() part will execute.

### Rejected

If the executor function is unsuccessful, meaning reject, the status of the promise changes from “pending” to “rejected”. You can then react to this state with .catch(). Since reject is passed to the executor function, all then() calls are skipped and the catch() block is executed instead.

_Note: An executor function needs to execute one of the two functions it has been passed. Otherwise, the promise will be stuck in an “unfulfilled” state. This can lead to unexpected and incorrect behavior, and can even cause memory leaks within an application._

## JSX

At first glance, JSX does not look very different from HTML or XML. As in XML or in XHTML, every opening element also needs to have a matching closing element (</div>) or has to be self-closing (<img/>). In contrast to XML and XTHML though, JSX can include JavaScript expressions, which makes it extremely powerful.
At first glance, JSX does not look very different from HTML or XML. As in XML or in XHTML, every opening element also needs to have a matching closing element (</div>) or has to be self-closing (<img/>). In contrast to XML and XTHML though, JSX can include JavaScript expressions, which makes it extremely powerful.

```
<div id="app">
  <p>A paragraph in JSX</p>
  <p>Another paragraph</p>
</div>
```

If we use this snippet of HTML in JSX, Babel will later transpile it into the following executable JavaScript:

```
React.createElement(
  'div',
  { id: 'app' },
  React.createElement('p', null, 'A paragraph in JSX'),
  React.createElement('p', null, 'Another paragraph')
);
```

Let’s go through the arguments passed to createElement() in the above snippet.

1. The first argument for the createElement() call denotes the tag name of the DOM element’s string representation or another JSX element (in this case, this would only be a function reference).
2. The second argument of the createElement() call is the props of an element. Props are comparable to HTML attributes but are much more flexible than regular HTML attributes. They are not limited to strings but can also include arrays, objects, or even other React components as their value.
3. All other arguments are the “children” of the element. In our example above, the div contains two children: two paragraphs (<p>). These, in turn, do not have any other props though (null) and only contain a text string, A paragraph in JSX and Another paragraph as their children.

If an expression instead of a string should be used inside our props, we should use curly brackets ({ and }). These indicate to React that an expression is contained within them as opposed to a plain string, which would be indicated by single or double quotes.

Note: For each object, we need to use two opening and two closing braces. The outer braces introduce the expression, whereas the inner ones represent the braces of the object contained within.

```
<User data={{ name: 'Manuel', location: 'Berlin' }} />
```

Similarly, array literals also need to be included within a set of braces. The outer one represents the expression and the inner brackets denotes the array.

```
<List items={[1, 2, 3, 4, 5]} />
```

# Rendering of Elements

React elements are the smallest building blocks in a React application. They describe what will be rendered on the screen.
Although they sound similar to DOM elements, they differ in one important point: React elements are only simple objects and thus, they are easy to create and highly efficient. Calling React.createElement() to create a React element does not trigger a DOM operation.
_Note: React elements are often confused with React components and are used interchangeably. This is incorrect. Elements make up the building blocks of components._

### How to render a React element?

We already know how we can create a React element. JSX allows us to save many lines of code by avoiding lengthy React.createElement() calls. But how do we render an element to the screen, i.e., show it in the browser?

To achieve this, we are using the render() method of ReactDOM. Additionally, we need a root node or a mount node to render a React element. This node works as a placeholder and informs React where the element should be rendered to. Theoretically, there can be many different root nodes in the HTML document. React controls these independently and keeps track of the different mount nodes. So instead of having one large React application, you could easily choose to have many smaller (or larger) apps in a single HTML document. In most situations, we’ll only need a single root node for our React application.

But let’s address an important question: how do we render a React element? First, we’ll pass the element we want to render as the first argument to ReactDOM.render() and then pass the root node as the second argument, which is the DOM node that the element will be rendered into.

### Reconciliation process

Remember, React elements are immutable, meaning that they do not change. Once the element has been created, it represents a particular state in the user interface. The official React documentation metaphorically speaks of a single frame in a film. If we wanted to update the user interface of our application, we would need to create a new React element with the updated and changed data. Don’t worry, it sounds more complex than it actually is!

React is clever enough to figure out which parts of an application have changed and will only update the parts that have actually been updated. React elements and their children will be compared to the previous version and invoke a DOM operation if a change is present. If used correctly, React’s reconciliation process can drastically improve the performance of our application because regular DOM updates are very costly and negatively impact performance. Depending on the changes in the specific React element, you might not even need to update a full DOM element every time, and often only a few attributes need to change.

## The Two Types of React Components

Components are relatively easy to explain. They allow us to de-construct complex user interfaces into multiple parts. Ideally, these parts are reusable, isolated, and self-contained. They can deal with any input from the outside and describe what will be rendered on the screen by whatever they define in the render() method.

We can cluster components into two different versions:

1. Function components, which are expressed in the form of a function.
2. Class components, which build upon the newly introduced ES2015 classes.

Until recently, the term stateless functional component was prevalent because the state could only be managed in class components before the introduction of React Hooks. From React 16.8.0 onwards, the state is managed using Hooks.

### Function components

The simplest way to define a React component is through a function component. You might have guessed it, function components are just regular JavaScript functions:

```
function Hello(props) {
     return <div>Hello {props.name}</div>;
}
```

To be classified as a valid React component, the function has to fulfill two criteria:

1. It has to either return an explicit null (undefined is not allowed) or a valid React.element (in the form of JSX).
2. It receives a props object.

### Class components

The second method of defining a React component is through class components. These are based upon the ES2015 classes and extend React.Component or React.PureComponent. We will look at PureComponent soon. Class components have at least one method named render():

```
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

One big pitfall to look out for is that function components take in their props as function arguments. Class components on the other hand, cannot take in arguments and can only access their props via the instance method this.props.

## Component Composition: Multiple Components in One

It is important to note that a component can only ever return one root element. This can be any of the following:

1. A single React element:
   <Hello name="Manuel" />

2. Nested form - as long as only a single element is on the outer layer:
   <Parent>
   <Child />
   </Parent>

3. A DOM element - which in turn can also be nested and include other elements:

<div>…</div>

4. Self–closing:
   <img src="logo.jpg" alt="Bild: Logo" />

5. or simply:
   null;
   Note: A root element can never be undefined.

Furthermore, since React 16.0.0 we are also allowed to return:

1. An array that contains valid return values:
   [<div key="1">Hello</div>, <Hello key="2" name="Manuel" />];

2. A simple string:
   'Hello World';

3. A Fragment - a special component that does not appear in the rendered output and can act as a container if we otherwise violated the rule of only ever returning one root element:

```
<React.Fragment>
   <li>1</li>
   <li>2</li>
   <li>3</li>
</React.Fragment>
```

Note: Using transpiling with Babel version 7, fragments can also be expressed in their short form, which contains an empty opening and closing element:

```
<>
  <li>1</li>
  <li>1</li>
  <li>1</li>
<>
```

## Pure functions

Functions that do not modify their input and do not have any external dependencies are commonly referred to as pure functions in functional programming. The reasoning for this is relatively simple: if anything changes outside of the function, the function itself should not depend on the changes, as its functionality is closed in itself and is well encapsulated, thus being free of side effects. Therefore, all important parameters are passed to the function resulting in the same output with the same input each time.

In other words, it does not matter which variables change their value outside of the function or how often other functions are called elsewhere. If a pure function receives the same parameters as before, it will result in the same output each time.

React is an extremely liberal library. It does not enforce much and leaves a great deal of freedom for its developers to choose how they make components. However, there is one key point, and React takes this quite seriously: Components and their relation to props must behave in the same way as pure functions. If the same props are passed, the same output must be generated.

Note: If you ignore this guideline, React might behave strangely, and we might have to deal with unexpected and undesirable side effects.

```
function pureSum(number1, number2) {
  return number1 + number2;
}

for(var i = 1 ; i <= 10; i+=1) {
  console.log(pureSum(10, 20));
}
```

### non-pure function

function impureCalculation(number) {
return number + window.outerWidth;
}
This function is no longer pure. At the moment, my browser’s window size is 1920 pixels wide. If I call this function with the value 10 as the argument, I will get the output of 1930 pixels. If the window size is decreased to 1280 pixels and the function is called again with the same argument of 10, I will receive a different result, that is 1290. Hence, this is not a pure function.

```
var car = { speed: 0, seats: 5 };

function accelerate(car) {
  car.speed += 1;
  return car;
}

console.log(accelerate(car));
console.log(accelerate(car));
```

## STATE AND LIFECYCLE

https://www.educative.io/courses/react-beginner-to-advanced/introduction

State inside a class component can be accessed with the instance property this.state. However, it is encapsulated in the component, and neither parent nor child components can access it.

To define a component’s initial state, we can select from three ways. Two of these are relatively simple. The third is a little more advanced. We’re going to cover the latter when we learn about the lifecycle method getDerivedStateFromProps().

The initial state can be defined by setting this.state. We can do this with the constructor of a class component

This can also be done by defining the state as an ES2017 class property. This is much shorter but still requires the Babel plugin @babel/plugin-proposal-class-properties (pre-Babel 7: babel-plugintransform- class-properties)

```
class MyComponent extends React.Component {
  state = {
    counter: this.props.counter,
  };
  render() {
    // ...
  }
}
```

To change state within components, React offers a new method for use inside of class components:

this.setState(updatedState);
Whenever the state is supposed to change within the component, this.setState() should be used to achieve this. By calling this.setState(), React understands that it needs to execute lifecycle methods (for example componentDidUpdate()) and thus re-render the component. If we were to change state directly, for example, by using this.state.counter = 1;, nothing would happen initially as the render process would not be triggered. React would not know about its state change.

The this.setState() method might look a little complex at the start. This is also because the old state is not simply replaced by a new state, triggering a re-render, but because many other things take place behind the scenes. Let’s take a look at it step by step.

The function itself can take two different types of arguments:

The first being an object containing the new or updated state properties.
The second being an updater function that returns an object or null if nothing should change.
If you happen to have the same property name in your object as you do in the state, the state value will be overwritten while all other properties will remain the same. To reset properties in the state, their values need to be explicitly set to null or undefined. The new state that is being passed is thus never replaced but merged with the existing state.

## Adding a new property to state

Let us have another look at our example from the previous lesson in which we defined the state with a counter property whose initial value was 0. Assuming that we want to change this state and add another date property to pass the current date, we can construct the new object:

this.setState({
date: new Date(),
});
If an updater function was used instead, our function call would look like this:

this.setState(() => {
return {
date: new Date(),
};
});
Or even shorter:

this.setState(() => ({
date: new Date(),
});
Finally, our component contains the new state:

{
counter: 0,
date: new Date(),
}

## The Combination of state and props

### Why combine state and props?

Components process props and stateful components manage their own local state. However, there is a lot more to discover. Only the combination of many different components makes React as powerful as it is for user interface development. For example, a component can have its own state and also pass it to child components via props.

### Smart and dumb components

The separation of business and layout components is often referred to by two different terms:

1. Smart components (business logic)
2. Dumb components (layout)

Smart components should not be tied to the layout of the user interface at all, whereas dumb components should be free of any logic or side effects. Dumb components should only focus on the plain display of static values.
