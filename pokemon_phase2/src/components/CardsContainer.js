import '../App.css';
import React , {useState}from "react";
import CardItem from "./CardItem";



function CardsContainer ({pokemonCards, onHandleSubmit, onHandleAddPokemon}) {

    const pokemonCard = pokemonCards?.map((pokemon)=>{
        return (<CardItem key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.images.small} onHandleAddPokemon={onHandleAddPokemon}/>)
    })

    function handleSubmit (e) {
        e.preventDefault()
        onHandleSubmit(searchText)
    }

    const [searchText, setSearchText] = useState("")

    function handleSearchInput (e) {
        setSearchText(e.target.value)
    }

    return (

        <div>
            <div id="search-form">
            <form onSubmit={handleSubmit} >
                <input type="text" id="pokemon-search" placeholder="Search Pokemon" onChange={handleSearchInput} value={searchText}/>
                <button type="submit">Search</button>
            </form> 
            </div>
            <div id="pokemon-display">
            {pokemonCard} 
            
            </div>
        </div>
       
    )
}

export default CardsContainer