import './App.css';
import {Route, Routes} from "react-router-dom";
import { useEffect, useState } from 'react';
import CardsContainer from './components/CardsContainer';
import DeckBuilder from './components/DeckBuilder';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/login"
import SignUp from './components/SignupForm';
import SignOut from './components/SignOut';


function App() {

  const [pokemonCards, setPokemonCards] = useState([])
  const [randomPage, setRandomPage] = useState(getRandomInt)

  function getRandomInt() {
    return Math.floor(Math.random() * 159);
  }

  useEffect(()=>{
    fetch(`https://api.pokemontcg.io/v2/cards?page=${randomPage}&pageSize=100`,{
      headers:{"X-Api-Key":"bb77e11f-41e0-469f-b7cd-178f48bbf1d2"}
    })
    .then((r)=>r.json())
    .then((data)=>{
      setPokemonCards(data.data)
    })
  }, [randomPage])

  function handleSearchSubmit (searchText) {
    
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchText}*`,{
      headers:{"X-Api-Key":"bb77e11f-41e0-469f-b7cd-178f48bbf1d2"}
    })
    .then((r)=>r.json())
    .then((data)=>{
      setPokemonCards(data.data)
    })
  }

  function handleCardsClick () {
    setRandomPage(getRandomInt)
  }


  return (
      <div>
        <NavBar onHandleCardsClick={handleCardsClick}/>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/CardsContainer" element={<CardsContainer pokemonCards={pokemonCards} onHandleSubmit={handleSearchSubmit}/>}></Route>
          <Route path="/DeckBuilder" element={<DeckBuilder />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element= {<SignUp />}></Route>
          <Route path="/SignOut" element= {<SignOut />}></Route>
        </Routes>
      
      </div>
  );
}

export default App;
