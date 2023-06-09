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
          <Link className="links" to="/home">Home |</Link>
        </li>
        <li>
          <Link className="links" to="/">Calculator |</Link>
        </li>
        <li>
          <Link className="links" to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route
        path="/"
        element={(
          <main className="flex">
            <p>Lets do some math!</p>
            <div>
              <Calculator />
            </div>
          </main>
        )}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
