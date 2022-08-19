import logo from './logo.svg';
import './App.css';
import FirstButton  from './componen/firstButton';
import Navbar from './componen/Navbar';
import Main from './componen/Main';
import Footer from './componen/Footer';

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Navbar />

        <img src={logo} className="App-logo" alt="logo" />

        <Main name="Fajar"/>
        <p>
          Xixixixigti <code>src/App.js</code> and save to reloa & halo cuy.
        </p>

        <FirstButton />

        <Footer />
      </header>
    </div>
  );
}

export default App;
