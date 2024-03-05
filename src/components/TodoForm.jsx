import React, { useState } from "react";
import "../components/Todo.scss";
import { Description } from "@mui/icons-material";
const TodoForm = ({ addTodo }) => {
  //Aqui estou criando a lista de tarefas com uma categoria para o titulo que sera salvo.
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  // esses consts vazios sao preenchidos pelo input. depois sera criada uma nova const para alocar as informacoes dessa input
  const handleSubmit = (e) => {
    e.preventDefault();
    //  handlesubmit-> cuida do submit do formulario. PreventDefault->
    if (!value) return;
    addTodo(value, category, status);
    setValue("");
    setCategory("");
    setStatus("");
  };
  const handleChange = (event) => {
    // atualizacao
    console.log("chamou"); // att
    console.log(event.target.value); // att
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          placeholder="Digite o titulo"
          value={value}
          onChange={(e) => setValue(e.target.value)}

          // onchange ativa um evento que, ao preencher o input, o setvalue, dessa maneira criamos duas
          //diretrizes que sao preenchidas com o usuario, o value e o category. apos criar essas funcoes
          // vamos na linha 10 e informamos isso ao console.log, dessa forma as informacoes ficaram no banco de dados da pagina.
        />
        <select>
          <option type="text" value="verde" onChange={handleChange}>
            Verde
          </option>

          <option type="text" value="Laranha" onChange={handleChange}>
            Laranja
          </option>

          <option type="text" value="Vermelho" onChange={handleChange}>
            Vermelho
          </option>
        </select>
        <button className="criar-tarefa" type="submit">
          {" "}
          Incluir
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
