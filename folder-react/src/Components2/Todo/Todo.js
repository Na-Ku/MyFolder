import { useState } from 'react'
import './Todo.css'
import TodoList from '../TodoList/TodoList'
import TodoCreate from '../Todo-create/TodoCreate'

const Todo = () => {
    const [getListTodo, setListTodo] = useState ( [
            {id: 1, title: "Eat"},
            {id: 2, title: "Sleep"},
            {id: 3, title: "Code"},
        ] ) 

    const eventCreateTodo = (todo) => {
        setListTodo(getListTodo.concat(todo))
        // console.log(ListTodo);
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>  
            <TodoList dataTodos = {getListTodo} />
        </div>
    )
}

export default Todo;