import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
const Index = () => {
  const [name, setName] = useState("");
  const { setItem, getItem, removeItem } = useLocalStorage("value");
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setItem(name)}>Set</button>
      <button onClick={() => getItem()}>Get</button>
      <button onClick={() => removeItem()}>Remove</button>
    </>
  );
};
export default Index;
