import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/DisplayQuotes';
import './App.css';
import Quote from './pages/Quote';
import Home from './pages/Home';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <main>
          <DisplayQuote />
          <Calculator />
        </main>
      )}
    />
    <Route path="/home" element={<Home />} />
    <Route path="/quote" element={<Quote />} />
  </Routes>
);

export default App;
