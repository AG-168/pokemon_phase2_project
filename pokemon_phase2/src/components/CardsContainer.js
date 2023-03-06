import React, {useEffect,useState} from "react";

function CardsContainer () {
    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
        fetch(`https://api.pokemontcg.io/v2/cards/`)
        .then(resp => resp.json())
        .then(data => setPokemon(data))
    },[])

    console.log(pokemon)

    return ("CardsContainer")
}

export default CardsContainer