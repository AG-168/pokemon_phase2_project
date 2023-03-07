import React from "react";

function CardItem ({ name, image}) {
    return (
        <div className="indiv-card">
            Name: {name}
            <img src={image} alt={name}/>
            <button>Add to Wishlist</button>
        </div>
    )
}

export default CardItem