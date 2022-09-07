import './App.css';
import React, {useState, useEffect} from 'react';
// import Intro from './components/intro';

const App = () => {

  const [getValue, setValue] = useState(1)

  useEffect ( () => {
    alert('halo');
  } )

  return (
      <div>

        <h3>Jumlah Sekarang adalah : {getValue} </h3>
        <button onClick={() => setValue((prev) => prev + 1  ) } >Penambahan</button>
        <button onClick={() => setValue((prev) => prev  - 1  ) } >Pengurangan</button>

        {/*<Intro jasa="Masak" />
        <Intro jasa="Makan" /> */}
        
      </div>
  );
}

export default App;