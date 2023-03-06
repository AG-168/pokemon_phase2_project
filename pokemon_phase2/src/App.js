import './App.css';
import CardsContainer from './components/CardsContainer';
import DeckBuilder from './components/DeckBuilder';
import NavBar from "./components/NavBar"
import Home from "./components/Home"



function App() {
  return (
    <div>
      <header className="App-header">
      </header>
      <div>
        <nav>
        <NavBar/>
        </nav>
        <Home />
        <CardsContainer/>
        <DeckBuilder/>
      </div>
    </div>
  );
}

export default App;
