import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../api/todoSlice";

function TodosList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <>
              <li key={todo.id}>{todo.text}</li>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default TodosList;
