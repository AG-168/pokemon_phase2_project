import React from "react";

function CardItem ({ name, image}) {
    return (
        <div className="indiv-card">
            
            <img src={image} alt={name}/>
            <h3>Name: {name}</h3>
            <p>
            <button>Add to Wishlist</button>
            </p>
        </div>
    )
}

export default CardItem