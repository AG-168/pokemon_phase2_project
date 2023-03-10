import "../App.css"
import React from "react";
import {NavLink} from "react-router-dom"
import Userfront from "@userfront/react";

function NavBar ({onHandleCardsClick}) {

    function handleCardsClick () {
        onHandleCardsClick()
    }

    return (
        <nav id="navBar">
           <NavLink to="*" className="link"> Home</NavLink>
           <NavLink to="/CardsContainer" className="link" onClick={handleCardsClick}> Cards</NavLink>
           <NavLink to="/DeckBuilder" className="link"> Build Your Decks</NavLink>
           <NavLink to="/Login" className="link"> Login</NavLink>
           <NavLink to="/SignUp" className="link"> SignUp</NavLink>
           <NavLink to="/SignOut" className="link" onClick={Userfront.logout}>SignOut</NavLink>
        </nav>
    )
}

export default NavBar