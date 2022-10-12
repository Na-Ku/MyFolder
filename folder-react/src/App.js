import "./App.css";
import Todo from "./Components2/Todo/Todo";
import TodoApp from "./Components2/TAp";
import Example from "./componen/todoListBaru/todo1";

const App = () => {
  return (
    <div>
      <div className="App">
        <Todo />
        <TodoApp />
      </div>
      <Example />
    </div>
  );
};

export default App;
