import React from 'react'
import { useCounter } from './CounterContext';

const Two = () => {
    const { count, increment, decrement } = useCounter();
    return (
      <div>
        Two
        <p>count two : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}

export default Two