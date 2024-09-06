React is arguably the most popular JavaScript library for building user interfaces and one reason for this is its unopinionated nature. Whether you choose to see React as a framework or library, one thing that can be agreed on is its hands-off approach to how developers should build react applications, which gives developers and developer teams the freedom to decide how they want their applications to be made. After working on different React applications with different teams and studying other React applications built, you notice some common design patterns.

In this article, we will be looking at three popular design patterns for building React applications.

1. Presentational and Container Component Pattern
   In this pattern, components are divided into:

Presentation Components: These are components that are responsible for how the UI looks. They don’t have any dependencies with any part of the application and are used to display data. An example is a list:
Copy
const ItemsList = (props) => {
return (
<ul>
{props.items.map((item) => (
<li key={item.id}>
<a href={item.url}>{item.name}</a>
</li>
))}
</ul>
);
};
In the example above, our ItemsList component is only responsible for displaying the data passed as props on the User interface. Presentational components are also called Stateless functional components but can also be written as class components and can contain state that relates to the UI

Copy
class TextInput extends React.Component {
constructor(props) {
super(props);
this.state = {
value: ""
};
}
render() {
return (
<input
value={this.state.value}
onChange={(event) => this.setState({ value: event.target.value })}
/>
);
}
}
In the example above, we’ve created a Presentational class component, TextInput, responsible for managing its state.

Container Components: Unlike presentational components, Container components are more responsible for how things work. They are usually class components that contain lifecycle methods and Presentational components. It is also where data fetching happens.
Copy
class TvShowsContainer extends React.Component {
constructor(props) {
super(props);
this.state = {
shows: [],
loading: false,
error: ""
};
}
componentDidMount() {
this.setState({ loading: true, error: "" });
fetch("https://api.tvmaze.com/schedule/web?date=2020-05-29")
.then((res) => res.json())
.then((data) => this.setState({ loading: false, shows: data }))
.catch((error) =>
this.setState({ loading: false, error: error.message || error })
);
}
render() {
const { loading, error, shows } = this.state;
return (
<div>
<h1> Tv Shows </h1>
{loading && <p>Loading...</p>}
{!loading && shows && <ItemsList items={shows} />}
{!loading && error && <p>{error}</p>}
</div>
);
}
}
We’ve created a TvShowsContainer component that fetches data from an API when the component mounts in the example above. It also passes that data to the presentational component ItemsList we created earlier. The advantage of this pattern is the separation of concerns and component reusability. Other Container components can reuse the ItemList presentational component to display data since it isn’t tightly coupled with the TvShowsListContainer.

2. Provider Pattern
   One major problem faced by React developers is Prop drilling. Prop drilling is a scenario in which data(props) is passed down to different components until it gets to the component where the prop is needed. While prop-drilling isn’t bad, it becomes a problem when unrelated components share data which brings us to the Provider pattern. The Provider pattern allows us to store data in a central location, e.g. React Context object and the Redux store. The Context Provider/Store can then pass this data to any component that needs it directly without drilling props.

Imagine implementing dark mode for a web app and making unrelated components respond to a theme change triggered by a different component. We can achieve that using the Provider pattern. We create a React context object for storing the value of the theme.

Copy
import { createContext } from "react";
const ThemeContext = createContext({
theme: "light",
setTheme: () => {}
});
export default ThemeContext;
In the App.js file, we wrap imported components with ThemeContext.Provider. This gives the different components, and their children access to the Context object created

Copy
import React, { useState, useMemo } from "react";
import Header from "./Header";
import Main from "./Main";
import ThemeContext from "./context";
import "./styles.css";
export default function App() {
const [theme, setTheme] = useState("");
const value = useMemo(() => ({ theme, setTheme }), [theme]);
return (
<ThemeContext.Provider value={value}>
<div className="container">
<Header />
<Main />
</div>
</ThemeContext.Provider>
);
}
By default, the ThemeContext is stateless and can’t be updated. To solve this, we can connect the ThemeContext to a state and provide an update function in the ThemeContext to modify the state.

To access ThemeContext in the components, we can make use of the useContext hook introduced in React 16.9

