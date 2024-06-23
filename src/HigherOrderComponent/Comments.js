import React from "react";
import Incrementer from "./Incrementer";
function Comments({ increment, count }) {
  return (
    <>
      Total comments: {count}
      <button onClick={() => increment()}>Increment Comments</button>
    </>
  );
}
export default Incrementer(Comments, 10);
