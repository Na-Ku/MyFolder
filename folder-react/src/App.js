import './App.css';
import React, {useState, useEffect} from 'react';
// import Intro from './components/intro';

const App = () => {

  const [getValue, setValue] = useState(0)
  const [getNewValue, setNewValue] = useState(" ")

  useEffect ( () => {
    if (getValue > 0 && getValue < 5) {
      setNewValue("Baru")
    } else if (getValue >= 5) {
      setNewValue("Baru Lagi")
    } else {
      setNewValue("Kosong")
    }
  }, [getValue] )

  return (
      <div>
        <h5>Nilai Baru: {getNewValue}</h5>
        <h3>Jumlah Sekarang adalah : {getValue} </h3>
        <button onClick={() => setValue((prev) => prev + 1  ) } >Penambahan</button>
        <button onClick={() => setValue((prev) => prev  - 1  ) } >Pengurangan</button>

        {/*<Intro jasa="Masak" />
        <Intro jasa="Makan" /> */}
        
      </div>
  );
}

export default App;