import React, { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Test");
  const list = [
    { index: 0, value: "Vijay" },
    { index: 1, value: "Santu" },
    { index: 2, value: "Nikhil" },
    { index: 3, value: "Yash" },
    { index: 4, value: "Test" },
  ];

  const selectedObj = useMemo(() => {
    console.log("Called");
    return list.filter((item) => item.index === count);
  }, [count]);
  // If we change `name` then useMemo will not be invoked, if we add `name` in dependency array and change name then useMemo will be invoked
  return (
    <>
      <h1>Selected Name is: {selectedObj && selectedObj[0].value}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
