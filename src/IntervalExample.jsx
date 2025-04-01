import React, { useState, useEffect } from "react";

const IntervalExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <h1>Count: {count}</h1>;
};

export default IntervalExample;
