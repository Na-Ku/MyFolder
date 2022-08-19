import logo from './logo.svg';
import './App.css';
import FirstButton  from './componen/firstButton';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xixixixigti <code>src/App.js</code> and save to reloa & halo cuy.
        </p>

        <FirstButton />
      </header>
    </div>
  );
}

export default App;
