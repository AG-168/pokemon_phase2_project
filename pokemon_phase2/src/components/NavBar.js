import React from "react";
import {NavLink} from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <NavLink to="*">Home</NavLink>
            <NavLink to="/CardsContainer">Cards</NavLink>
            <NavLink to="/DeckBuilder">Build Your Decks</NavLink>
        </nav>
    )
}

export default NavBar