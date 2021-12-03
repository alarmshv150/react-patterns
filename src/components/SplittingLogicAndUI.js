import React, { useState } from "react";

function SplittingLogicAndUI() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Увеличить на 1</button>
      <button onClick={decrement}>Уменьшить на 1</button>
    </>
  );
}

function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };
}

export default SplittingLogicAndUI;
