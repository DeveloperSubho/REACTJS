import "./App.css";
import BindExample from "./Components/Binding/BindExample";
import ClassPropertyBind from "./Components/Binding/ClassPropertyBind";
import NonBindExample from "./Components/Binding/NonBindExample";
import PreventDefaultExample from "./Components/PreventDefaultExample";
import LifecycleComponentApp from "./Components/ReactHooks/LifecycleComponent";

function App() {
  return (
    <div className="App">
      <LifecycleComponentApp />
      <PreventDefaultExample />
      <NonBindExample />
      <BindExample />
      <ClassPropertyBind />
    </div>
  );
}

export default App;
