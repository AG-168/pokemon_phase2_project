import './App.css';
import CardsContainer from './components/CardsContainer';
import DeckBuilder from './components/DeckBuilder';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import {Route} from "react-router-dom";



function App() {
  return (
      <div>
        <nav id="NavBar">
        <NavBar/>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/CardsContainer" element={<CardsContainer/>}></Route>
          <Route path="DeckBuilder" element={<DeckBuilder />}></Route>
        </Routes>
      
      </div>
  );
}

export default App;
