import React, { useState } from "react";
export default function Incrementer(OriginalComponent, initialCount) {
  const NewComponent = function () {
    const [count, setCount] = useState(initialCount);
    const increment = () => {
      setCount(count + 1);
    };
    return <OriginalComponent increment={increment} count={count} />;
  };
  return NewComponent;
}
