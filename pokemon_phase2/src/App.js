import './App.css';
import {Route, Routes} from "react-router-dom";
import { useEffect, useState } from 'react';
import CardsContainer from './components/CardsContainer';
import DeckBuilder from './components/DeckBuilder';
import NavBar from "./components/NavBar";
import Home from "./components/Home";




function App() {

  const [pokemonCards, setPokemonCards] = useState([])

  useEffect(()=>{
    fetch(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=100`,{
      headers:{"X-Api-Key":"bb77e11f-41e0-469f-b7cd-178f48bbf1d2"}
    })
    .then((r)=>r.json())
    .then((data)=>{
      console.log(data.data);
      setPokemonCards(data.data.sort(() => Math.random() - 0.5))
    })
  }, [])

  // function shuffleArray(arr) {
  //   arr.sort(() => Math.random() - 0.5);
  // }


  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/CardsContainer" element={<CardsContainer pokemonCards={pokemonCards}/>}></Route>
          <Route path="DeckBuilder" element={<DeckBuilder />}></Route>
        </Routes>
      
      </div>
  );
}

export default App;
