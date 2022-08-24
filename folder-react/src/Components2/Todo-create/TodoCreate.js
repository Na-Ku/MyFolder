// import { useState } from 'react'
import './TodoCreate.css'

const TodoCreate = (props) => {

    // const [getInput, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() + 10) + 1,
            title: 'kimak kau'
        }

        props.onCreateTodo(newTodo);
    }

    return (
        <form className="todo-form" onSubmit = {handleSubmit}>
            {/* <input type="text" onChange={handleInputTodo}/> */}
            <input type="text"/>
            <button type="submit">add</button>
        </form>
    )
}

export default TodoCreate;