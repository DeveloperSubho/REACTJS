import "./App.css";
import HelloWorld from "./Components/HelloWorld";
import UseContextExample from "./Components/ReactHooks/UseContextExample";
import UseEffectExample from "./Components/ReactHooks/UseEffectExample";
import UseStateExample from "./Components/ReactHooks/UseStateExample";
import RenderingExample from "./Components/Rendering/RenderingExample";
import { AdminAccess } from "./Components/StateAndLifeCycle/AdminAccess";
import DateTime from "./Components/StateAndLifeCycle/DateTime";
import ParentComponent from "./Components/StateAndLifeCycle/ParentComponent";
import StateManagement from "./Components/StateAndLifeCycle/StateManagement";

function App() {
  return (
    <div className="App">
      <h1>Hello World App</h1>
      <HelloWorld />
      <RenderingExample />
      <StateManagement counter={0} />
      <AdminAccess />
      <DateTime />
      <ParentComponent />
      <UseStateExample />
      <UseEffectExample />
      <UseContextExample />
    </div>
  );
}

export default App;
