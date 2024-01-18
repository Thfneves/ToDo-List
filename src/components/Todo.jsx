import React from "react";
import "../components/status.scss";

const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.title}</p>
      </div>
      <div className="desespero">
        <input className="checkbox" type="checkbox"></input>
        <button className="complete"> Editar</button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          {" "}
          Remover
        </button>
      </div>
    </div>
  );
};

export default Todo;
