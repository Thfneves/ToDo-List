import React from "react";
import "../components/status.scss";
import Lixo from "../components/lixo.svg";
import Editar from "../components/editar.svg";
import { useState } from "react";

const Todo = ({ todo, removeTodo }) => {
  const [valor, setValor] = useState("");
  const handleChange = (event) => {
    setValor(event.target.incvalue);
  };
  console.log("TODO", todo);

  return (
    <div className="todo">
      <div className="content">
        <p>{todo.title}</p>
      </div>

      <select className="statuus" onChange={handleChange}>
        <option type="text" value="Verde">
          Verde
        </option>

        <option type="text" value="Laranha">
          Laranja
        </option>

        <option type="text" value="Vermelho">
          Vermelho
        </option>
      </select>
      <div className="desespero">
        <input className="checkbox" type="checkbox"></input>
        <button className="complete"> </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          {" "}
          <img src={Lixo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
