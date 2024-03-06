import "./index.scss";
import Todo from "../../components/Todo";
import { useState } from "react";
import TodoForm from "../../components/TodoForm";

function Page4() {
  const [todos, setTodos] = useState([]);
  // criamos uma funcao, que recebe um texto e uma categoria. na linha 82, e criado um const que AGRUPA TODOS TODO
  //
  const addTodo = (title, category, status) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        category,
        isCompleted: false,
        status,
      },
    ];
    //o newTodos vai atualizar a lista
    setTodos(newTodos);
  };
  //abaixo vamos criar a interacao de confirmar ou excluir a tarefa
  //primeiramente chamamos todos o Todo, apos isso criamos uma variavel nova com uma funcao filter para filtrar
  //e encontrar quais itens sao diferentes dos Id que estao na lista.
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    // todo.id for diferente do ID informado ele retorna a lista.
    //Caso tenha um todo com ID igual ele volta como nullo
    setTodos(filteredTodos);
    // setTodos usado para atualizar a lista.
  };

  //iremos criar uma tarefa de

  return (
    <div className="app">
      <div className="Situacao">
        <div className="tarefa">
          {" "}
          <h1> Tarefa</h1>
        </div>
        <div className="status">
          {" "}
          <h1> Status</h1>
        </div>
        <div className="concluido">
          {" "}
          <h1> Concluido</h1>
        </div>

        <div className="opcoes">
          {" "}
          <h1> Opcoes</h1>
        </div>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Page4;
