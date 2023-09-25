import React from "react";
import { useCounter } from "./CounterContext";

const One = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      One
      <p>count one : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default One;
