import { useEffect, useState, useRef } from "react";

const Previousvalue = () => {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(null);

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  const previosValue = previousCountRef.current;

  function decrement() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>previous value: {previosValue}</p>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Previousvalue;
