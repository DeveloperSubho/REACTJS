import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

/**
 * Explanation:
 * * useEffect(() => {}, []): This hook mimics componentDidMount and componentWillUnmount.
 *                            The empty dependency array ensures it only runs once when the component mounts.
 *                            The returned function handles cleanup, similar to componentWillUnmount.
 * * useEffect(() => {}, [count]): This hook mimics componentDidUpdate for count. It runs the effect whenever count changes.
 * * useEffect(() => {}, [data]): This hook mimics componentDidUpdate for data. It runs the effect whenever data changes.
 * * useMemo(() => ..., [count]): This hook is used for memoizing expensive calculations. It only recomputes the memoized value when count changes.
 *
 * * createContext and useContext: We create a context with createContext and use it in LifecycleComponent with useContext.
 *                                 This allows us to share state between components without prop drilling.
 * * MyProvider: This component provides the context value to its children. It wraps the LifecycleComponent to provide the context.
 * * Context Value Updates: useEffect with contextValue dependency ensures that we log or handle side effects whenever the context value changes.
 * * Updating Context Value: Added a button to update the context value to demonstrate how useContext works in functional components.
 *
 * By including useContext, we enhance the component to share state globally in a more manageable way.
 *
 * Using these hooks, you can manage side effects and lifecycle events in functional components effectively.
 */

// Create a Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState("Initial Context Value");

  return (
    <MyContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </MyContext.Provider>
  );
};

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Use context
  const { contextValue, setContextValue } = useContext(MyContext);

  // Mimic componentDidMount
  useEffect(() => {
    console.log("Component did mount");

    // Fetch data as an example
    fetchData();

    // Clean up on unmount
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array ensures this runs once on mount and clean up on unmount

  // Mimic componentDidUpdate for count
  useEffect(() => {
    if (count !== 0) {
      console.log("Count updated:", count);
    }
  }, [count]); // Dependency array with count triggers effect on count update

  // Mimic componentDidUpdate for data
  useEffect(() => {
    if (data !== null) {
      console.log("Data updated:", data);
    }
  }, [data]); // Dependency array with data triggers effect on data update

  // Mimic componentDidUpdate for contextValue
  useEffect(() => {
    console.log("Context value updated:", contextValue);
  }, [contextValue]); // Dependency array with contextValue triggers effect on contextValue update

  // Function to fetch data
  const fetchData = async () => {
    // Simulate fetching data
    const fetchedData = await new Promise((resolve) =>
      setTimeout(() => resolve("Fetched Data"), 1000)
    );
    setData(fetchedData);
  };

  // Example of useMemo
  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]); // Only recomputes memoized value when count changes

  return (
    <div>
      <h1>React Functional Component with Lifecycle Methods</h1>
      <p>Count: {count}</p>
      <p>Data: {data}</p>
      <p>Memoized Value (count * 2): {memoizedValue}</p>
      <p>Context Value: {contextValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setContextValue("Updated Context Value")}>
        Update Context Value
      </button>
    </div>
  );
};

// Wrapping the LifecycleComponent with MyProvider
const LifecycleComponentApp = () => (
  <MyProvider>
    <LifecycleComponent />
  </MyProvider>
);

export default LifecycleComponentApp;
