import "./App.css";
import "./components/fil.css";
// import component
import Navb from "./components/Nav";
import Cont from "./components/Main";
import Foot from "./components/footer";

function App() {
  return (
    <div>
      <Navb fluid />
      <Cont />
      <Foot />
    </div>
  );
}

export default App;
