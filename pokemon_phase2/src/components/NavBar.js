import React from "react";
import {NavLink} from "react-router-dom"

function NavBar () {
    return (
        <nav>
           <span><NavLink to="*">Home</NavLink></span>
            <NavLink to="/CardsContainer">Cards</NavLink>
            <NavLink to="/DeckBuilder">Build Your Decks</NavLink>
        </nav>
    )
}

export default NavBar