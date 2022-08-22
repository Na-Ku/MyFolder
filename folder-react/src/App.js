import logo from './logo.svg';
import './App.css';
import FirstButton  from './componen/firstButton';
import Navbar from './componen/Navbar';
import Main from './componen/Main';
import Footer from './componen/Footer';


function App() {

  const Paraf = () => {
    return (
      <div>
        <i>mantapppu!!</i>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, numquam!</p>
      </div>
    );
  };
  const NavHead = "Kolom Navigasi";
  const klik = () => {
    return alert('kimak kau');
  }

  return (
    <div className="App">
      <header className="App-header">

        <Navbar NavHead={NavHead}/>

        <img src={logo} className="App-logo" alt="logo" />

        {/* <Main name="Fajar"/>
        <Main name="Aleks"/>
        <Main name="Ruben"/> */}
        <p>
          Xixixixigti <code>src/App.js</code> and save to reloa & halo cuy.
        </p>

        <FirstButton klik={klik} />

        <Footer Paraf={Paraf}/>
      </header>

      <div className='container'>
        <Main Parafg = {Element }  />
      </div>
    </div>

  );
}

export default App;
