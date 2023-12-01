import './App.css';
import Converter from './components/converter/converter';

function App() {
  return (
    <div className="App">
      <h1>Forex Calculator</h1>
      <div className='wrapper'>
        <Converter/>
      </div>
    </div>
  );
}

export default App;
