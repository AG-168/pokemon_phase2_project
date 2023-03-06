import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}

export default App;
