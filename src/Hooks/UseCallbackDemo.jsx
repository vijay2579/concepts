import React, { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Tests");
  const [items, setItems] = useState([]);
  const lists = useCallback(() => {
    console.log("lists invoked");
    return [count, count + 1, count + 2];
  }, []);
  setItems(lists());

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <h1> Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
