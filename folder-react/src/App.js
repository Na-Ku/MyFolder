import './App.css';
import React, { useState } from 'react';
import Todo from  './Components2/Todo/Todo'


const App = () => {

  const [getValue, setValue] = useState("");
  const changeValue = () => {
    setValue("kimak kau");
  };


  return (
    <div>
      <div className="App">
        <Todo />
        <nav navValue = {getValue}>
          <h3>Ini Berikutnya:</h3>
          <p>{getValue}</p>
          <button onClick={() => changeValue()} >Klik</button>
        </nav>
      </div>
      <div className='App'>
      </div>
    </div>
  )
}

export default App;
