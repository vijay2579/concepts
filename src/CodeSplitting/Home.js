import React from "react";
export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          import("./helper").then((module) => {
            console.log(module.addition(2, 3));
          });
        }}
      >
        Addition
      </button>
    </>
  );
}
