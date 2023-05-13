import './App.css';
import Calculator from './components/calculator';
import Quotes from './components/fetchQuotes';

function App() {
  return (
    <div className="calApp">
      <Calculator />
      <Quotes />
    </div>

  );
}
export default App;
