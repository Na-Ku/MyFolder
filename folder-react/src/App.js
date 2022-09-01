import './App.css';
import Intro from './components/intro';

const App = () => {

  return (
      <div>
        <Intro jasa="Masak" />
        <Intro jasa="Makan" />
      </div>
  );
}

export default App;