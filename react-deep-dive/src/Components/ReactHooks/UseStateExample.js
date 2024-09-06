import React from "react";

const UseStateExample = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  );
};

export default UseStateExample;
