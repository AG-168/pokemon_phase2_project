import React from "react";

function CardItem ({ name, image}) {
    return (
        <div>
            
            <img src={image} alt={name}/>
            <span>Name: {name}</span>
            <span>
            <button>Add to Wishlist</button>
            </span>
        </div>
    )
}

export default CardItem