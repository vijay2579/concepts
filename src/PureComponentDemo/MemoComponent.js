import React from "react";
function MemoComponent({ name }) {
  console.log("Rendering component - memo Component");
  return <div>{name}</div>;
}
export default React.memo(MemoComponent); // this is important
