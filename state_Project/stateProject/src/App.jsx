import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);
  // const [remove, setCRemove] = useState(count);
  // const create = 10;
  const addvalue = () => {
    setCount(count + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>React Project : {count}</h1>

      <button onClick={addvalue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  );
};

export default App;
