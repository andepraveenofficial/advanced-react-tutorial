import React, { useEffect, useState } from "react";

const CounterA = () => {
  // Initialize the counter state to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 5) {
      throw new Error("App Crashed from ComponentA");
    }
  }, [count]);

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterA;
