## Why is event handling important?
The interaction between a user and the interface is a fundamental part of developing applications with complex user interfaces, especially with events.
When we click a button, something happens. When we write text into an input field, something happens. 
When we select an element from a list, something happens. 
In vanilla JavaScript, the browser provides us with the addEventListener() and removeEventListener() methods. 
In React, however, you can safely ignore them in most use cases. React provides its own system to define user interaction and does so with inline events.

These inline events resemble HTML attributes for example:
```
<button onclick="myFunction" />
```

## Defining events
React and JSX events resemble HTML attribute definitions. But there are differences. Events in React are defined with camelCase instead of lowercase, for example:

* onclick is changed to onClick
* onmouseover is now defined by onMouseOver
* ontouchstart would be written as onTouchStart

## SyntheticEvent
The first parameter passed to the event handler is not an object of type Event as could be assumed. 
Instead, React supplies its own wrapper for the native event object, named a SyntheticEvent. 
The wrapper is part of React’s event system and works as a sort of normalizing layer to ensure cross-browser compatibility. 
As opposed to some other browsers, it strictly follows the event specifications of W3C.

## preventDefault()
To prevent the browser’s standard behavior during an event, we cannot simply return false from the event handler. 
React forces us to explicitly call preventDefault(), which is another fundamental difference in the native Browser API usage. 

## Event attribute
Last but not least, let’s look at the event attribute or, in React’s case, the event prop. React uses a function reference instead of a plain string (which would be the standard in HTML) that mandates the use of curly brackets to inform JSX that a JavaScript expression is used.

This would look similar to:
```
<button onClick={validateInput}>Validate</button>
```
For comparison, this is how a similar event would look in HTML:
```
<button onclick="validateInput">Validate</button>
```
While this might seem alienating to use function references as a prop, it offers several advantages:
* We gain cross-browser compatibility basically for free!
* React neatly registers events in the background with addEventListener()
* React also safely and automatically removes events as soon as the component unmounts. How convenient!

## Scopes in Event Handlers
Usually, the use of ES2015 classes in React mandates that event handlers have to be defined as methods of the current class component. 
However, class methods are not automatically bound to the instance. Let’s unpack what this means. Initially, this will be undefined in all of our event handlers.

An onClick event is added to increment the counter by one each time the user presses a button labeled +1. 
But when the user clicks the button, instead of seeing the actual counter, they will receive the error

Why is that? The answer is scoping! Whenever we click the button in the increase() event handler, we actually operate outside of the component instance. 
This means we cannot access this.setState(), resulting in our above error. 
While it might seem annoying, it is not actually something React has thought up, but it’s actually standard behavior for ES2015 classes. 
But fear not, there are several techniques to combat this:

Method binding in the render() method
Probably the most trivial solution is to bind the method inside of the render() method. We add a .bind(this) to the reference of the class method:
```
<button onClick={this.increase.bind(this)}>+1</button>
```
The method is now invoked in the scope of the component instance, and our counter starts incrementing the count as intended. 
While you might come across this method quite a few times, it is not entirely recommended and has one obvious advantage. 
With every call of the function, a new function is created on-the-fly, which is different from the one before. 
A simple check using shouldComponentUpdate() to compare this.props.increase === prevProps.increase would yield false every single time 
and possibly even lead to a re-render of the component, even if the function has not changed at all. 
Therefore, using this method is actually considered a performance bottleneck and should be avoided.

### Method binding in the constructor
Another neater solution to bind a method to a class instance is to bind it when initializing a class in the constructor:

```
constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this);
}
```
This way, the method is only bound to the instance once, and possible checks to compare the method’s likeness would always yield true. 
Thus, expensive shouldComponentUpdate() calls can easily be avoided. However, using this method of binding the method to the class instance is not without problems either. 
If the component in question does not yet use a constructor, it will now certainly have to. 
In order to do this, we need to call the super(props) method to pass the props of the component to the React.Component parent class. 
In the end, we end up writing the name of the method twice. Once on its own, and once to define and bind its this.

Using this method allows us to avoid potential performance bottlenecks, even if it is a little bit more verbose, 
but it could still be considered somewhat messy and cumbersome. We will now look at an even easier way to bind a method to a class instance.

### Class properties
Note: To use the method we are about to explain, you need to have installed the babel plugin @babel/plugin-proposal-class-properties. 
But as most React setups already include this by default, we will assume that we can use class properties safely and without error. 
If this is not the case for some reason, event handler methods should always be bound in the constructor.

But how exactly do we bind our method via a class property? To be entirely correct, we are cheating. 
Instead of defining a real class method as shown in the above example, we define a public class property and pass it an arrow function

Problem solved!

As mentioned earlier, we define a real class method within our first example, 
whereas we assign a property within the class with the same name an arrow function as a value. 
As it is not binding its own this, we access the this of the class instance instead.

### Events outside of the component context
While you can certainly also implement native browser events in React, you should use React’s own event system whenever possible. 
It offers cross-browser compatibility, follows the W3C standard for browser events, and optimizes when possible.

From time to time, however, it is necessary to define events outside of the component context. 
Some classic examples are window.onresize and window.onscroll. React’s event system does not support global events outside of the component context, 
but if you want to define native browser events, you can do so in the componentDidMount() method. 
You should notice that whenever an event listener is added with addEventListener(), these need to be removed once you’re done with them.

The componentWillUnmount() method is the perfect place to do this. While it might seem annoying, 
global events can cause performance bottlenecks or even memory leaks if not removed properly. 
If left in, they would be added again each time a component is mounted and called multiple times.

