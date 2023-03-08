import React, {useState, useEffect} from "react";
import Userfront from "@userfront/react";


function DeckBuilder () {

    const [userPokemon, setUserPokemon] =useState([])

    useEffect(()=>{
        fetch(`https://api.userfront.com/v0/self`, {
        method: "GET",
        headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Userfront.accessToken()}`}
    })
    .then((res)=>res.json())
    .then((data)=>{
        setUserPokemon(data.data)
    })
    }, [])


    return (
        <div>
            
        </div>
        )
}

export default DeckBuilder