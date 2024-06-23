import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../api/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addText = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addText()}>Add</button>
    </>
  );
}

export default AddTodo;
