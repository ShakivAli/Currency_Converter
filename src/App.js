import './App.css';
import Converter from './components/converter/converter';

function App() {
  return (
    <div className="App">
      <h1>Forex Calculator</h1>
      <div className='wrapper'>
        <Converter/>
      </div>
      <div className='footer'>
        <p><i>Note: If it doesn't fetch anything, please allow insecure content for this website from your browser settings.</i></p>
      </div>
    </div>
  );
}

export default App;
