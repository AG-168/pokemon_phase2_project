import React, {useState, useEffect} from "react";
import DeckItem from "./DeckItem";


function DeckBuilder ({userPokemon, onHandleDeleteClick}) {

    const deckDisplay = userPokemon.map((pokemon)=>{
        return <DeckItem key={pokemon.identifier} id={pokemon.identifier} image={pokemon.image} name={pokemon.name} onHandleDeleteClick={onHandleDeleteClick}/>
    })
    

    return (
        <div id="deck-display">
            {deckDisplay}
        </div>
        )
}

export default DeckBuilder