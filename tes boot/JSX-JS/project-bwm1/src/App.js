import "./App.css";
import "./components/fil.css";
// import component
import Navb from "./components/Nav";
import Cont from "./components/Main";


function App() {
  return (
    <div>
      <Navb fluid />
      <Cont/>
    </div>
  );
}

export default App;
