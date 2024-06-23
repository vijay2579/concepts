import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect function invoked", count);
  }, [count]);

  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
