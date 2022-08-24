import './Todo.css'
import TodoList from '../TodoList/TodoList'
import TodoCreate from '../Todo-create/TodoCreate'

const Todo = () => {
    const ListTodo = [
            {id: 1, title: "Eat"},
            {id: 2, title: "Sleep"},
            {id: 3, title: "Code"},
        ]

    const eventCreateTodo = (todo) => {
        ListTodo.push(todo);
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>  
            <TodoList dataTodos = {ListTodo} />
        </div>
    )
}

export default Todo;