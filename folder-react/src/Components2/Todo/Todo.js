import { useState } from "react";
import "./Todo.css";
import TodoList from "../TodoList/TodoList";
import TodoCreate from "../Todo-create/TodoCreate";

const Todo = () => {
  const [getListTodo, setListTodo] = useState([
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
    { id: 3, title: "Code" },
  ]);

  const eventCreateTodo = (todo) => {
    setListTodo(getListTodo.concat(todo));
    // console.log(ListTodo);
  };

  const [getValue, setValue] = useState("Kimak");
  const changeValue = () => {
    setValue("Who the Kimak?");
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} navValue={getValue} />
      <TodoList dataTodos={getListTodo} />
      <nav>
        <h3>Ini Berikutnya:</h3>
        <p>{getValue}</p>
        <button onClick={() => changeValue()}>Klik</button>
      </nav>
    </div>
  );
};

export default Todo;
