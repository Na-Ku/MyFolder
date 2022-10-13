// import { useState } from 'react'
import "./TodoCreate.css";
import { useState } from "react";

const TodoCreate = (props, { getValue }) => {
  const [getInput, setInput] = useState("");
  const Inputs = (inpt) => {
    setInput(inpt.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const isi = ({ getValue }) => {
    //   return getValue;
    //   console.log('diklik') -- ini adalah bagian untuk mentriger "title" yang ada pada variabel newTodo, dan akan digantikan dengan variabel inputan dari user yaitu const Inputs yang ada di atas.
    // };
    const newTodo = {
      id: Math.floor(Math.random() + 10) + 1,
      title: getInput,
    };
    props.onCreateTodo(newTodo);

    setInput("");
    // kegunaan dari callback ini adalah supaya ketika inputan telah dimasukkan dan kirim maka kolom inputan tersebut akan kosong kembali
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {/* <input type="text" onChange={handleInputTodo}/> */}
      <input type="text" value={getInput} onChange={Inputs} />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoCreate;
