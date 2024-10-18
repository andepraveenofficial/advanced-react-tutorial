import React from "react";
import CounterA from "../components/CounterA"; // Assuming CounterA exists
import CounterB from "../components/CounterB";
import { ErrorBoundary } from "../boundary/ErrorBoundary";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <p>CounterA without ErrorBoundary</p>
      <CounterA />
      <hr />
      <p>CounterB with ErrorBoundary</p>
      <ErrorBoundary>
        <CounterB />
      </ErrorBoundary>
      <hr />
    </div>
  );
};

export default Home;
