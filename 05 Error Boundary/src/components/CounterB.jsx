import React, { useState, useEffect } from "react";

const CounterB = () => {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Throw error when count reaches 5
  useEffect(() => {
    if (count === 5) {
      throw new Error("App Crashed from CounterB");
    }
  }, [count]);

  return (
    <div>
      <h1>CounterB: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterB;
