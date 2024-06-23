import React, { useState } from "react";

export default function NormalComponent() {
  const [name, setName] = useState("Test");
  console.log(`Normal Component Called - `, name);

  return (
    <>
      <button onClick={() => setName("Test")}>
        Normal Component Click Here
      </button>
    </>
  );
}
