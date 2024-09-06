import React, { useState } from "react";

/**
 * class HelloWorld extends React.Component
 * Here, we are giving a name to a child component. 
 * We have named our first component HelloWorld. 
 * We can name our components anything we like, but there is one rule to keep in mind: 
 * React components start with a capital letter. 
 * Using helloWorld as a component name would not be valid. The component name, HELLOWORLD, however, would be.
 * 
 * extends React.Component
 * class HelloWorld extends React.Component
 * With this snippet, we extend the internal React class React.Component. 
 * This transforms our own class into a component that we can use in React. 
 * In addition to React.Component, there is also a React.PureComponent and a Functional component. 
 * The PureComponent function is simply a JavaScript function that follows a particular pattern. 
 * We will look at PureComponent and the Functional component later.
 * 
 * render()
 * So far, our component only contains the obligatory render() method. 
 * This method is necessary to inform React how the component is displayed — we say it is rendered in the React world. 
 * A component must have a return value. This value can either be an explicit null value to show nothing (but not undefined), 
 * another React element, or a string or array (if using Version 16+).
 * 
 * In terms of an array, the array can include strings, numbers, React elements, or null as values. 
 * The render() method declaratively describes the current state of our user interface.
 * The browser will display everything that comes after return in our render method.
 * 
 * Even if the structure of our JavaScript classes is entirely up to us, 
 * there is a common pattern to put our render() method at the end of all our methods. 
 * This is not mandatory of course, but it aids readability. 
 * Many renowned engineers in the React scene advocate for this guideline too. For example, the code guidelines by AirBnB include this rule.
 * 
 * React.createElement()
 * React.createElement('div', { id: 'hello-world' }, 'Hello World');
 * The render() method of a React component returns a React element in most cases. 
 * React elements are the smallest but most significant building blocks in a React application 
 * and describe what a user will see on their screen. 
 * Apart from React.cloneElement() and React.isValidElement(), React.createElement() has been one of the only 3 top-level API methods for a long time. 
 * While a few other methods have been added, they are mainly for performance optimizations.
 * 
 * The createElement() method expects 1-n parameters:
 * Type - This can be an HTML element as a string (e.g… div , span, or p) or other React components.
 * 
 * React components.
 *      props - These are read-only property objects of a component. The name is derived from the word “properties.”
 *      As many child elements you wish to put in. These can be React elements themselves, arrays, functions, or simply plain text. However, a component does not necessarily need to contain other child elements.
 * 
 * Let’s take a look at our example again. 
 * The return value of the render() method indicates that it will display an element of type div, 
 * containing the ID hello-world and the child element (a text node in this case) containing “Hello World.”
 * ReactDOM.render(Element, Container);
 */
class HelloWorld extends React.Component {
    render() {
        return React.createElement('div', { id: 'hello-world' }, 'Hello World');
    }
}

export default HelloWorld;