Copy
import { useContext } from "react";
import ThemeContext from "./context";
const Header = () => {
const { theme, setTheme } = useContext(ThemeContext);
const toggleTheme = () => {
if (theme === "dark") {
setTheme("");
return;
}
setTheme("dark");
return;
};
return (
<header className={theme === "dark" && "dark"}>
<h1> Tv Shows </h1>
<button onClick={toggleTheme}>Toggle Theme</button>
</header>
);
};
export default Header;
import { useContext } from "react";
import ThemeContext from "./context";
const Main = () => {
const { theme } = useContext(ThemeContext);
return (
<main className={theme === "dark" && "dark"}>
<h2>
{" "}
{theme === "dark" ? "Dark theme enabled" : "Light theme enabled"}
</h2>
</main>
);
};
export default Main;
While Context makes it easier to pass data among components, it is advised to use this approach sparingly because it makes component reuse difficult. You can access the working app of the example above here. The Provider pattern is used in React Router and React-Redux.

3. Compound Components Pattern
   Compound components are components that share a state and work together to achieve a common goal. An example is the <select> and <option> HTML element. When combined, they create a drop-down menu, but they don’t achieve much on their own.

The Compound Components pattern is used in popular React UI libraries, e.g. Ant Design and Material UI. Below is an implementation of the Menu component in Material UI

Copy
import \* as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function MaterialMenu() {
return (
<div>
<Button> Menu </Button>
<Menu>
<MenuItem>Profile</MenuItem>
<MenuItem>My account</MenuItem>
<MenuItem>Logout</MenuItem>
</Menu>
</div>
);
}
Without compound components, we will have had to pass props to the parent component, and then the parent component passes the data down to child components

Copy

<Menu items={['Profile','My account', 'Logout']} />
The above looks simple, but we start having problems passing more props down to the child component. For example, imagine we wanted a default selected menu item

Copy

<Menu items={['Profile','My account', 'Logout']} defaultSelected={1} />
As more requirements come in, the component starts becoming messy and unusable. The compound component pattern provides a cleaner way of achieving this.

There are two ways to build a React component using the compound component pattern approach:

React.cloneElement
React Context
I’ll be using the React Context approach for the example below

Copy
import {
createContext,
useState,
useCallback,
useMemo,
useContext
} from "react";
import "./styles.css";
const MenuContext = createContext();
const Menu = ({ children, defaultSelected }) => {
const [selectedItem, setSelectedItem] = useState(defaultSelected);
const toggleSelectedItem = useCallback(
(item) => {
if (item !== selectedItem) {
setSelectedItem(item);
return;
}
selectedItem("");
},
[selectedItem, setSelectedItem]
);
const value = useMemo(
() => ({
toggleSelectedItem,
selectedItem
}),
[toggleSelectedItem, selectedItem]
);
return (
<MenuContext.Provider value={value}>
<menu className="menu">{children}</menu>
</MenuContext.Provider>
);
};
We’ve created a context object, MenuContext, for the Menu component using the createContext function provided by the React Context API. This will hold the shared state for the Menu and MenuItem components. We’ve also created a state for a selected menu item. This will allow us to update the context similar to what we did in the Provider Pattern since the Context API is stateless by design.

The next step is building the MenuItem Component.

Copy
const useMenuContext = () => {
const context = useContext(MenuContext);
if (!context) {
throw new Error(
"Menu item component cannot be used outside the Menu component."
);
}
return context;
};
const MenuItem = ({ value, children }) => {
const { toggleSelectedItem, selectedItem } = useMenuContext();
return (
<button
onClick={() => toggleSelectedItem(value)}
id={`${value}-menu-item`}
className={`menu__item ${selectedItem === value && "active"}`} >
{children}
</button>
);
};
The first thing done here is creating a custom hook useMenuContext for checking if the MenuItem is used outside the Menu component and throwing an error if that happens. After that, we create our MenuItem utilising the shared state with the Menu component to detect what style to apply to a selected MenuItem and change the selected item when a menu item is clicked.

To wrap up, we connect these components together in the App component

Copy
export default function App() {
return (
<Menu defaultSelected="My account">
<MenuItem value="Profile">Profile</MenuItem>
<MenuItem value="My account">My account</MenuItem>
<MenuItem value="Logout">Logout</MenuItem>
</Menu>
);
}

_Resource:_
https://blog.openreplay.com/3-react-component-design-patterns-you-should-know-about
