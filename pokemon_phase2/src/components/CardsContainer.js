import React from "react";
import CardItem from "./CardItem";



function CardsContainer ({pokemonCards}) {

    const pokemonCard = pokemonCards?.map((pokemon)=>{
        return (<CardItem key={pokemon.id} name={pokemon.name} image={pokemon.images.small}/>)
    })

    

    return (

        <div>
            {pokemonCard} 
            {console.log(pokemonCards)}
        </div>
       
    )
}

export default CardsContainer