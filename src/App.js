import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quotes from './components/fetchQuotes';

function App() {
  return (
    <div className="calAp">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>

    </div>

  );
}
export default App;
