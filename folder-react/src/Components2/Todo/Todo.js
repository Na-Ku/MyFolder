import './Todo.css'
import TodoList from '../TodoList/TodoList'

const Todo = () => {

    
    const List = [
            {id: 1, tittle: 'Eat'},
            {id: 2, tittle: 'Sleep'},
            {id: 3, tittle: 'Code'},
        ];

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList dataTodos = {List} />
        </div>
    )
}

export default Todo;