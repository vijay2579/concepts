import React from "react";
import Incrementer from "./Incrementer";
function Likes({ increment, count }) {
  return (
    <>
      Total likes: {count}
      <button onClick={() => increment()}>Increment Likes</button>
    </>
  );
}

export default Incrementer(Likes, 5);
