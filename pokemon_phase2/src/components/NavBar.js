import "../App.css"
import React from "react";
import {NavLink} from "react-router-dom"

function NavBar ({onHandleCardsClick}) {

    function handleCardsClick () {
        onHandleCardsClick()
    }

    return (
        <nav id="navBar">
           <NavLink to="*">Home</NavLink>
           <NavLink to="/CardsContainer" onClick={handleCardsClick}>Cards</NavLink>
           <NavLink to="/DeckBuilder">Build Your Decks</NavLink>
           <NavLink to="/SignUp">SignUp</NavLink>
           <NavLink to="/Login">Login</NavLink>
           <NavLink to="/SignOut">SignOut</NavLink>
        </nav>
    )
}

export default NavBar