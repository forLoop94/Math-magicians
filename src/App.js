import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quote from './pages/Quote';
import Home from './pages/Home';

const App = () => (
  <>
    <nav className="flex">
      <h1>Math Magicians</h1>
      <ul className="flex">
        <li>
          <Link className="links" to="/">Home |</Link>
        </li>
        <li>
          <Link className="links" to="/calculator">Calculator |</Link>
        </li>
        <li>
          <Link className="links" to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route
        path="/calculator"
        element={(
          <main className="flex">
            <p>Lets do some math!</p>
            <div>
              <Calculator />
            </div>
          </main>
        )}
      />
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
